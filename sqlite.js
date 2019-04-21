var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE users (info TEXT)");

    var stmt = db.prepare("INSERT INTO users VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT login, password FROM users", function(err, row) {
        console.log(row.login + ": " + row.password);
    });
});

db.close();