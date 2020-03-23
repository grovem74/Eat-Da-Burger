var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    createBurger: function (cols, vals, cb) {
        orm.createBurger("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    devourBurger: function (objColVals, condition, cb) { 
        orm.devourBurger("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    customizeBurger: function (cols, vals, cb) { 
        orm.customizeBurger("burgers", cols, vals, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
