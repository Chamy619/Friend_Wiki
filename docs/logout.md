# Logout

클라이언트는 요청 헤더에 `Authorization` 키 값을 이전 로그인하면서 전달 받은 토큰 값으로 설정해 서버로 로그아웃 요청을 보내고, 서버에서는 해당 토큰을 가진 유저 데이터를 찾아, mongoDB 서버에서 token 값을 삭제한다.

## 요청 API 주소

서버 주소의 `/api/server/logout` 로 get 방식으로 로그아웃 요청을 보내면 된다.

## 요청 데이터

헤더의 Authorization 항목에 토큰 값을 넣어 전송한다. 바디의 내용은 필요없다.

## 응답 데이터

성공과 실패할 경우의 응답이 다르다. 

```json
{
    "success": true || false,
    "err": {
        "message": "실패 이유"
    }
}
```

## 미들웨어의 사용

`index.js` 의 라우터 작동 전에, `auth` 라는 미들웨어를 넣어서 토큰의 존재 유무를 먼저 확인했다. `auth` 미들웨어는 로그아웃 뿐 아니라, 로그인 한 사용자의 접근 권한을 체크하는데에도 사용할 예정이다. Express에서 미들웨어를 사용하는 방법은 아래와 같다.

```javascript
// index.js
app.get('/api/user/logout', auth, (req, res) => {
    ...
});

// middleware/auth.js
module.exports = (req, res, next) => {
    ...
    next();
}
```

`next()` 를 통해 미들웨어의 동작을 마무리하고, 라우터의 동작으로 이동하게 할 수 있다. req와 res는 라우터와 공유한다.

## 토큰으로 유저 찾기

토큰으로 유저를 찾기 위해서 나는 mongoose의 statics 메서드를 사용했다. mongoose에서 메서드를 사용하는 방법은 두 가지인데 첫 째로는 로그인과 회원가입 때 사용한 methods 방법이다. 그리고 또 하나가 statics 방법인데 이 둘의 큰 차이점은 `this` 에 있다.
 * methods: methods의 this는 모델의 특정 튜플이라고 생각하면 된다. 이를 사용해 자신의 값에 접근할 수 있고, 실제로 로그인과 회원가입 단계에서 이를 사용해서 자신의 이메일과 패스워드 값에 접근하고, 이를 수정했다.
 * statics: statics의 this는 모델 그 자체이다. 그래서 `findOne` 과 같은 API들을 사용할 수 있다.

 ```javascript
userSchema.statcis.findByToken = function (token, callback) {
    const mongooseUser = this;
    if (!token) {
        callback({message: '토큰이 존재하지 않습니다.'});
        return;
    }

    mongooseUser.findOne({token: token}, (err, userInfo) => {
        if (err) {
            callback(err);
            return;
        }

        // 만약 userInfo의 값이 null 일 경우 에러처리
        if (!userInfo) {
            callback({message: '유저가 존재하지 않습니다.'});
        }

        callback(null, userInfo._id);
    });
}
 ```

## 토큰 지우기

해당 토큰이 존재할 경우 토큰을 지우는 것은 mongoose의 `findOneAndUpdate` 를 사용했다.

```javascript
User.findOneAndUpdate({_id_: _id}, {token: ''}, (err, userInfo) => {
    if (err) {
        res.json({success: false, err});
        return;
    }

    res.json({success: true});
})

```

## 구조

`로그아웃 요청 -> 토큰 확인 -> _id로 검색 후 mongoDB 에서 토큰 제거 -> 결과 전송`

## 변경시 참고사항

변경시 수정해야 할 파일과 위치는 아래와 같다.

* `index.js`
    * `app.get('/api/user/logout')`
* `models/User.js`
    * `userSchema.statics.findByToken`
* `middleware/auth.js`
