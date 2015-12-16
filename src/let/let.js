function let1() {
    console.log('Meaningless statement');
    var x = 6;
    
    if (true)
    {
      let y = 7;
      console.log(y);
      
      y = 100;
      console.log(y);
    }
}

function let2() {
    console.log('Meaningless statement');
    var x = 6;
    
    {
      let y = 7;
      console.log(y);
      
      y = 100;
      console.log(y);
    }
    
    // With the var keyword, this would have printed '106'
    // since y would have function scope.
    // Instead, it's out of scope!
    console.log(x + y);
}
 
 
function justVar()
{
    console.log('Meaningless statement');
    var x = 6;
    
    {
      var y = 7;
      console.log(y);
      
      y = 100;
      console.log(y);
    }
    
    console.log(x + y);
    alert(x + y);
}

function let3()
{
    let a = 900;
    
    for (let a = 0; a < 3; a++)
    {
      // meaningless statement
      let y = a + 1;
      console.log('for loop a: ' + a  + ' y: ' + y);
    }
    
    let y = 0;
    while (y < 3)
    {
      let a = 10;
      let b = y + a;
      console.log('while a: ' + a + ' b: ' + b + ' y: ' + y);
      y++;
    }
    
    console.log('all done: ' + a);
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
  document.getElementById('runCode1').addEventListener('click', let1, false);
  document.getElementById('runCode2').addEventListener('click', let2, false);
  document.getElementById('runCode2var').addEventListener('click', justVar, false);
  document.getElementById('runCode3').addEventListener('click', let3, false);
}

ready(setup);