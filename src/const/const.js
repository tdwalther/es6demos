function const1() {
  const foo = 123;
  return (foo === 123);
}

function const2() {
  const bar = 123;
  console.log('before block - bar: ' + bar);
  
  {
    const bar = 456;
    console.log('in block - bar: ' + bar);
  }
  
  console.log('after block - bar: ' + bar);

  return bar === 123;
}

function constError() {
  const baz = 1;
  try {
  Function("const foo = 1; foo = 2;")();
  } 
  catch(e) {
    return true;
  }
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
  document.getElementById('runCode1').addEventListener('click', const1, false);
  document.getElementById('runCode2').addEventListener('click', const2, false);
  document.getElementById('runCode3').addEventListener('click', constError, false);
}

ready(setup);