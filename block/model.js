var mongoose = require('mongoose');

var blockSchema = mongoose.Schema({
	index: { type: String,required: true },
	previousHash: { type: String,required: true },
	timestramp: { type: String,required: true },
	data: { type: Array,required: true,}, 
	hash: { type: String,required: true },
});

exports.block = mongoose.model('block',blockSchema);