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

userSchema.pre('save', function (next) {
    const userInfo = this;
    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            next(err);
        }

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) {
                next(err);
            }

            userInfo.password = hash;
            next();
        });
    });
});

const User = mongoose.model('User', userSchema);
module.exports = { User };