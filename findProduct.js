import { fetchProduct } from './getProduct.js';

class FindProduct {

    async fetchProduct(url, keywords, size) {
        const positiveKeywords = keywords.filter(keyword => !keyword.startsWith('-'));
        const negativeKeywords = keywords.filter(keyword => keyword.startsWith('-')).map(keyword => keyword.slice(1));

        const products = await fetchProduct.getProducts(url);
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const available = product.available
            const title = product.title.toLowerCase()




            let matchesPositive = false;
            let matchesNegative = false;

            for (let keyword of positiveKeywords) {
                if (title.includes(keyword.toLowerCase())) {
                    matchesPositive = true;
                    break;
                }
            }

            for (let keyword of negativeKeywords) {
                if (title.includes(keyword.toLowerCase())) {
                    matchesNegative = true;
                    break;
                }
            }

            if (matchesPositive && !matchesNegative) {
                if (available == true) {
                    const variants = product.variants

                    let idToReturn = null;
                    variants.forEach(variant => {
                        const hatSize = variant.title;
                        const id = variant.id;
                        if (hatSize == size) {
                            idToReturn = id;
                        }
                    });


                    if (idToReturn) {
                        console.log(`Product Found! Adding To Cart; ${product.title}`)
                        return { product, id: idToReturn };
                    } else {
                        console.log('Size 7 not found.');
                    }
                } else {
                    console.log('Product Found, Out Of Stock.')
                }
            }


        }
    }
}

export const findProduct = new FindProduct()