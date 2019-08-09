var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  // port: 3000,
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    return console.error('error connecting');

  } else {
    console.log('Connected');
  }
});


// connection.end();

module.exports = connection;