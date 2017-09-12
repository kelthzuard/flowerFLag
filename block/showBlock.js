var mongoose = require('mongoose');
var model = require('./model');

function showBlock(callback){
	var Block = model.block;
	var data;
	Block.find({},function(error,doc){
		data = doc;
		callback(data);
	});
}

module.exports = showBlock;