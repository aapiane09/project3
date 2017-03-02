var db = require('../models');

// GET /api/users
//get all users
function users_index(req, res){
  db.User.find({}, function(err, users) {
    if(err){
      return console.log("index error: " + err);
    }

    res.json(users);
  });
}
// GET /api/users/:userId
//get one specific user
function users_show(req, res) {
  db.User.findOne({_id: req.params.id}, function(err, foundUser){
    res.json(foundUser);
    console.log(foundUser)
  });
}


module.exports = {
  users_index: users_index,
  users_show: users_show
}
