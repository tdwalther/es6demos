function let4()
{
    var a = 0;
    var a = 'hello';  // no errors, leads to madness
    
    let b = 0;
    let b = 'hello';  // can't redeclare variable identifier in same block scope
    
    let c = 0;
    let c = 1;  // can't redeclare variable identifier in same block scope
    
    var d = 0;
    let d = 1;  // can't redeclare a var declared variable
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
  document.getElementById('runCode4').addEventListener('click', let4, false);
}

ready(setup);