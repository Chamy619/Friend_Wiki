# User Schema

User Schema에서는 사용자의 정보를 담고 있음

## 구조

사용자의 정보를 이름, 이메일, 비밀번호, 성, 권한, 사진, 토큰, 토큰 만료 기간으로 저장함

```javascript
{
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
}
```

## 권한(role)

사용자의 권한은 다음과 같다.
* 0: 관리자
* 1: 사용자