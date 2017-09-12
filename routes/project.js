var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../common/model');

router.post('/',function(req,res,next){
	if(req,session.user){
				//设置上传参数
		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';
		form.uploadDir = './public/images/';
		form.keepExtensions = true;
		form.maxFieldsSize = 2*1024*1024;
		console.log('about to parse');



		//完成上传图片至img文件夹
		form.parse(req,function(error,fields,files){
			if(error){
				res.locals.error = error;
				res.redirect('/home');
				return;
			}
			var extName = '';  //后缀名
			switch (files.upload.type) {
				case 'image/pjpeg':
					extName = 'jpg';
					break;
				case 'image/jpeg':
					extName = 'jpg';
					break;		 
				case 'image/png':
					extName = 'png';
					break;
				case 'image/x-png':
					extName = 'png';
					break;		 
			}
			if(extName.length == 0 ){
				res.redirect('/home');
			}
			fileName = Math.random() + '.' + extName;
			var newPath = form.uploadDir+'stuff/' + fileName;
			fs.renameSync(files.upload.path, newPath);  //重命名
			var readPath = '/images/stuff/'+fileName;


			var project = model.project;
			project.find({},function(err,doc){
				var ID = doc.length;
					project.create({
					projectStarter: req.session.user,
					projectID:ID ,
					projectName:req.body.projectName ,
					projectIntroduce:req.body.projectIntroduce ,
					projectImage: readPath,
					projectFortune:0 ,
					projectcompleted:0 ,
					projectParticipated:0 ,
					projectDate:[] ,
				},function(err,doc){
					if(err){
						console.log(err);
						res.status(404).send('failed');
					}else{
						res.status(200).send('success');
					}
				});
			});
		});
	}

});

module.exports = router;