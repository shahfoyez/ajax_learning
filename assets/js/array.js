let car = {
    name: "Toyota",
    model: "X16",
    owner: "foyez",
    speed: function() {
        return 15;
    }
};
console.log(car.speed());

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
const cars = ['Volvo', 'Toyota', 'BMW', 'Honda'];
cars[4] = "new car";
<p id="str_length" class="foy-text-center m-0"></p>
console.log(Array.isArray(cars));
 
 

// // String
// let text = "We are the so-called from the north.";
// document.getElementById('str_length').innerHTML =  text.length;
// document.getElementById('str_slice').innerHTML =  text.slice(3, 15);
// document.getElementById('str_slice').innerHTML =  text.slice(5);
// document.getElementById('str_sub').innerHTML =  text.substring(7, 13);
// document.getElementById('str_replace').innerHTML =  text.replace(/NORTH/i, 'south');

// let searchString = "This an demo string to test string search.";
// document.getElementById('indexOf').innerHTML =  searchString.indexOf('search');
// document.getElementById('lastIndexOf').innerHTML =  searchString.lastIndexOf('demo');
// document.getElementById('search').innerHTML =  searchString.search('This');
// document.getElementById('match').innerHTML =  searchString.match('string');
// document.getElementById('matchAll').innerHTML =  Array.from(searchString.matchAll('string'));
// document.getElementById('includes').innerHTML =  searchString.includes('acn');
// document.getElementById('startsWith').innerHTML =  searchString.startsWith('This');
// document.getElementById('endsWith').innerHTML =  searchString.endsWith('earch.');

 
 



