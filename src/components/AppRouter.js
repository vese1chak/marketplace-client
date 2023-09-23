import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                // Постоянно забываю про ключи: key НУЖНО ПИСАТЬ ВСЕГДА ПРИ ПЕРЕБОРЕ МАССИВА
                <Route key={path} path={path} element={<Component />} exact/>
            )};
            {publicRoutes.map(({path, Component}) => 
                // Постоянно забываю про ключи: key НУЖНО ПИСАТЬ ВСЕГДА ПРИ ПЕРЕБОРЕ МАССИВА
                <Route key={path} path={path} element={<Component />} exact/>
            )};
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;