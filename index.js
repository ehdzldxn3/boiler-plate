//익스프레스 설정
const express = require('express')
const app = express()
const port = 5000



//config에 있는 몽고디비 정보
const config = require('./config/key')

//몽고디비 
const mongoose = require('mongoose')
mongoose.connect (config.monggoURI)
.then( () => console.log('MongoDB Connected…'))
.catch(err => console.log(err))

//user  가져오기
const {User} = require('./models/User')

//express 4.0이상 부터는 body데이터를 가져올수있다.
app.use(express.json());




app.get('/', (req, res) => {
  res.send('Hello World!')
})


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