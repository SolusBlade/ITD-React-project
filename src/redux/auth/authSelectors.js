import { createSelector } from "@reduxjs/toolkit";

export const selectorToken = state => state.auth.token;
export const selectorName = state => state.auth.user.name;
export const selectorIsUserExist = state => Boolean(selectorName(state));
export const selectorIsLoggedIn = state => Boolean(selectorToken(state));
export const selectorError = state=> state.auth.error;
export const selectorIsAuthLoading = state=> state.auth.isLoading;
export const selectorIsRefreshing = state => state.auth.isRefreshing;
export const selectorBalance = state => state.auth.balance;

export const selectorIsBalance = createSelector(
  [selectorBalance],
  (balance) => {
    if (balance !== null) return true;
    return false;
  }
);

