'use strict'

const testObj = {
  a: 10,
  whoamI: function() {
    console.log(this);
  }
};

testObj.whoamI();
testObj.a = 20;
setTimeout(testObj.whoamI.bind(testObj), 10);

// Output
// { a: 10, whoamI: [Function] }
// { a: 20, whoamI: [Function] }