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