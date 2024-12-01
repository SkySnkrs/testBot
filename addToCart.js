import { setCookies } from './cookieStore.js';

class AddToCart {

    async addProductToCart(productData) {

        const { product, id } = productData;
        const headers = {
            "accept": "text/plain, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "cookie": "secure_customer_sig=; localization=US; cart_currency=USD; _cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22sale_of_data_region%22%3Afalse%7D; _shopify_y=14cbace5-0e05-4398-b613-f12b3bfb113f; _orig_referrer=https%3A%2F%2Fwww.google.com%2F; _landing_page=%2F%3Fsrsltid%3DAfmBOorr3TlTyDJTNt8oiQPnHJED_vTV_9x4V0U7Z0lhI-Ou5ISDu-rR; _gid=GA1.2.874415385.1732946411; _pin_unauth=dWlkPVpEZ3paakZrTjJNdE56RTRNUzAwTW1FMkxUZ3haVE10TURObE5HRm1NREV4WWpjdw; _tt_enable_cookie=1; _ttp=NxkGuQWvXoLSxGOj9Ghg_SzlBht.tt.0; _gcl_au=1.1.155527709.1732946414; _tracking_consent=%7B%22con%22%3A%7B%22CMP%22%3A%7B%22a%22%3A%22%22%2C%22m%22%3A%22%22%2C%22p%22%3A%22%22%2C%22s%22%3A%22%22%7D%7D%2C%22v%22%3A%222.1%22%2C%22region%22%3A%22USID%22%2C%22reg%22%3A%22%22%2C%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22sale_of_data_region%22%3Afalse%2C%22consent_id%22%3A%2278084FD9-fb72-4CE7-a49a-2ccc4162f65e%22%7D; _ga_6Y91X0K3LC=GS1.1.1732946412.1.1.1732946978.0.0.0; _ga=GA1.1.1069488529.1732946411; _ga_JM2B8N7M9M=GS1.1.1732946413.1.1.1732946978.0.0.0",
            "origin": "https://www.ecapcity.com",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "referer": "https://www.ecapcity.com/collections/new-arrivals/products/los-angeles-dodgers-2024-world-series-champion-new-era-59fifty-fitted-hat-rust-orange-black-sky-blue-underbrim-under-brim",
            "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            "x-requested-with": "XMLHttpRequest"
        };

        // Set up the request body
        const data = new URLSearchParams();
        data.append("form_type", "product");
        data.append("utf8", "✓");
        data.append("id", id);
        data.append("quantity", "1");
        data.append("product-id", product.id);
        data.append("section-id", "product-template");

        try {
            const response = await fetch('https://www.ecapcity.com/cart/add.js', {
                method: 'POST',
                headers: headers,
                body: data
            });

            const result = await response.json();

            if (response.ok) {
                const cookies = response.headers.get('set-cookie');

                // Store cookies
                setCookies(cookies);

                const cartCookie = cookies.match(/cart=([^;]+)/)[1];
                const cartCookieEdit = cartCookie.split('%3F')[0];

                console.log(`Product Added To Cart, ${product.title}`)
                return cartCookieEdit;
            } else {
                console.error("Error adding product to cart:", result);
            }
        } catch (error) {
            console.error("Request failed:", error);
        }
    }

}

export const addToCart = new AddToCart()
