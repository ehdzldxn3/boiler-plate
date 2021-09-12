//익스프레스 설정
const express = require('express')
const app = express()
const port = 5000

//몽고디비 설정
const mongoose = require('mongoose')
//몽고 디비 연결
mongoose.connect
('mongodb+srv://kang:0218@boilerplate.zyawb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then( () => console.log('MongoDB Connected…'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})