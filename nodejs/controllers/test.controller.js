var AbstractController = require("./abstract.controller");

function TestController() {
    AbstractController.AbstractController.apply(this, arguments);

    this.tableName = 'KristePe-users'
}

exports.TestController = TestController;