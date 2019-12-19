const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
    kullaniciAdi:String,
    parola: String,
    kullaniciTipi: String

});
module.exports = mongoose.model('user', UserSchema);
