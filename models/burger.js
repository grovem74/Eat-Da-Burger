var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("", function (res) {
            cb(res);
        });
    }
};


module.exports = burger