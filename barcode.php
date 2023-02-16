<?php
    include 'database/database.php';
    
    if(isset($_POST['submit'])){
        $barcode = $_POST['barcode'];
        $image = $_FILES['image']; 
        echo "<pre>";
        var_dump($image);
        echo "</pre>";

        // die();
        echo $barcode;
        echo "<br>";
        $query = "INSERT INTO barcodes(barcode) VALUES ('$barcode')";
        $insert = $mysqli->query($query);
        if ($insert) {
            // echo "New record created successfully";
            // echo "<br>";
            header('Location: http://localhost/Javascript/barcode.php');
            
        } else {
            echo "Something went wrong";
            echo "<br>";
        }
    }
?>
<!DOCTYPE html>
<html></html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://localhost/Javascript/assets/css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
</head>
<!-- onload="document.pos.barcode.focus();" -->
<body>
<script>
        // $(":input").keypress(function(event){
        //     if (event.which == '10' || event.which == '13') {
        //         event.preventDefault();
        //     }
        // });
        (function() {
            var textField = document.getElementById('barcode');

            if(textField) {
                textField.addEventListener('keydown', function(mozEvent) {
                    var event = window.event || mozEvent;
                    if(event.keyCode === 13) {
                        event.preventDefault();
                    }
                });
            }
        })();
        // $(document).ready(function() {
        //     $(window).keydown(function(event){
        //         if(event.keyCode == 13) {
        //         event.preventDefault();
        //         return false;
        //         }
        //     });
        // });
        
    </script>
<script language="javascript">var p = false;</script>
    <div class="foy-main">
        <div class="foy-container">
            <form method="POST" action="barcode.php" enctype="multipart/form-data">
                <input type="text" name="barcode" id="barcode" placeholder="Barcode">
                <input type="file" name="image" id="image">
                <!-- <input type="text" name="name" placeholder="Barcode"> -->
                <button type="submit" name="submit" onsubmit="return false">Submit</button>


                <!-- <input type="submit" name="submit" value = "submit" onClick = "javascript: p=true;"> -->
            </form>
        </div>
    </div>
    <!-- <script>
        // $(":input").keypress(function(event){
        //     if (event.which == '10' || event.which == '13') {
        //         event.preventDefault();
        //     }
        // });
        $(document).ready(function() {
            $(window).keydown(function(event){
                if(event.keyCode == 13) {
                event.preventDefault();
                return false;
                }
            });
        });
        
    </script> -->
<?php include 'shared/footer.php';?>