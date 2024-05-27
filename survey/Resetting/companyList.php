<?php
include "iscte_utils.php";

session_start();
iscte_debugSessionFields();

function populateCompaniesCombo() {
    $loginID = $_SESSION["LoginID"];
    // Connect to the Database
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($conn->connect_errno) {
        iscte_error("Failed to connect to the database: ".$conn->connect_error);
        $errorMsg = "Failed to connect to the database: ".$conn->connect_error;
        exit();
    }

    // Get the companies (if any) of this loginID ==> result
    $sql = "SELECT Company.CompanyID, CompanyName FROM Company INNER JOIN CompanyLogin INNER JOIN Login WHERE Login.LoginID = CompanyLogin.LoginID AND Company.CompanyID = CompanyLogin.CompanyID AND Login.LoginID=$loginID ORDER BY CompanyName";
    iscte_debug("sql:$sql");
    $result = $conn->query($sql);
    // Close the connection to the database
    $conn->close();

    // Check database results
    iscte_debug("result->num_rows:$result->num_rows");
    if ($result->num_rows > 0) {
        // Loop all results and create the combobox options
        while ($row = $result->fetch_assoc()) {
            echo '<li id="'.$row["CompanyID"].'" role="option">'.$row["CompanyName"].'</li>';
        }
    }
    $result->free_result(); // Free result set
}

$loginID = $_SESSION["LoginID"];
// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ("GET" == $_SERVER["REQUEST_METHOD"]) {
    // Ensure that to reach this page the user has registered or login successfully
    if (!isset($_SESSION["LoginID"])) {
        iscte_error("This form is only accessible by a logged-in user");
        $errorMsg = "This form is only accessible by a logged-in user";
        exit();
    }
    $name = $_SESSION["Name"];
    iscte_debug("loginID:$loginID; name:$name");
} else if ("POST" == $_SERVER["REQUEST_METHOD"]) {
    iscte_debugPostFields();
    $companyName = $_POST["companyName"];

    // Connect to the Database
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($conn->connect_errno) {
        iscte_error("Failed to connect to the database: ".$conn->connect_error);
        $errorMsg = "Failed to connect to the database: ".$conn->connect_error;
        exit();
    }

    // Get the companies (if any) of this loginID ==> result
    $sql = "SELECT Login.LoginID, Company.CompanyID FROM Company INNER JOIN CompanyLogin INNER JOIN Login WHERE Login.LoginID = CompanyLogin.LoginID AND Company.CompanyID = CompanyLogin.CompanyID AND Company.CompanyName = $companyName";
    iscte_debug("sql:$sql");
    $result = $conn->query($sql);
    // Close the connection to the database
    $conn->close();

    // Check database results
    iscte_debug("result->num_rows:$result->num_rows");
    if ($result->num_rows > 0) {    // companyName already exists in the database?
        // Loop all results, searching for my LoginID as
        while ($row = $result->fetch_assoc()) {
            echo '<li id="'.$row["CompanyID"].'" role="option">'.$row["CompanyName"].'</li>';
        }
    }
    $result->free_result(); // Free result set
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
            document.getElementById("companyName").value = companyName;
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
            <h2>Resetting Login</h2>
            <input type="hidden" id="companyName" name="companyName">
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

    <!-- <form method="post" onsubmit="javascript: return updateValue();">
        <div class="border">
            <div style="color: red"><?php echo $errorMsg ?></div>
            <h2>Welcome, <?php echo $_SESSION['Name']; ?></h2>
            <h3>Please select the company you want to edit.</h3>
            <input type="text" id="companyName">
            <input type="text" id="companyName1" value="test">
            <label for="company_select">Company name:</label>
            <!- <div class="combobox combobox-list">
                <div class="group">
                    <input id="company_select" class="cb_edit" type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="cb1-listbox" oninput="updateValue()">
                    <button type="button" id="cb1-button" aria-label="Companies" aria-expanded="false" aria-controls="cb1-listbox" tabindex="-1">
                    <svg width="18" height="16" aria-hidden="true" focusable="false" style="forced-color-adjust: auto">
                        <polygon class="arrow" stroke-width="0" fill-opacity="0.75" fill="currentcolor" points="3,6 15,6 9,14"></polygon>
                    </svg>
                    </button>
                </div>
                <ul id="cb1-listbox" role="listbox" aria-label="Companies">
                    <?php populateCompaniesCombo(); ?>
                </ul>
            </div> --
            <br><br>
            <button id="create-button" type="submit" style="background:grey";>Select Company / Create New Company</button>
        </div>
    </form> -->

</body>
</html>