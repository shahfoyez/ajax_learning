const message = document.getElementById('message');
function fetchApi(){
    // fetch returns a promise, res.json() also returns a promise
    // fetch("https://lut2ms.acastry.org/api/vehicles/location")
    fetch("http://localhost/Javascript/basic/assets/data/data.txt")
        .then((res) => res.text())
        .then((data) => {
            console.log(data);
            message.innerText = data;
        });
        // hello will print first as it is asynchronus
        console.log("Hello");
}