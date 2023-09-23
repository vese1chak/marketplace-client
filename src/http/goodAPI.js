import {$authHost, $host} from './index';

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
};

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
};

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand);
    return data;
};

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand');
    return data;
};

export const createGood = async (good) => {
    const {data} = await $authHost.post('api/good', good);
    return data;
};

export const fetchGoods = async (typeId, brandId) => {
    const {data} = await $host.get('api/good', {params: {
        typeId, brandId
    }});
    return data;
};

export const fetchOneGood = async (id) => {
    const {data} = await $host.get('api/good/' + id);
    return data;
};