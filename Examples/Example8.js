'use strict'

const testObj = {
  a: 10,
  whoamI: function() {
    console.log(this);
  }
};

testObj.whoamI();
testObj.a = 20;
setTimeout(testObj.whoamI, 10);

// Output
// { a: 10, whoamI: [Function] }
// { _called: true,
//   _idleTimeout: 10,
//   _idlePrev: null,
//   _idleNext: null,
//   _idleStart: 89,
//   _onTimeout: [Function],
//   _repeat: null }