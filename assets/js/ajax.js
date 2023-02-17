function loadData(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("message").innerHTML = this.responseText;
    };
    xhttp.open(
        "GET", 
        "./data/ajax_info.txt", 
        true
    );
    xhttp.send();
}