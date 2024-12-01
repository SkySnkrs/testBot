import fetch from 'node-fetch';

class FetchProduct {
    async getProducts(url) {
        try {
            const res = await fetch(url);
            const dataString = await res.text();
            const data = JSON.parse(dataString);

            const products = data.products || [];

            return products
        } catch (error) {
            console.log('Error Making Request', error);
        }
    }
}

export const fetchProduct = new FetchProduct();
