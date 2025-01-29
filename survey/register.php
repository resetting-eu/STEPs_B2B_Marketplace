<?php
include "atd_utils.php";

session_start();
// session_destroy(); session_start();  // @DEBUG: If you wish to clear all PHP session variables, uncomment this statement
atd_debugSessionFields();

// Get the information from the HTML form's POST action
atd_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
$errorMsg = "";
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["Email"])) {
    atd_debugPostFields();
    $name = $_POST["Name"]; atd_debug("name:$name");
    $email = $_POST["Email"]; atd_debug("email:$email");
    $password = $_POST["Password"]; atd_debug("password:$password");
    $description = $_POST["Description"]; atd_debug("description:$description");
    // Hashed password (recommended for increased security)
    $passwordHash = password_hash($password, PASSWORD_DEFAULT); atd_debug("passwordHash:$passwordHash");

    // Connect to the Database
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($mysqli->connect_errno) {
        atd_error("Failed to connect to the database: ".$mysqli->connect_error);
        $errorMsg = "Failed to connect to the database: ".$mysqli->connect_error;
        exit();
    }

    /**
     * Get all Login elements with the inserted Email ==> dbResult
     */
    $dbSQL = "SELECT * FROM Login WHERE Email = \"$email\""; atd_debug("dbSQL:$dbSQL");
    $dbResult = $mysqli->query($dbSQL);

    /**
     * Check dbResult num_rows:
     * * =0: (OK) Not found
     * * >0: (NOK) There is already another user with the same email
     */
    atd_debug("dbResult->num_rows:$dbResult->num_rows");
    if ($dbResult->num_rows > 0) {
        $dbResult->free_result(); // Free dbResult set
        // * >0: (NOK) There is already another user with the same email
        atd_error("A user with the inserted e-mail already exists.<BR>Please try again.");
        $errorMsg = "A user with the inserted e-mail already exists.<BR>Please try again.";
    } else {
        $dbResult->free_result(); // Free dbResult set
        // * =0: (OK) Not found

        /**
         * Insert the new user in the database
         */
        $dbSQL = "INSERT INTO Login (Name, Email, Password, Description) VALUES (\"$name\", \"$email\", \"$passwordHash\", \"$description\")"; atd_debug("dbSQL:$dbSQL");
        if (!$mysqli->query($dbSQL)) { // If operation was NOT successful
            atd_error("Error inserting new user in database. Please try again.");
            $errorMsg = "Error inserting new user in database. Please try again.";
        } else {
            /**
             * Get the generated LoginID of the element that was inserted ==> dbResult
             */
            $dbSQL = "SELECT * FROM Login WHERE Email = \"$email\""; atd_debug("dbSQL:$dbSQL");
            $dbResult = $mysqli->query($dbSQL);
            $mysqli->close(); // Close the connection to the database

            /**
             * Check dbResult num_rows:
             * * =0: (NOK) Not found
             * * =1: (OK) It should return only 1 (one) row
             * * >1: (NOK) There can only be one user with the same email
             */
            atd_debug("dbResult->num_rows:$dbResult->num_rows");
            if (1 != $dbResult->num_rows) {
                $dbResult->free_result(); // Free dbResult set
                // * =0: (NOK) Not found
                // * >1: (NOK) There can only be one user with the same email
                atd_error("User not inserted. Please try again.");
                $errorMsg = "User not inserted. Please try again.";
            } else {
                // * =1: (OK) It should return only 1 (one) row
                $user = $dbResult->fetch_assoc();
                $dbResult->free_result(); // Free dbResult set
                atd_debug("user.Email:".$user["Email"]."; user.LoginID:".$user["LoginID"]);

                // Store Login Info in session
                $_SESSION["LoginID"] = $user["LoginID"];
                $_SESSION["Name"] = $user["Name"];
                atd_debugSessionFields();

                // If credentials are OK, jump to next page
                // atd_debugAndExit("Jumping to companyList.php");    // @DEBUG: If you need debug info BEFORE jumping to the next page, uncomment this statement
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
    <link rel="stylesheet" href="style.css">
    <title>Resetting</title>
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