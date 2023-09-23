import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import BrandBar from '../components/BrandBar';
import GoodList from '../components/GoodList';
import { fetchBrands, fetchGoods, fetchTypes } from '../http/goodAPI';

const Shop = observer(() => {
    const {good} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => good.setTypes(data));
        fetchBrands().then(data => good.setBrands(data));
        fetchGoods(null, null).then(data => {
            good.setGoods(data.rows);
        });
    }, []);

    useEffect(() => {
        fetchGoods(good.selectedType.id, good.selectedBrand.id).then(data => {
            good.setGoods(data.rows);
        });
    }, [good.selectedType, good.selectedBrand])

    return (
        <div className='container'>
            <div className='sales'></div>
            <div className='shop'>
                <div className='parameters'>
                    <div className="parameters__title">Подбор по параметрам</div>
                    {good.types.map(type => 
                        <div 
                            key={type.id}>
                            {type.id === good.selectedType.id && 
                                <div>
                                    <div>Категория: {type.name}</div>
                                    <div>Бренды:</div>
                                    <BrandBar />
                                </div>
                            }
                        </div>
                    )}
                </div>
                <div className='goods'>
                    <div className="top-sales">
                        <div className="top-sales__title">Хиты продаж</div>
                        <GoodList />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Shop;