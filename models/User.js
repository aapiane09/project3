var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    Contact = require('./Contact'),
    Residence = require("./Residence"),
    Availability = require("./Availability");



var userSchema = new Schema({
  created: { type: Date },
  updated: { type: Date },
  firstName: String,
  lastName: String,
  username: String,
  email: String ,
  password: String,
  language: [String],
  specialty: [String],
  residence: [ Residence.schema ],
  age: Number,
  gender: String,
  contactInfo: [ Contact.schema ] ,
  auth: Number,
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
  console.log(password); //Password
  console.log(done);
  console.log(this); //user ID
  console.log(this.password); //Undefined
  bcrypt.compare(password, this.password, function (err, isMatch) {
    // console.log(err);
    done(err, isMatch);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
