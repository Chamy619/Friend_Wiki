import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

/**
 * @option
 *      1. null: 아무나 출입 가능
 *      2. true: 로그인 한 유저만 출입 가능
 *      3. false: 로그인 하지 않은 유저만 출입 가능
 */
const Auth = (SpecificComponent: any, option: (boolean | null), adminRoute = null) => {
    const AuthenticationCheck = (props: any) => {
        const dispatch = useDispatch();

        useEffect(() => {
            const checkLogin = async () => {
                const result = await dispatch(auth());
                if (!result.payload.isAuth) {
                    if (option) {
                        props.history.push('/login');
                    }
                } else {
                    if (adminRoute && !result.payload.isAdmin) {
                        props.history.push('/');
                    }
                    if (option === false) {
                        props.history.push('/');
                    }
                }
            };

            checkLogin();
        }, []);

        return (
            <SpecificComponent />
        );
    }

    return AuthenticationCheck;
}
export default Auth;