<?php
define("ATD_DEBUG", true);

// Connection string to the database
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "");
define("DB_DATABASE", "resetting_survey_dev");

/**
 * @brief Prints a debug message in the Javascript Console (On Google Chrome, press F12 to see the console). Shows the file and line of code besides the message.
 * @param msg Text message to be printed
 */
function atd_debug ($msg) {
    if (ATD_DEBUG) {
        $debugTrace = debug_backtrace();
        echo "<script>console.log('@DEBUG {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
    }
}

/**
 * @brief Prints a debug message in an alert Javascript window. Shows the file and line of code besides the message. Useful to stop the processing and alert.
 * @param msg Text message to be printed
 */
function atd_debugAlert ($msg) {
    if (ATD_DEBUG) {
        $debugTrace = debug_backtrace();
        echo "<script>alert('@DEBUG {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
   }
}

/**
 * @brief Calls atd_debug to print the message, but then exits the page. This is useful to debug the info just BEFORE jumping to a next page.
 * @param msg Text message to be printed
 */
function atd_debugAndExit ($msg) {
    if (ATD_DEBUG) {
        atd_debug($msg);
        atd_debug("@@ EXIT @@");
        exit();   // This prevents going to the next page (so we can still see the information on the previous one)
    }
}

/**
 * @brief Prints all fields of an associative array
 * @param assocArray the associative array
 * @param assocArrayName the name of the associative array (for debug purposes)
 */
function atd_debugAssocArrayFields ($assocArray, $assocArrayName) {
    atd_debug("Stt Printing: $assocArrayName: [ key => value ]");
    foreach($assocArray as $key => $value)
        atd_debug("$assocArrayName: [ $key => $value ]");
    atd_debug("End Printing: $assocArrayName: [ key => value ]");
}

/**
 * @brief Prints all $_SESSION fields on the current page.
 */
function atd_debugSessionFields () {
    atd_debugAssocArrayFields($_SESSION, "_SESSION");
}

/**
 * @brief Prints all $_POST fields on the current page.
 */
function atd_debugPostFields () {
    atd_debugAssocArrayFields($_POST, "_POST");
}

/**
 * @brief Prints all $_GET fields on the current page.
 */
function atd_debugGetFields () {
    atd_debugAssocArrayFields($_GET, "_GET");
}

/**
 * @brief Prints all $_SERVER fields on the current page.
 */
function atd_debugServerFields () {
    atd_debugAssocArrayFields($_SERVER, "_SERVER");
}

/**
 * @brief Prints an error message in the Javascript Console (On Google Chrome, press F12 to see the console). Shows the file and line of code besides the message.
 * @param msg Text message to be printed
 */
function atd_error ($msg) {
    if (ATD_DEBUG) {
        $debugTrace = debug_backtrace();
       echo "<script>console.log('@ERROR {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
    }
}

/**
 * @brief Prints an error message in an alert Javascript window. Shows the file and line of code besides the message. Useful to stop the processing and alert.
 * @param msg Text message to be printed
 */
function atd_errorAlert ($msg) {
    if (ATD_DEBUG) {
        $debugTrace = debug_backtrace();
        echo "<script>alert('@ERROR {".basename(print_r($debugTrace[0]["file"], true)).":".print_r($debugTrace[0]["line"], true)."}: [$msg]');</script>";
    }
}
?>