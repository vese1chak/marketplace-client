import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const BrandBar = observer(() => {
    const {good} = useContext(Context);

    return (
        <ul>
            {good.brands.map(brand => 
                <li 
                    style={brand.id === good.selectedBrand.id ? {fontWeight: 700} : {fontWeight: 400}}
                    onClick={() => good.setSelectedBrand(brand)}
                    key={brand.id}>
                    {brand.name}
                </li>
            )}
        </ul>
    );
});

export default BrandBar;