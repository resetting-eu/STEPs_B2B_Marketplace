<?php
include "iscte_utils.php";

session_start();
iscte_debugSessionFields();

/**
 * @brief called by the combobox init, this populates the cb1-listbox with the Empresas connected with this LoginID
 */
function populateCompaniesCombo() {
    $loginID = $_SESSION["LoginID"];

    // Connect to the Database
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($mysqli->connect_errno) {
        iscte_error("Failed to connect to the database: ".$mysqli->connect_error);
        $errorMsg = "Failed to connect to the database: ".$mysqli->connect_error;
        exit();
    }
    /**
     * Get the Companies (if any) connected to this loginID ==> dbResult
     */
    $dbSQL = "SELECT Company.CompanyID, CompanyName FROM Company INNER JOIN CompanyLogin INNER JOIN Login WHERE Login.LoginID = CompanyLogin.LoginID AND Company.CompanyID = CompanyLogin.CompanyID AND Login.LoginID=$loginID ORDER BY CompanyName";
    iscte_debug("dbSQL:$dbSQL");
    $dbResult = $mysqli->query($dbSQL);
    $mysqli->close();   // Close the connection to the database

    /**
     * Check dbResult num_rows:
     * * =0: (OK) No Companies related to this LoginID
     * * >0: (OK) One or more Companies related to this LoginID
     */
    iscte_debug("dbResult->num_rows:$dbResult->num_rows");
    if ($dbResult->num_rows > 0) {
        // Loop all dbResults and create the combobox options
        while ($row = $dbResult->fetch_assoc()) {
            echo '<li id="'.$row["CompanyID"].'" role="option">'.$row["CompanyName"].'</li>';
        }
    }
    $dbResult->free_result(); // Free dbResult set
}

