<?php include 'shared/header.php';?>
    <div class="foy-main"  >
        <div class="foy-container">
            <h1 id="demo" class="foy-text-center fow-w-300 foy-m-0-a mb-10">Form Validation</h1>
            <div class="foy-text-center mb-10">
                <p><button onclick="myMove()">Click Me</button></p> 
                <p><button onclick="myStop()">Stop Me</button></p> 

                <div id ="animation_container">
                    <div id ="animate"></div>
                </div>
                <button class="foy_button mt-10" id="foy_button" onmouseover = "myHover(this)" onmouseout="myHoverOut(this)">Hover ME</button>
                <button class="foy_button mt-10" id="foy_button1" onmousedown="mDown(this)"  onmouseup="mUp(this)">Click ME</button>
                <a class="foy_button mt-10" href="#" >Click ME</a>
                

                <p><?php echo dirname(__FILE__) ?></p>


                <h2>JavaScript HTML Events</h2>
                Enter your name: <input type="text" id="fname" onchange="upperCase()">

            </div> 
           

            
        </div>
    </div>
   
    <script>
        function upperCase(){
            const iField = document.getElementById('fname');
            iField.value = iField.value.toUpperCase();
        }
        function myHover(obj){
            obj.style.backgroundColor = "Red";
            obj.innerText = "Hovered";
        }
        function myHoverOut(obj){
            obj.style.backgroundColor = "Green";
            obj.innerText = "Hover ME";

        }
        function mDown(obj){
            obj.style.backgroundColor = "Red";
            obj.innerText = "Clicked";
        }
        function mUp(obj){
            obj.style.backgroundColor = "blue";
            obj.innerText = "Clicked";
            obj.setAttribute("disabled", "true");
        }
        function myStop(){
            clearInterval(interval);
            animate.style.top = pos + "px";
            animate.style.left = pos + "px";
        }
        function myMove(){
            animate = document.getElementById("animate");
            if(typeof pos !== 'undefined'){
                animate.style.top = pos;
                animate.style.left = pos;
            }else{
                pos = 0;
            }
        
            interval = setInterval(frame, 5);
            
            function frame(){
                console.log(pos);
                if(pos < 350){
                    pos++;
                    animate.style.top = pos + "px";
                    animate.style.left = pos + "px";
                }if(pos >= 349){
                    pos = 0;
                    // stop animating
                    clearInterval(interval);
                }
            }
        }
 
      
    </script> 
<?php include 'shared/footer.php';?>

