function arrow1() {
  var numbers = [1,2,3,4,5,6];
  
  // allowed to not use parentheses for one argument
  // don't have to use braces for single line function
  // implicit return
  
  var squares = numbers.map( x => x * x);
  
  console.log(squares);
}

function arrow2() {
  var numbers = [1,2,3,4,5,6];
  
  // multiple arguments, have to use parentheses
  var squares = numbers.map( (v, i) => "value was: " + v + ". index was: " + i);
  
  console.log(squares);
}

var countupBroken = {
    counter: 0,
     
    start:function(){
        setInterval(function(){
            this.counter++; // **INCORRECT**- doesn't increment countup's counter property
            alert(this.counter);
        }, 5000);
    }
};

function startCountupBroken() {
  countupBroken.start();
}

var countupFixed = {
    counter: 0,
     
    start:function(){
        setInterval( () => {
          this.counter++; // Increments countup's counter property
          
          // see? I had to explicitly use the global window object here
          window.alert(this.counter);
        }, 5000);
    }
};

function startCountupFixed() { 
  countupFixed.start();
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

ready( () => {
  document.getElementById('runCode1').addEventListener('click', arrow1, false);
  document.getElementById('runCode2').addEventListener('click', arrow2, false);
  document.getElementById('runCode3').addEventListener('click', startCountupBroken, false);
  document.getElementById('runCode4').addEventListener('click', startCountupFixed, false);
});