$loginID = $_SESSION["LoginID"];
// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ("GET" == $_SERVER["REQUEST_METHOD"]) {
    /**
     * This is the first call, when the form has not been submitted yet.
     */

    // Ensure that to reach this page the user has registered or login successfully
    if (!isset($_SESSION["LoginID"])) {
        iscte_error("This form is only accessible by a logged-in user");
        $errorMsg = "This form is only accessible by a logged-in user";
        exit();
    }
    $name = $_SESSION["Name"];
    iscte_debug("loginID:$loginID; name:$name");
} else if ("POST" == $_SERVER["REQUEST_METHOD"]) {
    /**
     * This is the call, AFTER the form has been submitted (POST).
     */

    iscte_debugPostFields();
    $companyName = $_POST["CompanyName"];

    // Connect to the Database
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($mysqli->connect_errno) {
        iscte_error("Failed to connect to the database: ".$mysqli->connect_error);
        $errorMsg = "Failed to connect to the database: ".$mysqli->connect_error;
        exit();
    }

    /**
     * Do a first query: Get the companies (if any) with this CompanyName ==> dbResult. This tells us if:
     * * 1) The selected CompanyName is already exists on the database (OK?).
     * * 2) The selected CompanyName is new (OK).
     */
    $dbSQL = "SELECT * FROM Company WHERE CompanyName = \"$companyName\""; iscte_debug("dbSQL:$dbSQL");
    $dbResult = $mysqli->query($dbSQL);
    $mysqli->close(); // Close the connection to the database

    /**
     * Check database dbResults:
     * * If there is (at least) one row (it should be at most only one), this means we are on case 1) The selected CompanyName is already exists on the database.
     * * If there are no rows, this means we are on case 2) The selected CompanyName is new.
     */
    iscte_debug("dbResult->num_rows:$dbResult->num_rows");
    if ($dbResult->num_rows > 0) {
        /**
         * 1) The selected CompanyName is already exists on the database? This can happen if:
         * * 1.1) The user is editing HIS company (OK).
         * * 1.2) The user is inserting a NEW company with a name of a Company which already exists (NOK).
         */
        $row = $dbResult->fetch_assoc();
        $dbResult->free_result(); // Free dbResult set
        $companyID = $_SESSION["CompanyID"] = $row["CompanyID"]; iscte_debug("companyID:$companyID");

        /**
         * Do a second query: Get the CompanyLogin (if any) with this CompanyID AND with this LoginID ==> dbResult. This tells us if:
         * * If there is (at least) one row (it should be at most only one), this means we are on case 1.1) The user is editing HIS company (OK).
         * * If there are no rows, this means we are on case 1.2) The user is inserting a NEW company with a name of a Company which already exists (NOK).
         */
        $dbSQL = "SELECT * FROM CompanyLogin WHERE CompanyID = $companyID AND LoginID = $loginID"; iscte_debug("dbSQL:$dbSQL");
        $dbResult = $mysqli->query($dbSQL);
        $mysqli->close(); // Close the connection to the database

        /**
         * Check database dbResults:
         * * If there is (at least) one row (it should be at most only one), this means we are on case 1.1) The user is editing HIS company (OK).
         * * If there are no rows, this means we are on case 1.2) The user is inserting a NEW company with a name of a Company which already exists (NOK).
         */
        iscte_debug("dbResult->num_rows:$dbResult->num_rows");
        if (1 == $dbResult->num_rows) {
            /**
             * 1.1) The user is editing HIS company (OK): Proceed to Edit the company with CompanyID.
             */
            $dbResult->free_result(); // Free dbResult set
        } else {
            /**
             * 1.2) The user is inserting a NEW company with a name which already exists (NOK): State Error and return to the form.
             */
            $dbResult->free_result(); // Free dbResult set
            iscte_error("The selected Company Name is already in use. Please try again.");
            $errorMsg = "The selected Company Name is already in use. Please try again.";
            exit();
        }
    } else {
        /**
         * 2) The selected CompanyName is new (OK). Do the following actions:
         * * 2.1) Create a new Company with this CompanyName.
         * * 2.2) Get the CompanyID of the new Company (fill in session).
         * * 2.3) Create a new CompanyLogin with the CompanyID and the LoginID.
         * * 2.4) Proceed to Edit the company with CompanyID.
         */
        $dbResult->free_result(); // Free dbResult set

        // 2.1) Create a new Company with this CompanyName.
        $dbSQL = "INSERT INTO Company (CompanyName) VALUES (\"$companyName\")"; iscte_debug("dbSQL:$dbSQL");
        iscte_debugAlert("0");
        $dbResult = $mysqli->query($dbSQL);
        iscte_debugAlert("1");
        $mysqli->close(); // Close the connection to the database
        iscte_debugAlert("2");
        iscte_debug("dbResult:$dbResult");  // Check query result
        iscte_debugAlert("3");
        if ($dbResult === false) {
            iscte_debugAlert("4");
            iscte_error("Error creating Company. Please try again.");
            $errorMsg = "Error creating Company. Please try again.";
            exit();
        }

        // 2.2) Get the CompanyID of the new Company (fill in session).
        $dbSQL = "SELECT CompanyID FROM Company WHERE CompanyName = \"$companyName\""; iscte_debug("dbSQL:$dbSQL");
        $dbResult = $mysqli->query($dbSQL);
        $mysqli->close(); // Close the connection to the database
        iscte_debug("dbResult->num_rows:$dbResult->num_rows");
        if (1 != $dbResult->num_rows) {
            $dbResult->free_result(); // Free dbResult set
            iscte_error("Error getting Company. Please try again.");
            $errorMsg = "Error getting Company. Please try again.";
            exit();
        }
        $row = $dbResult->fetch_assoc();
        $dbResult->free_result(); // Free dbResult set
        $companyID = $_SESSION["CompanyID"] = $row["CompanyID"]; iscte_debug("companyID:$companyID");

        // 2.3) Create a new CompanyLogin with the CompanyID and the LoginID.
        $dbSQL = "INSERT INTO CompanyLogin (CompanyID, LoginID) VALUES (\"$companyID\", \"$loginID\")"; iscte_debug("dbSQL:$dbSQL");
        $dbResult = $mysqli->query($dbSQL);
        $mysqli->close(); // Close the connection to the database
        iscte_debug("dbResult:$dbResult");  // Check query result
        if (!$dbResult) {
            iscte_error("Error creating CompanyLogin. Please try again.");
            $errorMsg = "Error creating CompanyLogin. Please try again.";
            exit();
        }
    }
    /**
     * 2.4) Proceed to Edit the company with CompanyID.
     */
    iscte_debugAndExit("Jumping to company.php");    // @DEBUG: If you need debug info BEFORE jumping to the next page, uncomment this statement
    header("Location: company.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Company Selection</title>
    <style>
        /* Centralizar o conteúdo */
        body, html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Estilos adicionais */
        h2, h3 {
            text-align: center;
        }
    </style>
</head>
<body>
    <script type="text/javascript" src="scripts/editable-combobox.js"></script>
    <script>
        // Função para mostrar/ocultar botões baseado na seleção
        function updateValue() {
            let combobox = document.getElementById("company_select");
            var companyName = combobox.value;
            document.getElementById("CompanyName").value = companyName;
            console.log("@DEBUG: [textoCombo:" + companyName + "]");
            let optionList = document.getElementById('cb1-listbox').getElementsByTagName('LI');
            var editExistingCompany = false;
            for (let i = 0; i < optionList.length; i++) {
                console.log("@DEBUG: [id:" + optionList[i].id + "; Text:" + optionList[i].innerText + "]");
                if (companyName.toLowerCase() == optionList[i].innerText.toLowerCase()) {
                    editExistingCompany = true;
                    break;
                }
            }
            let button = document.getElementById("create-button");
            if (editExistingCompany) {
                button.innerText = "Edit existing company";
                button.style.background = "green";
                button.disabled = false;
            } else if ("" == companyName.trim()) {
                button.innerText = "Select company / Create new company";
                button.style.background = "grey";
                button.disabled = true;
            } else {
                button.innerText = "Create new company";
                button.style.background = "blue";
                button.disabled = false;
            }
            return true;
        }

        // var nodes = this.listboxNode.getElementsByTagName('LI');
        // for (var i = 0; i < nodes.length; i++) {
        //     var node = nodes[i];
        //     this.allOptions.push(node);
    </script>

    <form method="post" onsubmit="javascript: return updateValue();">
        <div class="border">
            <div style="color: red"><?php echo $errorMsg ?></div>
            <h2>Welcome, <?php echo $_SESSION['Name']; ?></h2>
            <h3>Please select the company you want to edit.</h3>
            <input type="hidden" id="CompanyName" name="CompanyName">
            <label for="company_select">Company name:</label>
            <div class="combobox combobox-list">
                <div class="group">
                    <input id="company_select" class="cb_edit" type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="cb1-listbox" onkeyup="updateValue()" oninput="updateValue()">
                    <button type="button" id="cb1-button" aria-label="Companies" aria-expanded="false" aria-controls="cb1-listbox" tabindex="-1" onkeyup="updateValue()" onclick="updateValue()">
                    <svg width="18" height="16" aria-hidden="true" focusable="false" style="forced-color-adjust: auto">
                        <polygon class="arrow" stroke-width="0" fill-opacity="0.75" fill="currentcolor" points="3,6 15,6 9,14"></polygon>
                    </svg>
                    </button>
                </div>
                <ul id="cb1-listbox" role="listbox" aria-label="Companies" onkeyup="updateValue()" onclick="updateValue()">
                    <?php populateCompaniesCombo(); ?>
                </ul>
            </div>
            <br><br>
            <button id="create-button" type="submit" disabled="disabled" style="background:grey";>Select Company / Create New Company</button>
        </div>
    </form>
</body>
</html>