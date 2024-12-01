let cookies = {};

export const setCookies = (cookieHeader) => {
    cookies = parseCookies(cookieHeader);
};

export function getCookies(name) {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
    }, {});

    return cookies[name];
}
const parseCookies = (cookieHeader) => {
    const cookieObj = {};
    if (cookieHeader) {
        const cookiesArray = cookieHeader.split(';');
        cookiesArray.forEach((cookie) => {
            const [key, value] = cookie.split('=');
            cookieObj[key.trim()] = value ? value.trim() : null;
        });
    }
    return cookieObj;
};

