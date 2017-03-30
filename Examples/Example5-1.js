'use strict';

function whoAmI() {
  console.log('I am in local scope:', this);
  function insideFunction() {
    console.log('I am an inside function:', this);
  }
  insideFunction.apply(this);
}
this.myName = 'Abhinav';
whoAmI.apply(this);

// Output
// I am in local scope: { myName: 'Abhinav' }
// I am an inside function: { myName: 'Abhinav' }