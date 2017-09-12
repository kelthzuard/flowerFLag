var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../common/model');
var trade = require('../block/trade');


router.post('/',function(req,res,next){
	if(req.session.user){
		trade(req.body.starter,req.body.code,req.body.reciver,req.body.projectId,reback);
	}
});

function reback(id,projectId,proData){
	var user = model.user;
	user.find({userId:id},function(err,doc,Data){
		var newFor = Number(doc.fortune) - 100;
		var project = model.project;
		var newPro = doc.userProject.push('projectId');
		user.update({userId:id},{$set:{fortune:newFor,userProject:newPro}},function(err,doc){
			console.log(doc);
		});
		project.find({projectId:projectId},function(err,doc){
			var projectFortune = doc.projectFortune + 100;
			var projectParticipated = doc.projectParticipated + 1;
			var projectDate = doc.projectDate.push(proData);
			project.update({projectId:projectId},{$set:{
				projectFortune:projectFortune,
				projectParticipated:projectParticipated,
				projectDate:projectDate
			}},function(err,doc){
				if(err){
					res.send('wrongCode');
				}else{
					res.send('success');
				}
			});
		})
	})
}



module.exports = router;