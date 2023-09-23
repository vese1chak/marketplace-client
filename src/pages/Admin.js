import React, { useState } from 'react';
import CreateBrand from '../components/modals/CreateBrand';
import CreateGood from '../components/modals/CreateGood';
import CreateType from '../components/modals/CreateType';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [goodVisible, setGoodVisible] = useState(false);

    return (
        <Container className='d-flex flex-column'>
            <Button onClick={() => setTypeVisible(true)} variant={'outline-dark'} className='mt-4 p-2'>Добавить тип</Button>
            <Button onClick={() => setBrandVisible(true)} variant={'outline-dark'} className='mt-4 p-2'>Добавить бренд</Button>
            <Button onClick={() => setGoodVisible(true)} variant={'outline-dark'} className='mt-4 p-2'>Добавить товар</Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateGood show={goodVisible} onHide={() => setGoodVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
};

export default Admin;