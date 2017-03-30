'use strict'

const testObj = {
  whoamI: function() {
    console.log(this);
  }
};

testObj.whoamI();