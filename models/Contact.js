var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var contactSchema = new Schema({
  phone: String,
  skype: String,
  whatsapp: String,
  viber: String,
  line: String,
  wechat: String,
  telegram: String,
  kakaotalk: String,
  imo: String,
  zalo: String,
  chaton: String,
  bbm : String,
});

module.exports = mongoose.model('Contact', contactSchema);
