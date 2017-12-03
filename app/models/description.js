var mongoose = require('mongoose');
module.exports = mongoose.model('Description', {
    value : {type : String, default: ''},
    txt : {type : String, default: ''}
});