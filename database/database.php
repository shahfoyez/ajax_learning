<?php
    $mysqli = new mysqli("localhost","root","","barcode");
    // Check connection
    if ($mysqli -> connect_errno) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
    echo "<br>";
    // Perform query
    if ($result = $mysqli -> query("SELECT * FROM barcodes")) {
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<pre>";
                var_dump($row);
                echo "</pre>";
            }
        } else {
            echo "0 results";
            echo "<br>";
        }
    }
?>