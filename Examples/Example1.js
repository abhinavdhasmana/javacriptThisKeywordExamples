'use strict';

function whoAmI() {
  console.log(this);
  // this.myName = 'test';
}
this.myName = 'test';
console.log(this.myName);
whoAmI();

// Output => undefined