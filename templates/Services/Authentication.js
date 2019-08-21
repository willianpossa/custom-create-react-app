module.exports = `export const TOKEN_KEY = /* PUT YOUR TOKEN KEY HERE */;

export const isAuthenticated = _ => {
    return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = _ => {
    return localStorage.getItem(TOKEN_KEY);
};

export const login = token => {
    return localStorage.setItem(TOKEN_KEY, token);
};

export const logout = _ => {
    return localStorage.removeItem(TOKEN_KEY);
};
`