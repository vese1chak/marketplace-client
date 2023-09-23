import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { fetchOneGood } from '../http/goodAPI';
import '../assets/css/icomoon.css';

const GoodPage = () => {
    const [good, setGood] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneGood(id).then(data => setGood(data));
    }, []);

    return (
        <div className='container'>
            <h1 className="good__title">{good.name}</h1>
            <div className="good__stats">
                <div className="good__stars">
                    <span className="icon-star"></span>
                    {good.rating}
                </div>
                <div className="good__reviews">1 отзыв</div>
            </div>
            <div className="good__info">
                <div className="good__img">
                    <img src={process.env.REACT_APP_API_URL + good.img} alt="good" />
                </div>
                <div className="good__params" style={{gridTemplateRows: `repeat(${good.info.length}, 20px)`}}>
                    <div className="good__params__title">Характеристики</div>
                    {good.info.map(info => 
                        <div key={info.id}>
                            <div className="good__params__property">{info.title}: </div>
                        </div>
                    )}
                    {good.info.map(info => 
                        <div key={info.id}>
                            <div className="good__params__property__value">{info.description}</div>
                        </div>
                    )}
                </div>
                <div className="good__to-cart">
                    <div className="good__to-cart__price">
                        {/* Именно тут намеренно повторяется новый и старый ценник */}
                        <div className="good__to-cart__price__new">{good.price}₽</div>
                        <div className="good__to-cart__price__old">{good.price}₽</div>
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
};

export default GoodPage;