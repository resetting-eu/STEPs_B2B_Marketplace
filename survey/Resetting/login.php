<?php
// Conectar ao banco de dados MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resetting";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Obter os dados do formulário de forma segura
$email = $_POST['email'];
$password = $_POST['password'];

// Preparar e executar a consulta SQL usando prepared statements
$stmt = $conn->prepare("SELECT * FROM login WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();

// Obter o resultado da consulta
$result = $stmt->get_result();

// Verifica se há algum resultado e se a senha está correta
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Verifica se a senha hash corresponde à senha fornecida
    if (password_verify($password, $user['password'])) {
        // Se as credenciais estiverem corretas, redireciona para a página companyList.html

        session_start();
        $_SESSION['LoginID'] = $user['LoginID'];
        

        header("Location: companyList.html");
        exit;
    } else {
        // Senha incorreta
        echo "Credenciais inválidas.";
    }
} else {
    // Email não encontrado na base de dados
    echo "Credenciais inválidas.";
}

// Fecha a consulta e a conexão com o banco de dados
$stmt->close();
$conn->close();
?>
