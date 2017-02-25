var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-3");

module.exports.User = require("./User");
module.exports.Residence = require("./Residence");
module.exports.Contact = require("./Contact");
module.exports.Availability = require("./Availability.js");
