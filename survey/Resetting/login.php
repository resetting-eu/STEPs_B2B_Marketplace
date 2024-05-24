<?php
session_start();

// Conectar ao banco de dados MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resetting_survey_dev";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Obter os dados do formulário de forma segura
if (isset($_POST['Email']) && isset($_POST['Password'])) {
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    // Preparar e executar a consulta SQL usando prepared statements
    $stmt = $conn->prepare("SELECT * FROM Login WHERE Email = ?");
    $stmt->bind_param("s", $Email);
    $stmt->execute();

    // Obter o resultado da consulta
    $result = $stmt->get_result();

    // Verifica se há algum resultado e se a senha está correta
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verifica se a senha hash corresponde à senha fornecida
        if (password_verify($Password, $user['Password'])) {
            // Se as credenciais estiverem corretas, redireciona para a página companyList.php

            $_SESSION['LoginID'] = $user['Email']; // Usando o e-mail como ID da sessão
            header("Location: companyList.php");
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
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Resetting</title>
</head>
<body>
    <form action="login.php" method="post">
    <div class="border">
        <h2>Resetting</h2>
            <label for="Email">Email:</label>
            <input type="Email" id="Email" name="Email" required>
            <label for="Password">Password:</label>
            <input type="Password" id="Password" name="Password" required>
            <br><br>
            <button type="submit">Login</button>
    </div>
</form>
</body>
</html>
