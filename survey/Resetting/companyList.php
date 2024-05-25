<?php
include "iscte_utils.php";

session_start();

function populateCompaniesCombo($loginID) {
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

// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Ensure that to reach this page the user has registered or login successfully
    if (!isset($_SESSION["LoginID"])) {
        iscte_error("This form is only accessible by a logged-in user");
        $errorMsg = "This form is only accessible by a logged-in user";
        exit();
    }
    $loginID = $_SESSION["LoginID"];
    $name = $_SESSION["Name"];
    iscte_debug("loginID:$loginID; name:$name");
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
    <div class="border">
        <h2>Welcome, <?php echo $_SESSION['Name']; ?></h2>
        <h3>Please select the company you want to work with.</h3>
        <label for="company_select">Company name:</label>
        <div class="combobox combobox-list">
            <div class="group">
                <input id="company_select" class="cb_edit" type="text" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="cb1-listbox">
                <button id="cb1-button" tabindex="-1" aria-label="States" aria-expanded="false" aria-controls="cb1-listbox">
                <svg width="18" height="16" aria-hidden="true" focusable="false" style="forced-color-adjust: auto">
                    <polygon class="arrow" stroke-width="0" fill-opacity="0.75" fill="currentcolor" points="3,6 15,6 9,14"></polygon>
                </svg>
                </button>
            </div>
            <ul id="cb1-listbox" role="listbox" aria-label="Companies">
                <?php populateCompaniesCombo($loginID); ?>
            </ul>
        </div>
        <br><br>
        <button id="edit_button" onclick="editCompany()" style="display:none;">Edit Company</button>
        <button id="create_company" onclick="createCompany()">Create a New Company</button>
    </div>

    <script type="text/javascript" src="scripts/editable-combobox.js"></script>
    <script>
        // // Função para carregar as companhias no datalist usando AJAX
        // function loadCompanies() {
        //     var xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'companyList.php', true);

        //     xhr.onload = function () {
        //         if (xhr.status == 200) {
        //             var companies = JSON.parse(xhr.responseText);
        //             var datalist = document.getElementById('companies');

        //             console.log("@DEBUG: 1")
        //             // Adicionar as opções do datalist com base nos dados retornados
        //             companies.forEach(function (company) {
        //                 console.log("@DEBUG: 2")
        //                 var option = document.createElement('option');
        //                 option.value = company.name;
        //                 datalist.appendChild(option);
        //             });
        //         } else {
        //             console.error('Failed to load companies.');
        //         }
        //     };

        //     xhr.send();
        // }

        // // Chamada para carregar as companhias ao carregar a página
        // loadCompanies();

        // Função para lidar com o botão "Edit"
        function editCompany() {
            var companyName = document.getElementById('company_select').value;
            // Verificar se o nome da companhia está na lista
            var datalistOptions = Array.from(document.getElementById('companies').options);
            var isValidCompany = datalistOptions.some(option => option.value === companyName);

            if (isValidCompany) {
                // Redirecionar para a página de edição com o nome da companhia selecionada
                window.location.href = 'company.html?name=' + encodeURIComponent(companyName);
            } else {
                alert('Please select a valid company from the list.');
            }
        }

        // Função para lidar com o botão "Create"
        function createCompany() {
            window.location.href = 'company.html';
        }

        // Função para mostrar/ocultar botões baseado na seleção
        function toggleButtons() {
            var companyName = document.getElementById('company_select').value;
            var editButton = document.getElementById('edit_button');
            var createButton = document.getElementById('create_company');
            var datalistOptions = Array.from(document.getElementById('companies').options);
            var isValidCompany = datalistOptions.some(option => option.value === companyName);

            if (isValidCompany) {
                editButton.style.display = 'inline-block'; // Mostrar o botão Edit
                createButton.style.display = 'none'; // Ocultar o botão Create
            } else {
                editButton.style.display = 'none'; // Ocultar o botão Edit
                createButton.style.display = 'inline-block'; // Mostrar o botão Create
            }
        }
    </script>
</body>
</html>