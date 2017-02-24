var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    Contact = require("Contact"),
    Availability = require("Availability");



var userSchema = new Schema({
  created: { type: Date },
  updated: { type: Date },
  firstname: String,
  lastname: String,
  username: String,
  email: {String, unique: true, lowercase: true} ,
  password: { String, select: false },
  language: [String],
  specialty: [String],
  age: { Number, min: 18, max: 125 },
  gender: [String] ,
  contactinfo: [ Contact.schema ] ,
  auth: { Number, min: 0, max: 2 },
  professional: Boolean,
  availability: [ Availability.schema ],
  profilepic: String
});
userSchema.pre('save', function (next) {
  // set created and updated
  now = new Date();
  this.updated = now;
  if (!this.created) {
    this.created = now;
  }

  // encrypt password
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
