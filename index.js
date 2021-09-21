//익스프레스 설정
const express = require('express')
const app = express()
const port = 5000



//config에 있는 몽고디비 정보
const config = require('./config/key')

//쿠기 사용하
const cookieParser = require('cookie-parser')

//몽고디비 연결
const mongoose = require('mongoose')
mongoose.connect (config.monggoURI)
.then( () => console.log('MongoDB Connected…'))
.catch(err => console.log(err))



//user  가져오기
const {User} = require('./models/User')

//json 데이터 가져오기 설정
//express 4.0이상 부터는 body-parser 없이 데이터를 가져올수있다.
app.use(express.json());
//쿠기 사용하기위한 설정
app.use(cookieParser())





app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/login', (req, res) => {
  //요청된 email DB 찾는다.
  User.findOne({email: req.body.email}, (err, user) => {
    if(!user){
      return res.json({
        loginSuccess: false,
        msg: '존재하지 않는 계정입니다.'
      })
    }

    //요청된 이메일이 DB에 있다면 비밀번호가 맞는지 확인
    user.comparePW(req.body.password, function (err, isMatch) {
      if(!isMatch)
      return res.json({loginSuccess:false, message: '비밀번호가 틀렸습니다.'})

      //비밀번호까지 맞다면 토큰을 생성한다.
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err)
        
        //토큰을 저장한다. 로컬스토리지 / 쿠키 / 세션
        res.cookie("x_auth", user)
        .status(200)
        .json({loginSuccess:true, userId: user._id})
      })
    })
  })
})

//회원가입
app.post('/register', (req, res) => {
  //회원가입 필요한 정보 가져와서 DB에 저장한다
  const user = new User(req.body)
  
  user.save((err, userInfo) => {
    if(err) return res.json({success: false})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})