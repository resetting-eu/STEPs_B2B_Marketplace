<?php
include "iscte_utils.php";

session_start();
// session_destroy(); session_start();  // @DEBUG: If you wish to clear all PHP session variables, uncomment this statement
iscte_debugSessionFields();

// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["Email"])) {
    iscte_debugPostFields();
    $name = $_POST["Name"]; iscte_debug("name:$name");
    $email = $_POST["Email"]; iscte_debug("email:$email");
    $password = $_POST["Password"]; iscte_debug("password:$password");
    $description = $_POST["Description"]; iscte_debug("description:$description");
    // Hashed password (recommended for increased security)
    $passwordHash = password_hash($password, PASSWORD_DEFAULT); iscte_debug("passwordHash:$passwordHash");

    // Connect to the Database
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($mysqli->connect_errno) {
        iscte_error("Failed to connect to the database: ".$mysqli->connect_error);
        $errorMsg = "Failed to connect to the database: ".$mysqli->connect_error;
        exit();
    }

    /**
     * Get all Login elements with the inserted Email ==> dbResult
     */
    $dbSQL = "SELECT * FROM Login WHERE Email = \"$email\""; iscte_debug("dbSQL:$dbSQL");
    $dbResult = $mysqli->query($dbSQL);

    /**
     * Check dbResult num_rows:
     * * =0: (OK) Not found
     * * >0: (NOK) There is already another user with the same email
     */
    iscte_debug("dbResult->num_rows:$dbResult->num_rows");
    if ($dbResult->num_rows > 0) {
        $dbResult->free_result(); // Free dbResult set
        // * >0: (NOK) There is already another user with the same email
        iscte_error("A user with the inserted e-mail already exists.<BR>Please try again.");
        $errorMsg = "A user with the inserted e-mail already exists.<BR>Please try again.";
    } else {
        $dbResult->free_result(); // Free dbResult set
        // * =0: (OK) Not found

        /**
         * Insert the new user in the database
         */
        $dbSQL = "INSERT INTO Login (Name, Email, Password, Description) VALUES (\"$name\", \"$email\", \"$passwordHash\", \"$description\")"; iscte_debug("dbSQL:$dbSQL");
        if (!$mysqli->query($dbSQL)) { // If operation was NOT successful
            iscte_error("Error inserting new user in database. Please try again.");
            $errorMsg = "Error inserting new user in database. Please try again.";
        } else {
            /**
             * Get the generated LoginID of the element that was inserted ==> dbResult
             */
            $dbSQL = "SELECT * FROM Login WHERE Email = \"$email\""; iscte_debug("dbSQL:$dbSQL");
            $dbResult = $mysqli->query($dbSQL);
            $mysqli->close(); // Close the connection to the database

            /**
             * Check dbResult num_rows:
             * * =0: (NOK) Not found
             * * =1: (OK) It should return only 1 (one) row
             * * >1: (NOK) There can only be one user with the same email
             */
            iscte_debug("dbResult->num_rows:$dbResult->num_rows");
            if (1 != $dbResult->num_rows) {
                $dbResult->free_result(); // Free dbResult set
                // * =0: (NOK) Not found
                // * >1: (NOK) There can only be one user with the same email
                iscte_error("User not inserted. Please try again.");
                $errorMsg = "User not inserted. Please try again.";
            } else {
                // * =1: (OK) It should return only 1 (one) row
                $user = $dbResult->fetch_assoc();
                $dbResult->free_result(); // Free dbResult set
                iscte_debug("user.Email:".$user["Email"]."; user.LoginID:".$user["LoginID"]);

                // Store Login Info in session
                $_SESSION["LoginID"] = $user["LoginID"];
                $_SESSION["Name"] = $user["Name"];
                iscte_debugSessionFields();

                // If credentials are OK, jump to next page
                // iscte_debugAndExit("Jumping to companyList.php");    // @DEBUG: If you need debug info BEFORE jumping to the next page, uncomment this statement
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