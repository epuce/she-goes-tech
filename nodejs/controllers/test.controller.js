var AbstractController = require("./abstract.controller");

function TestController() {
    AbstractController.AbstractController.apply(this, arguments);

    this.tableName = 'edmunds.puce-users'
}

exports.TestController = TestControlle