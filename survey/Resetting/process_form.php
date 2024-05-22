<?php
// Conexão com o banco de dados (substitua os dados conforme necessário)
$servername = "51.210.142.141";
$username = "root";
$password = "";
$dbname = "resetting";

// Estabelecer conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Processar os dados do formulário quando enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $company_name = $_POST["company_name"];
    $company_description = $_POST["company_description"];
    $reference_year = $_POST["reference_year"];
    $tourism_products = implode(", ", $_POST["tourism_products"]); // Salva como string separada por vírgula

    // Preparar e executar a inserção na tabela
    $sql = "INSERT INTO company (company_name, company_description, reference_year, tourism_products)
            VALUES ('$company_name', '$company_description', '$reference_year', '$tourism_products')";

    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir dados: " . $conn->error;
    }
}

// Fechar conexão com o banco de dados
$conn->close();
?>
