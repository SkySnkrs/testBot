import { findProduct } from './findProduct.js'
import { addToCart } from './addToCart.js'

const url = 'https://filter-v1.globosoftware.net/filter?filter_id=35508&shop=ecapcitydev.myshopify.com&collection=232989655231&sort_by=created-descending&country=US&event=init&_=1732946433979';
const keywords = ['los', '-rose', '-blue', '-university']
const size = 7

const productData = await findProduct.fetchProduct(url, keywords, size);
const cartCookieEdit = await addToCart.addProductToCart(productData)
