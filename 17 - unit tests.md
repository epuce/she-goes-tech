## Mocha testing library
* install: `npm install mocha`, node + npm package manager is pre required
```JS
var assert = require('assert');
var isValidEmail = function (email) {
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegEx.test(email)
}

describe('test email', function () {
    it('should be valid email', function () {
      assert.equal(true, isValidEmail('test@test.com'));
    });
    it('should be invalid email', function () {
      assert.equal(false, isValidEmail('just some text'));
    });
});
```

