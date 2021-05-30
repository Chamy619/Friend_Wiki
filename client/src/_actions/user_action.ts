import axios from 'axios';
import { REGISTER_USER } from './types';
import { server } from './api_address';

interface registerRequest {
    email: string,
    password: string,
    name: string
};

export const registerUser = async (dataToSubmit: registerRequest) => {
    const response = await axios.post(`${server}/api/user/register`, dataToSubmit)

    return ({
        type: REGISTER_USER,
        payload: response.data
    });
}