<?php
// Conexão com o banco de dados (substitua os dados conforme necessário)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resetting";

// Criar conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

session_start();
$sql = "SELECT company.CompanyID, company_name FROM company INNER JOIN companylogin INNER JOIN login WHERE login.loginid=companylogin.loginid AND company.companyid=companylogin.CompanyID AND login.loginid=" . $_SESSION['LoginID'];

// Executar a consulta
$result = $conn->query($sql);

// Array para armazenar as companhias
$companies = [];

// Verificar se há resultados
if ($result->num_rows > 0) {
    // Loop através dos resultados e armazenar no array
    while ($row = $result->fetch_assoc()) {
        $companies[] = [
            'id' => $row['CompanyID'],
            'name' => $row['company_name']
        ];
    }
}

// Fechar conexão com o banco de dados
$conn->close();

// Retornar os resultados como JSON
header('Content-Type: application/json');
echo json_encode($companies);
?>
