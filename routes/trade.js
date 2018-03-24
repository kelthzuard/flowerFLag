var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../common/model');

router.post('/',function(req,res,next){
    if(req.session.user){
        var project = model.project,
            value = req.body.value,
            tempId = req.body.ProjectId,
            user = model.user;
        user.findOne({userId: req.session.user},function(err,doc){
            if(doc){
                if(doc.fortune > value){
                    doc.userStartNew ++;
                    project.findOne({ProjectId:ProjectId},function(err,doc){
                        doc.projectFortune = doc.projectFortune + value;
                    });
                }else{
                    res.status(404).send('lack money');
                }
            }else{
                res.status(404).send('failed');
            }
        })
    }
});

module.exports = router;