var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //connect mysql dataabase using .db/index.js.connect();//should have connection already open
      //send a query to database to "GET" messages
      db.query('SELECT message, roomname FROM messages' , (error, results, fields) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      console.log(message);
      console.log(typeof message.username);
      db.query(`INSERT INTO messages(message, roomname, userFK) VALUES(?, ?, (SELECT Id FROM users WHERE users.username=?))`, [message.message, message.roomname, `${message.username}`], (error, response) => {
        if (error) {
          callback(error);
        } else {
          callback(null, response);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT username FROM users', (err, usernames) => {
        if (err) {
          callback(err);
        } else {
          callback(null, usernames);
        }
      })
    },
    post: function (user, callback) {
      db.query('INSERT INTO users(username) VALUES(?)' , [user.username], (err, results) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }
  }
};

