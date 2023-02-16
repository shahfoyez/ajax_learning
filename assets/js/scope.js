var x = 10;
if(true){
    var x = 33;
}
// function is not consider as block
function sleep(){
    var x = 500;
}
// block
sleep();
console.log(x);