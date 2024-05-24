<?php
session_start();

    // Configurações do banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "resetting_survey_dev";

 // Conectar ao banco de dados
 $conn = new mysqli($servername, $username, $password, $dbname);

 // Verificar conexão
 if ($conn->connect_error) {
     die("Erro na conexão: " . $conn->connect_error);
 }

 // Processar o formulário de registro quando enviado
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
     $Name = $_POST["Name"];
     $Email = $_POST["Email"];
     $Password = $_POST["Password"];
     $Description = $_POST["Description"];

     // Hash da senha (recomendado para segurança)
     $hashed_password = password_hash($Password, PASSWORD_DEFAULT);

     // Preparar e executar a inserção SQL
     $sql = "INSERT INTO Login (Name, Email, Password, Description) VALUES ('$Name', '$Email', '$hashed_password', '$Description')";

     if ($conn->query($sql) === TRUE) {

         $sql = "SELECT * FROM Login WHERE Email='$Email'";
         $result = $conn->query($sql);

         // Verificar se há resultados
         if ($result->num_rows > 0) {
             $row = $result->fetch_assoc();
     
             session_start();
             $_SESSION['LoginID'] = $row['LoginID'];
     
             // Registro feito com sucesso
             header("Location: login.php");
             exit(); // Termina o script após o redirecionamento
         }
     } else {
         echo "Erro ao registrar: " . $conn->error;
     }
 }

 // Fechar conexão com o banco de dados
 $conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Register Resetting</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .border {
            max-width: 400px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button[type="submit"] {
            width: 100%;
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            display: block;
            text-decoration: none;
        }
        button[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <form action="register.php" method="post">
        <div class="border">
            <h2>Register</h2>
            <label for="Name">Name:</label>
            <input type="text" id="Name" name="Name" required><br><br>
            <label for="Email">Email:</label>
            <input type="email" id="Email" name="Email" required><br><br>
            <label for="Password">Password:</label>
            <input type="password" id="Password" name="Password" required><br><br>
            <label for="Description">Please provide a brief description of the organization's business and offer:</label>
            <textarea id="Description" name="Description" rows="4" cols="50"></textarea><br><br>
            <button type="submit" value="Submit">Submit</button>
        </div>
    </form>
</body>
</html>
