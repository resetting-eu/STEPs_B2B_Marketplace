<?php
include "iscte_utils.php";

session_start();
iscte_debugSessionFields();

// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["Email"])) {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $password = $_POST["Password"];
    $description = $_POST["Description"];
    // Hashed password (recommended for increased security)
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    iscte_debug("name:$name; email:$email; password:$password; passwordHash:$passwordHash; description:$description");

    // Connect to the Database
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($conn->connect_errno) {
        iscte_error("Failed to connect to the database: ".$conn->connect_error);
        $errorMsg = "Failed to connect to the database: ".$conn->connect_error;
        exit();
    }

    // Check if there already is a Login element with the inserted Email ==> result
    $sql = "SELECT * FROM Login WHERE Email = \"$email\""; iscte_debug("sql:$sql");
    $result = $conn->query($sql);

    // Check database results
    iscte_debug("result->num_rows:$result->num_rows");
    if ($result->num_rows > 0) {   // If someone else already has this e-mail, reject the insertion
        $result->free_result(); // Free result set
        iscte_error("A user with the inserted e-mail already exists.<BR>Please try again.");
        $errorMsg = "A user with the inserted e-mail already exists.<BR>Please try again.";
    } else {
        $result->free_result(); // Free result set
        // Insert the new user in the database
        $sql = "INSERT INTO Login (Name, Email, Password, Description) VALUES (\"$name\", \"$email\", \"$passwordHash\", \"$description\")"; iscte_debug("sql:$sql");
        if (!$conn->query($sql)) { // If operation was NOT successful
            iscte_error("Error inserting new user in database. Please try again.");
            $errorMsg = "Error inserting new user in database. Please try again.";
        } else {
            // Get Login elements with the inserted Email ==> result
            $sql = "SELECT * FROM Login WHERE Email = \"$email\"";
            iscte_debug("sql:$sql");
            $result = $conn->query($sql);
            $conn->close(); // Close the connection to the database

            // Check database results
            iscte_debug("result->num_rows:$result->num_rows");
            if (1 != $result->num_rows) {   // There can be only 1 (one) entry with this email.
                $result->free_result(); // Free result set
                // Email not found on database
                iscte_error("User not inserted. Please try again.");
                $errorMsg = "User not inserted. Please try again.";
            } else {
                $user = $result->fetch_assoc();
                $result->free_result(); // Free result set
                iscte_debug("user.Email:".$user["Email"]."; user.LoginID:".$user["LoginID"]);

                // Store Login Info in session
                $_SESSION["LoginID"] = $user["LoginID"];
                $_SESSION["Name"] = $user["Name"];

                // If credentials are OK, jump to next page
                // iscte_debugAndExit("Jumping to companyList.php");    // Debug info if required
                header("Location: companyList.php");
                exit();
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Resetting</title>
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
    <form method="post">
        <div class="border">
            <div style="color: red"><?php echo $errorMsg ?></div>
            <h2>Register user in Resetting</h2>
            <label for="Name">Name:</label>
            <input type="text" id="Name" name="Name" required><br><br>
            <label for="Email">Email:</label>
            <input type="email" id="Email" name="Email" required><br><br>
            <label for="Password">Password:</label>
            <input type="password" id="Password" name="Password" required><br><br>
            <label for="Description">Any comments on the user:</label>
            <textarea id="Description" name="Description" rows="4" cols="50"></textarea>
            <br><br>
            <button type="submit">Submit</button>
        </div>
    </form>
</body>
</html>