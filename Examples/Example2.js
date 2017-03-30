'use strict';

function whoAmI() {
  console.log('I am in local scope:', this);
}
console.log('I am in global scope:', this);
whoAmI();

// Output
// I am in global scope {}
// I am in local scope undefined

// this.myName = 'test';
// console.log(this.myName);