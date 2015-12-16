function spread1() {
  var numbers = [1,2,3,4,5,6,7];
  var alpha = ['a', 'b', 'c'];
  
  console.log(numbers);
  console.log(...numbers);
  
  console.log(alpha);
  console.log(...alpha);
  
  alert(Math.max(...numbers));
  
  alert(["a", ..."bcd", "e"][3]);
}

function getPersonFromId()
{
  return {
    firstName : "Mike",
    lastName : "Shea",
    city : "Springfield",
    favoriteFood : "pizza",
    age : "25"
  }
}

function destruct1() {
  ({firstName, lastName, city, favoriteFood, age} = getPersonFromId(4356));
  
  console.log(firstName, lastName, city, favoriteFood, age);
}

function destruct2() {
  ({firstName, lastName, city} = getPersonFromId(4356));
  
  console.log(firstName, lastName, city);
}

function destruct3() {
  ({favoriteFood: food, age: yearsLived} = getPersonFromId(4356));
  
  console.log(food, yearsLived);
}



////////////////////////////////////////////////////////////
// Boilerplate code to wire button when DOM content is ready
// and run method when button is clicked
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function setup()
{
  document.getElementById('runCode1').addEventListener('click', spread1, false);
  document.getElementById('runCode2').addEventListener('click', destruct1, false);
  document.getElementById('runCode3').addEventListener('click', destruct2, false);
  document.getElementById('runCode4').addEventListener('click', destruct3, false);
}

ready(setup);