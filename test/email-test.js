var assert = require('assert');
var { isValidEmail } = require('./functions');

describe('test email', function () {
    it('should be valid email', function () {
      assert.equal(true, isValidEmail('test@test.com'));
    });
    it('should be invalid email', function () {
      assert.equal(false, isValidEmail('just some text'));
    });
});