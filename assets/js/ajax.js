function loadData(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const message = document.getElementById('message');
        message.innerHTML = this.responseText;
        console.log(this.getAllResponseHeaders());

        console.log(this.getResponseHeader('etag'));
    };
   
    xhttp.open(
        "GET", 
        "./data/ajax_info.txt"
    );
    // xhttp.setRequestHeader("foyez", "good");
    xhttp.send();
}