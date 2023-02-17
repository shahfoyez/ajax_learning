<?php include 'shared/header.php';?>
<?php
    // include 'database/database.php';
    
    // if(isset($_POST['submit'])){
    //     $barcode = $_POST['barcode'];
    //     $image = $_FILES['image']; 
    //     echo "<pre>";
    //     var_dump($image);
    //     echo "</pre>";

    //     // die();
    //     echo $barcode;
    //     echo "<br>";
    //     $query = "INSERT INTO barcodes(barcode) VALUES ('$barcode')";
    //     $insert = $mysqli->query($query);
    //     if ($insert) {
    //         // echo "New record created successfully";
    //         // echo "<br>";
    //         header('Location: http://localhost/Javascript/barcode.php');
            
    //     } else {
    //         echo "Something went wrong";
    //         echo "<br>";
    //     }
    // }
?>
    <div class="foy-main"  >
        <div class="foy-container">
            <h1 id="demo" class="foy-text-center fow-w-700 foy-m-0-a mb-10">Ajax is a developer's dream</h1>
            <div class="foy-text-center mb-10">
                <button onclick="loadData()">Change this content</button>
                <p id="message"></p>
            </div> 
        </div>
    </div>
    <script src="./assets/js/ajax.js"></script>
    <script>
        
      
    </script> 
<?php include 'shared/footer.php';?>

