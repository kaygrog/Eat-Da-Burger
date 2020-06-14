var connection = require("../config/connection.js");

// TODO
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.
//    selectAll()
//    insertOne()
//    updateOne()
// Export the ORM object in module.exports.

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(burgerObj, cb) {
    var queryString = `INSERT INTO burgers (burger_name) VALUES ("${
      burgerObj.name
    }")`;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(burgerId, cb) {
    var queryString = `UPDATE burgers SET devoured=1 WHERE id=${burgerId}`;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
