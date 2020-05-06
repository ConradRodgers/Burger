var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
  });
}
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  connection.query(
    "CREATE TABLE IF NOT EXISTS burgers (id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,burger_name VARCHAR(200) NOT NULL,devoured BOOLEAN NOT NULL DEFAULT 0,date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,);"
  );
});

// Export our MySQL connection
module.exports = connection;
