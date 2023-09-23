import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../..'
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap';
import { createGood, fetchBrands, fetchTypes } from '../../http/goodAPI';
import { observer } from 'mobx-react-lite';

const CreateGood = observer(({show, onHide}) => {
    const {good} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => good.setTypes(data));
        fetchBrands().then(data => good.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    };
    const selectFile = e => {
        setFile(e.target.files[0]);
    };
    const addGood = () => {
        // Возвращает ошибку 404 из-за пустой FormData
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', good.selectedBrand.id);
        formData.append('typeId', good.selectedType.id);
        formData.append('info', JSON.stringify(info));
        console.log(JSON.stringify(info), formData);
        createGood(formData).then(data => onHide());
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{good.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {good.types.map(type => 
                                <Dropdown.Item 
                                    onClick={() => good.setSelectedType(type)} 
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{good.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {good.brands.map(brand => 
                                <Dropdown.Item 
                                    onClick={() => good.setSelectedBrand(brand)} 
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название товара'
                    />
                    <Form.Control 
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость товара'
                        type='number'
                    />
                    <Form.Control 
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr />
                    <Button variant={'outline-dark'} onClick={addInfo}>Добавить новое свойство</Button>
                    {info.map(i => 
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control 
                                    placeholder='Введите название свойства'
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)} />
                            </Col>
                            <Col md={4}>
                                <Form.Control 
                                    placeholder='Введите описание свойства'
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)} />
                            </Col>
                            <Col md={4}>
                                <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addGood}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateGood;