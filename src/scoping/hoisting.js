var someGlobal = 100;

function hoisting1() {
    console.log('Meaningless statement');
  
    for (var i = 0; i < 10; i++) {
        var myvar = 5;
    }

    // Something similar to this wouldn't work in C# / Java
    // because myVar has gone out of scope
    alert(myvar);
}
 
 
function hoisting2() {
    // Notice how everything is declared and undefined 
    // at the beginning of function execution
    // no matter where you declare the variable
    var foo = 2;
    var bar;
    
    if (true)
    {
      bar = 1;
    }
  
    console.log(foo + bar);
    
    alert(foo + bar);
    
    var leftovers = 7;
} 


function localPrecedence()
{
  console.log(someGlobal);
  
  var someGlobal = 42;
  
  console.log(someGlobal);
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
  document.getElementById('runCode1').addEventListener('click', hoisting1, false);
  document.getElementById('runCode2').addEventListener('click', hoisting2, false);
  document.getElementById('runCode3').addEventListener('click', localPrecedence, false);
}

ready(setup);