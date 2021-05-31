import axios from 'axios';
import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
} from './types';
import { server } from './api_address';

interface RegisterRequestInterface {
    email: string,
    password: string,
    name: string
};

interface LoginRequestInterface {
    email: string,
    password: string
};

export const registerUser = async (dataToSubmit: RegisterRequestInterface) => {
    const response = await axios.post(`${server}/api/user/register`, dataToSubmit);

    return ({
        type: REGISTER_USER,
        payload: response.data
    });
}

export const loginUser = async (dataToSubmit: LoginRequestInterface) => {
    const response = await axios.post(`${server}/api/user/login`, dataToSubmit);

    return ({
        type: LOGIN_USER,
        payload: response.data
    });
}

export const logoutUser = async () => {
    const originUserToken = localStorage.getItem('userToken');
    let userToken = '';

    if (typeof originUserToken === 'string') {
        userToken = JSON.parse(originUserToken);
    }

    const response = await axios.get(`${server}/api/user/logout`, {
        headers: {
            authorization: userToken
        }
    });

    return ({
        type: LOGOUT_USER,
        payload: response.data
    });
}