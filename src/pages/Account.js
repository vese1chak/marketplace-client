import React, { useContext } from 'react';
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const Account = () => {
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }
    
    return (
        <div>
            {user.isAuth &&
                <NavLink 
                    to={SHOP_ROUTE} 
                    onClick={() => logOut()}>
                    Выйти
                </NavLink>}
        </div>
    );
};

export default Account;