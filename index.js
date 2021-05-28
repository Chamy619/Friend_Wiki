const express = require('express');
const app = express();
const port = 5000;

// Post 데이터를 받기 위한 body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB 연동
const mongoose = require('mongoose');
const config = require('./config/key.js');
const { User } = require('./models/User.js');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


/**
 * 로그인
 * @req = {email, password}
 * @res = {success, (token || message)}
 */
app.post('/api/user/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (err) {
      res.json({ success: false, message: '이메일에 해당하는 유저가 없습니다.' });
      return;
    }

    userInfo.comparePassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.json({ success: false, message: err });
        return;
      }

      if (!isMatch) {
        res.json({ success: false, message: '비밀번호가 일치하지 않습니다.' });
        return;
      }

      userInfo.generateToken((err, token) => {
        if (err) {
          res.json({ success: false, message: err });
          return;
        }

        res.json({ success: true, token });
      });
    })
    const { User } = require('./models/User.js');

    // 회원가입
    app.post('/api/user/register', (req, res) => {
      const user = new User(req.body);
      user.save((err) => {
        if (err) {
          res.json({ success: false, err });
          return;
        }

        res.status(200).json({ success: true });
      });
    });

    app.use('/', (req, res) => {
      res.send('hello world');
    });

    app.listen(port, () => { console.log(`Listening on port ${port}`) });