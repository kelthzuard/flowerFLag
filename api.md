url: /signup
type: post
body: {
    userId:
    userPassword:
    userName:
}
response: {
    200: 'success'
    404: 'failed signup'
}

url: /login
type: post
body: {
    userId:
    userPassword:
}
response: {
    200: 'success'
    404: 'failed login'
    403: 'wrong password'
}

url: /home(项目主页)
type: get
body: {}
response: {
    {
        projectID:
        projectName:
        projectIntroduce:
        projectImage:
        projectFortune:(以筹到金额)
        projectAim:（目标金额）
        projectParticipated:（参与人数)
        projectEndTime:截止日期
        projectDate: 资金流向
    }
}

url: /detail?project=xxx (项目详情页)
type: get
body: {}
response: {
    {
        projectID:
        projectName:
        projectIntroduce:
        projectImage:
        projectFortune:(以筹到金额)
        projectAim:（目标金额）
        projectParticipated:（参与人数)
        projectEndTime:截止日期
        projectDate: 资金流向
    }
}

url: /user(用户主页)
type: get
body: {}
response" {
    userId:
    userPassword:
    userName:
    fortune:
    userStartNew: //发起的项目数
    userProject:{
        {   
            projectID:
            projectName:
            projectIntroduce:
            projectImage:
            projectFortune:(以筹到金额)
            projectAim:（目标金额）
            projectParticipated:（参与人数)
            projectEndTime:截止日期
            projectDate: 资金流向
        }
    }
}

url: /startNew
type: post
body: {
    projectName:
    projectIntroduce:
    projectImage:
    projectAim:（目标金额）
    projectEndTime:截止日期
}
response: {
    200: 'success'
    404: 'failed'
}

url: /trade
type: post
body: {
    value ://交易金额
    projectId: 目标金额//
}
response: {
    200: 'success'
    404: 'failed'
}