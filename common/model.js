var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	userId: { type: String,required: true },
	userPassword: { type: String,required: true },
	userName: { type: String,required: true },
	fortune: { type: Number,required: true },
	userStartNew: { type: Number,required: true },
	userProject: { type: Array}
});

var projectSchema = mongoose.Schema({
	projectStarter: { type: String,required: true },
	projectID: { type: String,required: true },
	projectName: { type: String,required: true },
	projectIntroduce: { type: String,required: true },
	projectImage: { type: String,required: true },
	projectFortune: { type: String,required: true },
	projectAim: { type: String,required: true },
	projectParticipated: { type: String,required: true },
	projectEndTime: { type: String,required: true },
	projectDate: { type: Array,required: true },
});


exports.user = mongoose.model('user',userSchema);
exports.project = mongoose.model('project',projectSchema);