var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var availabilitySchema = new Schema({
  morning: Boolean,
  noon: Boolean,
  afternoon: Boolean,
  evening: Boolean,
  night: Boolean
});

module.exports = mongoose.model('Availability', availabilitySchema);
