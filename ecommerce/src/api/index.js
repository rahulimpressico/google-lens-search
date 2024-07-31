
import axios, { AxiosError } from 'axios';

const API_URL = 'https://gen-ai-poc.impressicocrm.com/api/v1'

const baseConfig = {
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
};


export const axiosPublic = axios.create(baseConfig);
export const axiosPrivate = axios.create(baseConfig);
export const axiosUnhandled = axios.create(baseConfig);


export const top_rated_product = async () => {
    const res = await axiosPublic({
        url: `/thumbnails?category=top_rated_products`,
        method: 'GET',
    });

    return res;
};