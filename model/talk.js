var mongoose = require('mongoose');
var talkSchema = new mongoose.Schema({
  topic: String,
  description: String,
  presenter: String,
  email: String,
  uniqueId: Number
});
mongoose.model('LightningTalk', talkSchema);
