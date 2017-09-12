var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../common/model');

router.get('/',function(req,res,next){
	if(req.session.user){
		var project = model.project;
		project.find({},function(err,doc){
			res.status.send(doc);
		});
	}
});

module.exports = router;