import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';

interface StyleInterface {
    display: string,
    justifyContent: string,
    alignItems: string,
    width: string,
    height: string
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column'
};

const registerStyle: StyleInterface = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
};

const Register: React.FC = (props: any) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const onEmailHandler = (event: any) => {
        setEmail(event.target.value);
    };

    const onNameHandler = (event: any) => {
        setName(event.target.value);
    };

    const onPasswordHandler = (event: any) => {
        setPassword(event.target.value);
    };

    const onConfirmPasswordHandler = (event: any) => {
        setConfirmPassword(event.target.value);
    }

    const onSubmitHandler = async (event: any) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return alert('비밀번호가 일치하지 않습니다.');
        }

        const body = {
            email,
            name,
            password
        };

        const result = await dispatch(registerUser(body));

        if (!result.payload.success) {
            alert(result.payload.err.name);
        } else {
            props.history.push('/login');
            return;
        }
    }

    return (
        <div style={registerStyle}>
            <form style={formStyle} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button>회원 가입</button>
            </form>
        </div>
    );
}

export default withRouter(Register);