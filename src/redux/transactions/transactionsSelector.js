import { createSelector } from '@reduxjs/toolkit';

export const selectedTransactions = state => state.statistics.transactions;
export const selectedCategoriesStat = state => state.statistics.categoriesStat;
export const selectedIsLoading = state => state.statistics.isLoading;
export const selectedError = state => state.statistics.error;

export const selectedChengedCategoriesStat = createSelector(
  [selectedCategoriesStat],
  categoriesStat => {
    const totalSpend = categoriesStat.reduce(
      (acc, item) => acc + item.amount,
      0
    );
    const updatedCategoriesStat = categoriesStat.map(category => {
      return {
        ...category,
        percentage: ((category.amount / totalSpend) * 100).toFixed(1),
      };
    });
    return updatedCategoriesStat;
  }
);
