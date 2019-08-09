var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //look at what the get request wants
      //pass that request to the models.messages.get
        //have models messages.get get data from the mysql database
      //pass it back as a response, statuscode 200
      models.messages.get((error, results) => {
        if(error) {
          res.status(404).send('No message!');
        } else {
          res.status(200).json(results);
        }
      });
      // if(messages) {
      //   res.status(200).json(messages);
      // } else {
      //   res.status(404).send('No message!');
      // }
      //on success
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.message

      models.messages.post(req.body, (error, results) => {
        if (error) {
          res.status(404).send('oh noes no post :(');
        } else {
          res.status(201).send('hellz yea it posted');
        }
      })

      // res.send(req.body);
    }

}, // a function which handles posting a message to the database


  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((error, users) => {
        if (error) {
          res.status(404).send('oh noes');
        } else {
          res.status(200).json(users);
        }
      })
    },
    post: function (req, res) {
      models.users.post(req.body, (err, result) => {
        if (err) {
          res.status(404).send('nope');
        } else {
          res.status(201).send('posty post');
        }
    })
  }
}
};

