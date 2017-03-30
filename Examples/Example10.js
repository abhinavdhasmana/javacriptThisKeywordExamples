'use strict'

class testClass {
  constructor (name) {
    console.log('I am an instance of:', this);
    this.name = name;
  }

  getName() {
    console.log('My name is:', this.name);
  }
}

const testClassObj = new testClass('Foo');
testClassObj.getName();

// Output
// I am an instance of: testClass {}
// My name is: Foo