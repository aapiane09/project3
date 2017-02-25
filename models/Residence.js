var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var residenceSchema = new Schema({
  city: String,
  province: String,
  country: String
});

module.exports = mongoose.model('Residence', residenceSchema);
