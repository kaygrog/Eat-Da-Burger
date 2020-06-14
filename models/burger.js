var orm = require("../config/orm");

// TODO
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerObj, cb) {
    orm.insertOne(burgerObj, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, cb) {
    orm.updateOne(burgerId, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
