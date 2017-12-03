var mongoose = require('mongoose');
module.exports = mongoose.model('Card', {
    name : {type : String, default: ''},
    url : {type : String, default: ''}
});