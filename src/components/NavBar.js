import React, { useContext, useState } from 'react';
import { Context } from '..';
import '../assets/css/style.min.css';
import '../assets/css/icomoon.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ACCOUNT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import TypeBar from './TypeBar';
import { check } from '../http/userAPI';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isShop = location.pathname === SHOP_ROUTE;
    const history = useNavigate();
    const [adminPanel, setAdminPanel] = useState(false);
    check().then(data => {data.role === 'ADMIN' && setAdminPanel(true)});

    return (
        <header className='header'>
            <div className='container'>
                <div className='supheader'>
                    <div className='currency'>RUB</div>
                    <div className='current-city'>
                        <span className="icon-mark"></span>
                        Йошкар-Ола
                    </div>
                </div>
                <div className='menu'>
                    <div className='logo'>
                        <NavLink to={SHOP_ROUTE}>
                            <img src={require('../assets/icons/logo.jpeg')} alt='logo' />
                        </NavLink>
                    </div>
                    <div className='menu__search'>
                        <input 
                            name="search"
                            placeholder="Искать на Megga Price"
                            type="text" />
                        <button>
                            <span className="icon-search"></span>
                        </button>
                    </div>
                    {user.isAuth ?
                        <div className='menu__actions'>
                            <div className='menu__actions__item'>
                                <div className='menu__actions__item__img'>
                                    <span className="icon-box"></span>
                                </div>
                                <NavLink to={ORDERS_ROUTE} className='menu__actions__item__title'>Заказы</NavLink>
                            </div>
                            <div className='menu__actions__item'>
                                <div className='menu__actions__item__img'>
                                    <span className="icon-heart"></span>
                                </div>
                                <NavLink to={FAVORITE_ROUTE} className='menu__actions__item__title'>Избранное</NavLink>
                            </div>
                            <div className='menu__actions__item'>
                                <div className='menu__actions__item__img'>
                                    <span className="icon-shopping-cart"></span>
                                </div>
                                <NavLink to={BASKET_ROUTE} className='menu__actions__item__title'>Корзина</NavLink>
                            </div>
                            <div className='menu__actions__item'>
                                <div className='menu__actions__item__img'>
                                    <span className="icon-user"></span>
                                </div>
                                <NavLink to={ACCOUNT_ROUTE} className='menu__actions__item__title'>Профиль</NavLink>
                            </div>
                            {adminPanel &&
                                <div className='menu__actions__item'>
                                    <div className='menu__actions__item__img'>
                                        <span className="icon-cog"></span>
                                    </div>
                                    <NavLink to={ADMIN_ROUTE} className='menu__actions__item__title'>Админ панель</NavLink>
                                </div>
                            }
                        </div>
                        :
                        <div className='menu__actions__item'>
                            <div className='menu__actions__item__img'>
                                <span className="icon-user"></span>
                            </div>
                            <NavLink to={LOGIN_ROUTE} className='menu__actions__item__title'>Войти</NavLink>
                        </div>
                    }
                </div>
                {isShop &&
                    <TypeBar />
                }
                {/* Если реализовал это на странице account, то можешь удалять */}
                {/* {user.isAuth ?
                    <div className='status-bar'>
                        <button 
                            style={{marginRight: '20px'}} 
                            onClick={() => history(ADMIN_ROUTE)}>
                            Админ панель
                        </button>
                        <button 
                            onClick={() => logOut()}>
                            Выйти
                        </button>
                    </div>
                    :
                    <div className='status-bar'>
                        <button onClick={() => history(LOGIN_ROUTE)}>Авторизация</button>
                    </div>
                } */}
            </div>
        </header>
    );
});

export default NavBar;