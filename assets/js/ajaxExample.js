function sendRequest(method, url, data){
    const promise = new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            // handle application error
            if(this.status >= 400){
                reject("There is an application error");
            }else{
                resolve(this.response);
            }
        };
        xhttp.onerror = function(){
            reject("There is an error");
        };
       
        xhttp.open(
            method, 
            url
        );
        // xhttp.setRequestHeader("foyez", "good");
        xhttp.responseType = "json";
        xhttp.send(data);
    })
    return promise;
    
}
function getData(){
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1').then(responseData => {
        console.log(responseData);
    });
}
function sendData(){
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })).then(responseData => {
        console.log(responseData);
    }).catch((err) => {
        console.log(err);
    });
}
const getButton = document.getElementById('get');
getButton.addEventListener("click", getData);

const sendButton = document.getElementById('send');
sendButton.addEventListener("click", sendData);