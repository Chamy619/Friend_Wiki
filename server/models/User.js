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
/**
 * mongoDB에 저장하기 전에 실행
 * 저장 내용에 password가 포함되어 있으면 암호화 작업 수행
 */
userSchema.pre('save', function (next) {
    const userInfo = this;

    // 비밀번호를 변경하지 않을 경우 암호화를 진행하지 않음 
    if (!userInfo.isModified('password')) {
        return next();
    }

    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            userInfo.password = hash;
            return next();
        });
    });
});

/**
 * 토큰으로 유저의 정보를 전달
 * @req = token string
 * @callback = function(err, User)
 */
userSchema.statics.findByToken = function (token, callback) {
    const mongooseUser = this;
    if (!token) {
        return callback({ message: '토큰 없음' });
    }

    mongooseUser.findOne({ token: token }, (err, userInfo) => {
        if (err) {
            return callback(err);
        }
        if (!userInfo) {
            return callback({ message: '토큰을 가진 유저 없음' });
        }

        return callback(null, userInfo);
    });
}

const User = mongoose.model('User', userSchema);
module.exports = { User };