'use strict';

function whoAmI() {
  console.log('I am in local scope:', this);
  function insideFunction() {
    console.log('I am an inside function:', this);
  }
  insideFunction();
}
this.myName = 'Abhinav';
whoAmI.apply(this);

// Output
// I am in local scope: undefined
// I am an inside function: undefined