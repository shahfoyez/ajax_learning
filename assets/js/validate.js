 name = json_encode()
 function validateForm(){
    const form = document.forms["myForm"];
    input = form['fname'].value;
    console.log(form['fname'].value);
    if( input == ''){
        document.getElementById('name_error').innerHTML = "Name is required";
        return false;
    }else if(input.length <6){
        // document.getElementById('name_error').innerHTML =  input;
        document.getElementById('name_error').innerHTML = "At least 6 digit required";
        return false;
    }else{
        document.getElementById('name_error').innerHTML =  input;
        return false;
    }
    // for (let i = 0; i < x.length; i++) {
    // text += x.elements[i].value + "<br>";
    // }
    // document.getElementById("demo1").innerHTML = text;
}