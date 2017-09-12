var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../common/model');
var crypto = require('crypto');
var getBlock = require('../block/getBlock')

/*router.get('/',function(req,res,next){
		console.log('signup');
		res.render('signup');

});*/


router.post('/',function(req,res,next){
	var Md5 = crypto.createHash('md5');
	var passWord = Md5.update(req.body.userPassword).digest('base64');
	var user = model.user;
	user.findOne({userId:req.body.userId},function(err,doc){
		if(doc === null){

			//这里分配十个比特币
			getBlock(req.body.userId);

			user.create({
				userId:req.body.userId,
				userPassword:passWord,
				userName: req.body.userName,
				userType: req.body.userType,
				fortune: 100,
				userProject: ['']
			},function(err,doc){
				if(err){
					res.sendStatus(500);
				}else{
					res.status(200).send('success');
				}
			});
		}else{
			res.status(404).send('failed signup');
		}
	});
})


module.exports = router;