'use strict';

function whoAmI() {
  console.log('I am in local scope:', this);
  this.insideFunction = function () {
    console.log('I am an inside function:', this);
  }
  this.insideFunction();
}
this.myName = 'Abhinav';
whoAmI.apply(this);

// Output
// I am in local scope: { myName: 'Abhinav' }
// I am an inside function: { myName: 'Abhinav', insideFunction: [Function] }