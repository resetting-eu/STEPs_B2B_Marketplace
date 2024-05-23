<?php
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

// Consulta para obter os nomes das companhias
$sql = "SELECT CompanyName FROM company"; // Substitua 'company' pelo nome da sua tabela
$result = $conn->query($sql);

$companies = array();

if ($result->num_rows > 0) {
    // Armazenar os dados no array
    while($row = $result->fetch_assoc()) {
        $companies[] = ['name' => $row["CompanyName"]];
    }
}

// Fechar a conexão
$conn->close();

// Retornar os dados como JSON
echo json_encode($companies);
?>
