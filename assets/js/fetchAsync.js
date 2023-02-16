const message = document.getElementById('message');
async function fetchApi(){
    // fetch returns a promise, res.json() also returns a promise
    // fetch("https://lut2ms.acastry.org/api/vehicles/location")
    const res = await fetch("http://localhost/Javascript/basic/assets/data/data.txt");
    const data = await res.text();
    console.log(data);
    message.innerText = data;

    // hello will print first as it is asynchronus
    // console.log("Hello");  
}