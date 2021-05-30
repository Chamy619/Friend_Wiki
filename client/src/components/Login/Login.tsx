import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';

interface StyleInterface {
    display: string,
    justifyContent: string,
    alignItems: string,
    width: string,
    height: string
};

const loginStyle: StyleInterface = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column'
};

const Login: React.FC = (props: any) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onEmailHandler = (event: any) => {
        setEmail(event.target.value);
    };

    const onPasswordHandler = (event: any) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = async (event: any) => {
        event.preventDefault();

        const body = {
            email,
            password
        };

        const response = await dispatch(loginUser(body));

        if (!response.payload.success) {
            alert(response.payload.message);
        } else {
            localStorage.setItem('userToken', response.payload.token);
            props.history.push('/');
        }
    }

    return (
        <div style={loginStyle}>
            <form style={formStyle} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <br />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default withRouter(Login);