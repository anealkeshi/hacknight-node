var mongoose = require('mongoose');

var talkEntity = {
  topic : '',
  description : '',
  presenter : '',
  email : '',
  uniqueId : ''
}

var talkSchema = new mongoose.Schema({
  topic: String,
  description: String,
  presenter: String,
  email: String,
  uniqueId: Number
});
var schemaModel = mongoose.model('LightningTalk', talkSchema);

module.exports = {
  entity: talkEntity,
  schemaModel: schemaModel
}
