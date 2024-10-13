<?php
include "iscte_utils.php";

session_start();
// session_destroy(); session_start();  // @DEBUG: If you wish to clear all PHP session variables, uncomment this statement
iscte_debugSessionFields();

// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ("POST" == $_SERVER["REQUEST_METHOD"] && isset($_POST["Email"])) {
    iscte_debugPostFields();
    $email = $_POST["Email"]; iscte_debug("email:$email");
    $password = $_POST["Password"]; iscte_debug("password:$password");

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
        iscte_error("User not found. Please try again.");
        $errorMsg = "User not found. Please try again.";
    } else {
        // * =1: (OK) It should return only 1 (one) row
        $user = $dbResult->fetch_assoc();
        $dbResult->free_result(); // Free dbResult set
        iscte_debug("user.Email:".$user["Email"]."; user.LoginID:".$user["LoginID"]);

        /**
         * Verify if password is the same as supplied
         */
        if (!password_verify($password, $user["Password"])) {
            iscte_error("Incorrect password. Please try again.");
            $errorMsg = "Incorrect password. Please try again.";
        } else {
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
    <form method="post">
        <div class="border">
            <div style="color: red"><?php echo $errorMsg ?></div>
            <h2>Resetting Login</h2>
            <label for="Email">Email:</label>
            <input type="email" id="Email" name="Email" required>
            <label for="Password">Password:</label>
            <input type="password" id="Password" name="Password" required>
            <br><br>
            <button type="submit">Login</button>
        </div>
    </form>
</body>
</html>