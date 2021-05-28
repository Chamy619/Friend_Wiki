const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const User = mongoose.model('User', userSchema);
module.exports = { User };