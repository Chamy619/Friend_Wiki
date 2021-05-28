const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const encryptKey = require('../config/encryptKey.js');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: String,
    tokenExp: Number
});

// 매개변수로 들어온 비밀번호와 사용자의 비밀번호가 일치하는지 확인
userSchema.methods.comparePassword = function (password, callback) {
    const user = this;
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
}

// 토큰을 생성
userSchema.methods.generateToken = function (callback) {
    const user = this;
    const token = jwt.sign(user._id.toHexString(), encryptKey);
    user.token = token;
    user.save((err) => {
        if (err) {
            return callback(err);
        }
        callback(null, token);
    })
}

const User = mongoose.model('User', userSchema);
module.exports = { User };