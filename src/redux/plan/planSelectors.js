export const selectorStatePlan = state => state.ownPlan.plan;
export const selectorStateResult = state => state.ownPlan.result;
export const selectorPlanIsLoading = state => state.ownPlan.isLoading;
export const selectorIsPlan = state => state.ownPlan.isPlan;
export const selectorIsPlanFootage = state => Boolean(state.ownPlan.plan.footage);

