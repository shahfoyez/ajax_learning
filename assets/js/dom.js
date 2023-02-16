document.getElementById('id1').innerText = "Okay";
const p =  document.getElementById('id1');
p.innerHTML = "Hello";
p.setAttribute('class', 'ok');

// console.log(document.getElementById('id1'));
// console.log(document.URL);
// console.log(document.getElementsByClassName('foy_p'));
// console.log(document.getElementsByTagName("p"));

console.log(document.querySelectorAll('.foy_anchor'));
document.querySelector('.foy_anchor').innerHTML = "Good";
function submit(){
    const x = document.forms["frm1"];
    console.log(x);
    let text = "";
    for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo1").innerHTML = text;
}