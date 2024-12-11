
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $file = fopen('users.txt', 'r');
    $authenticated = false;

    while (($line = fgets($file)) !== false) {
        list($stored_username, $stored_hashed_password) = explode(':', trim($line));
        if ($stored_username == $username && password_verify($password, $stored_hashed_password)) {
            $authenticated = true;
            break;
        }
    }
    fclose($file);

    if ($authenticated) {
        echo "Login successful!";
    } else {
        echo "Invalid credentials.";
    }
}
?>
