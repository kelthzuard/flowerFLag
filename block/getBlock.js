var Block = require('./Block');
var mongoose = require('mongoose');
var model = require('./model');
var crypto = require('crypto');


function getBlock(id){

	/*mongoose.connect('mongodb://localhost:27017/block');
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function () {
		  console.log('connnection successful')
	});*/


	getLastBlock(createNew,id);
}

function getLastBlock(createNew,id){
	var Block = model.block;
	var data;
	Block.find({},function(error,doc){
		data = doc;
		createNew(data[data.length-1],id);
	});
}

function createNew(lastBlock,id){

	console.log(lastBlock);
	var index = Number(lastBlock.index) + 1;
	var previousHash = lastBlock.hash;
	var timestramp =  new Date().getTime() / 1000;
	var data = [];

	var password = getRandomPassword();
	var keyValue = {[id]:password};
	data.push(keyValue);

	var md5 = crypto.createHash('md5');
	var hash = md5.update(index+previousHash+timestramp).digest('base64');
	var newBlock = new Block(index,previousHash,timestramp,data,hash);

	console.log(newBlock);
	
	var blockChain = model.block;
	blockChain.create(newBlock,function(err,doc){
		if(err){
			console.log(err);
		}else{
			console.log(doc);
		}
	});
}

function getRandomPassword(){
	var text=['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ','1234567890','~!@#$%^&*()_+";",./?<>']; 
	var rand = function(min, max){return Math.floor(Math.max(min, Math.random() * (max+1)));} 
	var len = rand(8, 16); // 长度为8-16 
	var pw = ''; 
	for(i=0; i<len; ++i) 
	{ 
	var strpos = rand(0, 3); 
	pw += text[strpos].charAt(rand(0, text[strpos].length)); 
	} 
	return pw; 
}


module.exports = getBlock;