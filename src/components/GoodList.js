import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import GoodItem from './GoodItem';

const GoodList = observer(() => {
    const {good} = useContext(Context);

    return (
        <div className='card__container'>
            {good.goods.map(good =>
                <GoodItem key={good.id} good={good} />
            )}
        </div>
    );
});

export default GoodList;