import { createSelector } from '@reduxjs/toolkit';

export const selectDynamics = state => state.dynamics;
export const selectStatByYear = state => state.dynamics.statByYear;
export const selectStatByMonth = state => state.dynamics.statByMonth;
export const selectAccumToOneMoreMeters = state => state.dynamics.accumToOneMoreMeters;
export const selectAccumulatedProc = state => state.dynamics.accumulatedProc;
export const selectAccumulatedUah = state => state.dynamics.accumulatedUah;
export const selectFlatImage = state => state.dynamics.flatImage;
export const selectMonth = state => state.dynamics.month;
export const selectSquareMeters = state => state.dynamics.squareМeters;
export const selectYear = state => state.dynamics.year;
export const selectDynamicsPlanFootage = state => state.ownPlan.plan.footage;
export const selectDynamicsPlanCost = state => state.ownPlan.plan.cost;

export const selectorOneMoreMeterCost = createSelector(
  [selectAccumulatedUah, selectDynamicsPlanFootage, selectDynamicsPlanCost],
  (accumulatedUah, footage, cost) => {
    const oneSquareMeterCost = cost / footage;
    const oneMoreMeterCost =
      oneSquareMeterCost > accumulatedUah
        ? oneSquareMeterCost - accumulatedUah
        : oneSquareMeterCost - (accumulatedUah % oneSquareMeterCost);

    return oneMoreMeterCost === 0 ? oneSquareMeterCost : oneMoreMeterCost;
  }
);
