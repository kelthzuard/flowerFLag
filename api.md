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
    }
}

url: /user(用户主页)
type: get
body: {}
response" {
    userId:
    userPassword:
    userName:
    userType:
    fortune:
    userProject:{
        {
            projectID:
            projectName:
            projectIntroduce:
            projectImage:
            projectFortune:(以筹到金额)
            projectAim:（目标金额）
            projectParticipated:（参与人数)
        }
    }
}