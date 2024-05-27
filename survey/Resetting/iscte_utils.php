<?php
define("ISCTE_DEBUG", true);

// Connection string to the database
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "");
define("DB_DATABASE", "resetting_survey_dev");

/**
 * @brief Prints a debug message in the Javascript Console (On Google Chrome, press F12 to see the console). Shows the file and line of code besides the message.
 * @param msg Text message to be printed
 */
function iscte_debug ($msg) {
    if (ISCTE_DEBUG) {
        $debugTrace = debug_backtrace();
        echo "<script>console.log('@DEBUG {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
    }
}

/**
 * @brief Prints a debug message in an alert Javascript window. Shows the file and line of code besides the message. Useful to stop the processing and alert.
 * @param msg Text message to be printed
 */
function iscte_debugAlert ($msg) {
    if (ISCTE_DEBUG) {
        $debugTrace = debug_backtrace();
        echo "<script>alert('@DEBUG {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
   }
}

/**
 * @brief Calls iscte_debug to print the message, but then exits the page. This is useful to debug the info just BEFORE jumping to a next page.
 * @param msg Text message to be printed
 */
function iscte_debugAndExit ($msg) {
    if (ISCTE_DEBUG) {
        iscte_debug($msg);
        iscte_debug("@@ EXIT @@");
        exit();   // This prevents going to the next page (so we can still see the information on the previous one)
    }
}

/**
 * @brief Prints all $_SESSION fields on the current page.
 */
function iscte_debugSessionFields () {
    iscte_debug("Start Printing _SESSION variables");
    foreach($_SESSION as $key => $value)
        iscte_debug("_SESSION key:$key; value:$value");
    iscte_debug("End Printing _SESSION variables");
}

/**
 * @brief Prints all $_POST fields on the current page.
 */
function iscte_debugPostFields () {
    iscte_debug("Start Printing _POST variables");
    foreach($_POST as $key => $value)
        iscte_debug("_POST key:$key; value:$value");
    iscte_debug("End Printing _POST variables");
}

/**
 * @brief Prints all $_GET fields on the current page.
 */
function iscte_debugGetFields () {
    iscte_debug("Start Printing _GET variables");
    foreach($_GET as $key => $value)
        iscte_debug("_GET key:$key; value:$value");
    iscte_debug("End Printing _GET variables");
}

/**
 * @brief Prints all $_SERVER fields on the current page.
 */
function iscte_debugServerFields () {
    iscte_debug("Start Printing _SERVER variables");
    foreach($_SERVER as $key => $value)
        iscte_debug("_SERVER key:$key; value:$value");
    iscte_debug("End Printing _SERVER variables");
}

/**
 * @brief Prints an error message in the Javascript Console (On Google Chrome, press F12 to see the console). Shows the file and line of code besides the message.
 * @param msg Text message to be printed
 */
function iscte_error ($msg) {
    if (ISCTE_DEBUG) {
        $debugTrace = debug_backtrace();
       echo "<script>console.log('@ERROR {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
    }
}

/**
 * @brief Prints an error message in an alert Javascript window. Shows the file and line of code besides the message. Useful to stop the processing and alert.
 * @param msg Text message to be printed
 */
function iscte_errorAlert ($msg) {
    if (ISCTE_DEBUG) {
        $debugTrace = debug_backtrace();
        echo "<script>alert('@ERROR {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
    }
}
?>