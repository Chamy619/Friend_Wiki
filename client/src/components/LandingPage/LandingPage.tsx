import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';

const LandingPage: React.FC = (props: any) => {
    const dispatch = useDispatch();

    const onLogoutHandler = async () => {
        const result = await dispatch(logoutUser());

        if (!result.payload.success) {
            alert(result.payload.err.message);
        } else {
            props.history.push('/login');
        }
    }

    return (
        <div>
            랜딩페이지
            <button onClick={onLogoutHandler}>로그아웃</button>
        </div>
    );
}

export default withRouter(LandingPage);