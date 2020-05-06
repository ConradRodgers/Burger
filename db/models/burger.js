var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  update: function (eaten, id, cb) {
    orm.updateOne("burgers", "devoured", eaten, "id", id, cb);
  },
};

module.exports = burger;
