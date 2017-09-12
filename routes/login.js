var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../common/model');
var crypto = require('crypto');


/*router.get('/',function(req,res,next){
	if(req.session.user){
		res.redirect('/hoster');
	}else{
		res.render('login');
	}
});*/

router.post('/',function(req,res,next){
	var Md5 = crypto.createHash('md5');
	var userPassword = Md5.update(req.body.userPassword).digest('base64');
	//把用户名密码进行对比验证
	var user = model.user;
	user.findOne({userId:req.body.userId},function(error,doc){
		console.log(doc);
		if(doc === null){
			res.status(404).send('failed login');
		}else if(userPassword !== doc.userPassword){
			res.status(404).send('wrong password');
		}else{
			req.session.user = req.body.userId;
			res.status(200).send('success');
		}
	});
})

module.exports = router;