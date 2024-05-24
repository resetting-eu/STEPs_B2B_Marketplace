<?php
include "iscte_utils.php";

session_start();

// Get the information from the HTML form's POST action
iscte_debug("_SERVER[REQUEST_METHOD]:".$_SERVER["REQUEST_METHOD"]);
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["Email"])) {
    $email = $_POST["Email"];
    $password = $_POST["Password"];
    iscte_debug("email:$email; password:$password");

    // Connect to the Database
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
    if ($conn->connect_errno) {
        iscte_error("Failed to connect to the database: ".$conn->connect_error);
        $errorMsg = "Failed to connect to the database: ".$conn->connect_error;
        exit();
    }

    // Get Login elements with the inserted Email ==> result
    $sql = "SELECT * FROM Login WHERE Email = \"$email\"";
    iscte_debug("sql:$sql");
    $result = $conn->query($sql);
    // Close the connection to the database
    $conn->close();

    // Check database results
    iscte_debug("result->num_rows:$result->num_rows");
    if (1 != $result->num_rows) {   // There can be only 1 (one) entry with this email.
        $result->free_result(); // Free result set
        // Email not found on database
        iscte_error("User not found. Please try again.");
        $errorMsg = "User not found. Please try again.";
    } else {
        $user = $result->fetch_assoc();
        $result->free_result(); // Free result set
        iscte_debug("user.Email:".$user["Email"]."; user.LoginID:".$user["LoginID"]);

        // Verify if password is the same as supplied
        if (!password_verify($password, $user["Password"])) {
            iscte_error("Incorrect password. Please try again.");
            $errorMsg = "Incorrect password. Please try again.";
        } else {
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