<?php
session_start();
// if (!isset($_SESSION['LoginID'])){
//     die("User needs to login");
// }
// Configurações de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resetting_survey_dev";

// Criação da conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação de conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Consulta para obter o nome do usuário
// if (isset($_SESSION['LoginID'])) {
//     $loginID = $_SESSION['LoginID'];
//     $userSql = "SELECT Name FROM Login WHERE Email = '$loginID'";
//     $userResult = $conn->query($userSql);

//     if ($userResult->num_rows > 0) {
//         $userRow = $userResult->fetch_assoc();
//         $_SESSION['UserName'] = $userRow['Name'];
//     }
// }

// Fechar a conexão
$conn->close();

// Retornar os dados como JSON
echo json_encode($companies);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Company Selection</title>
    <style>
        /* Estilo para a dropdown editável com seta menor */
        .custom-dropdown {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .custom-dropdown input {
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            padding-right: 10px; /* Espaço para a seta */
            font-size: 16px;
        }

        .custom-dropdown::after {
            content: "\25BC"; /* Seta para baixo */
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            font-size: 10px; /* Tamanho da seta*/
            color: black; /* Cor da seta */
            pointer-events: none;
        }

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
        <h2>Welcome, <?php echo isset($_SESSION['Name']) ? $_SESSION['Name'] : ; ?>!</h2>
        <h3>Please choose the company that you want to work with!</h3>
        <label for="company_select">Company name:</label><br>
        <div class="custom-dropdown">
            <input list="companies" id="company_select" name="company_select" oninput="toggleButtons()">
            <datalist id="companies"></datalist>
        </div>
        <br><br>
        <button id="edit_button" onclick="editCompany()" style="display:none;">Edit Company</button>
        <button id="create_company" onclick="createCompany()">Create a New Company</button>
    </div>

    <script>
        // Função para carregar as companhias no datalist usando AJAX
        function loadCompanies() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'companyList.php', true);

            xhr.onload = function () {
                if (xhr.status == 200) {
                    var companies = JSON.parse(xhr.responseText);
                    var datalist = document.getElementById('companies');

                    // Adicionar as opções do datalist com base nos dados retornados
                    companies.forEach(function (company) {
                        var option = document.createElement('option');
                        option.value = company.name;
                        datalist.appendChild(option);
                    });
                } else {
                    console.error('Failed to load companies.');
                }
            };

            xhr.send();
        }

        // Chamada para carregar as companhias ao carregar a página
        loadCompanies();

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