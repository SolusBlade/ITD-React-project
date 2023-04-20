export const selectorToken = state => state.auth.token;
export const selectorName = state => state.auth.user.name;
export const selectorIsLoggedIn = state => state.auth.isLoggedIn;
export const selectorError = state=> state.auth.error;
export const selectorBalance = state => state.auth.balance;

