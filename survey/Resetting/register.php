<?php
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
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $company_description = $_POST["company_description"];

        // Hash da senha (recomendado para segurança)
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Preparar a inserção SQL
        $stmt = $conn->prepare("INSERT INTO login (name, email, password, company_description) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $hashed_password, $company_description);

        if ($stmt->execute()) {
            // Preparar e executar a consulta de seleção SQL
            $stmt = $conn->prepare("SELECT * FROM login WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();

            // Verificar se há resultados
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
        
                session_start();
                $_SESSION['LoginID'] = $row['LoginID'];
        
                // Registro feito com sucesso, redirecionar para companyList.html
                header("Location: companyListRegister.html");
                exit(); // Termina o script após o redirecionamento
            }
        } else {
            echo "Erro ao registrar: " . $stmt->error;
        }

        // Fechar o statement
        $stmt->close();
    }

    // Fechar conexão com o banco de dados
    $conn->close();
?>
