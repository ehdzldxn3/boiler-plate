const {User} = require('../models/User')

//인증처리
let auth = (req, res, next) => {
    
    //클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth
    console.log(req)

    //토큰을 복호화 하는 메소드
    User.findByToken(token, (err, user) => {
        
        if(err) return err;
        if(!user) return res.json({isAuth: false, error: true})
        
        req.token = token
        req.user = user
        next()
    })
}

module.exports = {auth}