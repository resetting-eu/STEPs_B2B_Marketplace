<?php
    // Configurações do banco de dados
    $servername = "51.210.142.141";
    $username = "root";
    $password = "";
    $dbname = "resetting";

    // Conectar ao banco de dados
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar conexão
    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }

    // Processar o formulário de registro quando enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $company_description = $_POST["company_description"];

        // Hash da senha (recomendado para segurança)
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Preparar e executar a inserção SQL
        $sql = "INSERT INTO login (name, email, password, company_description) VALUES ('$name', '$email', '$hashed_password', '$company_description')";

        if ($conn->query($sql) === TRUE) {

            $sql = "SELECT * FROM Login WHERE email='$email'";
            $result = $conn->query($sql);

            // Verificar se há resultados
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
        
                session_start();
                $_SESSION['LoginID'] = $row['LoginID'];
        
                // Registro feito com sucesso, redirecionar para companyList.html
                header("Location: companyList.html");
                exit(); // Termina o script após o redirecionamento
            }
        } else {
            echo "Erro ao registrar: " . $conn->error;
        }
    }

    // Fechar conexão com o banco de dados
    $conn->close();
?>
