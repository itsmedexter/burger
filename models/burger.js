var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
    orm.all("burgers", function(res){
        cr(res);
    });
},

create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res){
        cb(res);
    });
},
update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
    });
},
delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
        cb(res);
    });
}    
};

module.exports = burger;