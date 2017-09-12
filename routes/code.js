var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../block/model');

router.post('/',function(req,res,next){
	if(req.session.user){
		var codeArr = new Array;
		var ID = req.body.userId;
		var block = model.block;
		block.find({},function(err,doc){
			for(var i = 0;i<doc.length;i++){
				var Data = doc.data
				var info = Data[Data.length-1];
				if(info.keys(obj)[0] === ID){
					codeArr.push(info[ID]);
				}
			}
			res.send(codeArr);
		});
	}
})

module.exports = router;