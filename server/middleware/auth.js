const { User } = require('../models/User.js');

/**
 * 라우터의 작업을 수행하기 전 미들웨어로 수행
 * req 로 받은 헤더의 authorization의 값이 서버에 존재하는지 여부를 확인
 * 존재하지 않으면 실패 메시지를 클라이언트에게 전달
 * 존재할 경우 해당 유저의 정보를 req.user 에 저장한 후 라우터의 작업 수행
 */
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    User.findByToken(token, (err, userInfo) => {
        if (err) {
            res.json({ success: false, err });
            return;
        }
        req.user = userInfo;
        next();
    });
}

module.exports = auth;