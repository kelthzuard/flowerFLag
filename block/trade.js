var mongoose = require('mongoose');
var model = require('./model');
var crypto = require('crypto');

/*function trade(Index,id,password,NewId){
	var Block = model.block;
	Block.findOne({index:Index},function(error,doc){
		var Data = doc.data
		var info = Data[Data.length-1];
		if(password == info[id]){
			var newInfo = {[NewId]:getRandomPassword()};
			Data.push(newInfo);
			Block.update({index:Index},{$set:{data:Data}},function(err,doc){
				if(err){
					console.log(err);
				}else{
					console.log(doc);
				}
			})
		}
	});
}*/

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

function trade(id,password,newId,projectId,callback){
	var block = model.block;
	block.find({},function(err,doc){
		for(var i = 0;i<doc.length;i++){
			var index = doc.index;
			var Data = doc.data
			var info = Data[Data.length-1];
			if(password == info[id]){
				var newInfo = {[NewId]:getRandomPassword()};
				Data.push(newInfo);
				Block.update({index:Index},{$set:{data:Data}},function(err,doc){
					if(err){
						console.log(err);
					}else{
						console.log(doc);
						callback(id,projectId,Data);
					}
				});
			}
		}
	});
}
