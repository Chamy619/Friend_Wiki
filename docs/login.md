# Login

사용자가 이메일과 패스워드 정보를 서버로 전송해주면, 서버에서 해당 사용자가 존재하는지 여부를 판단해 응답을 보내주는 기능을 한다.

## 요청 API 주소

서버 주소의 `/api/user/login` 위치로 요청을 전송하면 서버에서 로그인 성공 여부를 전송한다.

## 요청 데이터

로그인은 post 방식으로 request를 보내고, 형식은 아래와 같다.

```json
{
    "email":"yd95069506@test1.com",
    "password":"123456"
}
```

## 응답 데이터

로그인에 실패했을 때와 성공했을 때의 형식이 다르다.

* 로그인 성공시: 성공했다는 상태와 함께 토큰을 전송
* 로그인 실패시: 실패했다는 상태와 함께 실패 이유를 전송

```json
// 성공
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiJ9.NjBhZmE2YmJiZDQyNTYwMTMyZjBlM2Q0.VppRqfsZefouvw6586ySdvwEEDMX4wHpPLNtNFfj_vo"
}

// 실패
{
    "success": false,
    "message": "비밀번호가 일치하지 않습니다."
}
```

## 암호문과 평문 비교

bcrypt를 사용해 패스워드 암호화 및 복호화를 진행했다.

```javascript
const bcrypt = require('bcrypt');

bcrypt.compare('평문', '암호문', (err, result) => {
    if (err) {
        console.log(`ERR: ${err}`);
    }

    if (result) {
        console.log('암호가 일치합니다.');
    } else {
        console.log('암호가 일치하지 않습니다.');
    }
});
```

## 토큰 생성

토큰은 jsonwebtoken을 사용해서 생성했다. jsonwebtoken을 사용해 토큰을 생성하는 방법을 짧게 소개하도록 하겠다.

```javascript
const jwt = require('jsonwebtoken');
const key = 'secretkey'

const token = jwt.sign('토큰으로 만들 id 또는 식별할 수 있는 무언가', key);
```

토큰을 생성하는 부분에서 에러를 한 번 겪은 적이 있는데, 첫 번째 매개변수로 전달하는 값이 String 값 인것을 확실히 해야한다. 따라서 `.toHexString()` 또는 `.toString()` 을 거친 후 값을 전달해 주어야 한다.

## 구조

`사용자 요청 -> 이메일로 유저 검색 -> 패스워드 일치 여부 확인 -> 토큰 생성 -> 응답 전송` 의 순서로 로그인이 진행된다.

## 이메일로 유저 검색

사용자에게 받은 이메일로 처음 유저를 검색한다. 이 때 mongoose의 `findOne` 메서드를 사용했다.

```javascript
User.findOne({email: req.body.email}, callback());
```

## 패스워드 확인

해당 이메일이 존재할 경우 패스워드가 일치하는지 확인한다. mongoose에 추가 메서드를 생성해서 확인했다. 새로운 메서드를 추가할 때는 mongoose 모델에 `methods` 에 추가하면 된다.

```javascript
// models/User.js
userSchema.methods.comparePassword = function(password, callback) {
    const user = this;
    bcypt.compare(password, this.password, (err, isMatch) => {
        ...
    });
}

//index.js
User.comparePassword(req.body.password, callback());
```

## 토큰 생성

토큰은 위에 설명한 `jsonwebtoken` 을 사용해 생성했다.

```javascript
// models/User.js
userSchema.methods.generateToken = function() {
    const user = this;
    const token = jsonwebtoken.sign(user._id.toHexString(), 'key');
    user.token = token;
}
```

## 변경시 참고사항

로그인과 관련된 소스를 가진 백엔드 부분은 아래와 같다.

* `index.js`
    * `app.post('/api/user/login')`
* `models/User.js`
    * `userSchema.methods.comparePassword`
    * `userSchema.methods.generateToken`