# Register

회원가입의 경우 사용자의 이메일, 이름, 비밀번호를 필수로 받아서 mongoDB에 저장한다. 이메일 1개 당 1명의 회원이 있을 수 있고, 만약 이미 해당 이메일이 등록되어 있다면 에러메시지를 반환한다.

## 요청 API 주소

서버 주소의 `/api/user/register` 위치로 요청을 전송하면 서버에서 회원가입 절차를 처리하고 결과를 전송한다.

## 요청 데이터

회원가입은 기본적으로 post 형식으로 request를 보내고 형식은 아래와 같다.

```json
{
    "email":"yd95069506@test1.com",
    "password":"123456",
    "name":"Chamy"
}
```

현재 패스워드는 프론트에서 암호화하지 않고 전송하는데 추후에 프론트에서 이를 암호화해서 전송하는 방법을 생각해보겠다.

## 응답 데이터

회원가입에 성공할 경우 간단하게 `success: true` 만 전송한다.

```json
{
    "success": true
}
```

만약 회원가입에 실패할 경우 실패했다는 것과 실패 원인을 같이 전송한다.

```json
{
    "success": false,
    "err": {
        "driver": true,
        "name": "MongoError",
        "index": 0,
        "code": 11000,
        "keyPattern": {
            "email": 1
        },
        "keyValue": {
            "email": "yd95069506@test1.com"
        }
    }
}
```

## 암호화

암호화는 bcrypt를 사용해 진행했다. bcrypt를 사용하기 위해서는 `npm install bcrypt` 를 사용해 일단 bcyprt를 프로젝트에 설치해야 한다.

### 1. bcyprt 사용해 암호문 생성

```javascript
const bcrypt = require('bcrypt');

const saltRounds = 20; // 사용자 정의 값
const plainText = '암호화할 텍스트'

bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
        console.log(`ERR: ${err}`);
    }

    bcrypt.hash(plainText, salt, (err, hash) => {
        if (err) {
            console.log(`ERR: ${err}`);
        }
        // hash가 최종 암호화된 값으로 원하는 처리를 하면 됨
    });
});
```

### mongoose의 pre

pre를 사용하면 특정 메서드 실행 전에 먼저 실행되는 함수를 작성할 수 있다.

```javascript
const userSchema = mongoose.schema({
    ...
});


userSchema.pre('save', (next) => {
    // save 실행 전 먼저 실행
    ...
    next();
});
```

이를 사용해서, 사용자로 부터 받아온 데이터를 mongoDB에 바로 저장하지 않고, 암호화를 한 후 저장하도록 설정했다.

## 구조

`사용자 요청 -> 암호화 -> DB 저장 -> 응답` 의 순서로 회원가입이 진행된다.

## 변경시 참고사항

만약 회원가입 부분을 수정하려면 해당 파일을 참고하면 된다.
 * `index.js`
    * `app.post('/api/user/register')`
 * `models/User.js`
    * `userSchema.pre('save')`