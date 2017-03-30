'use strict'

const testObj = {
  a: 10,
  whoamI: function() {
    console.log(this);
  }
};

testObj.whoamI();

// Output
// { a: 10, whoamI: [Function] }