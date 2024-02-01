import { createSelector } from 'reselect';
import { selectDailyNormaData } from 'redux/dailyNorma/dailyNorma.selectors';

export const selectTodayWater = state => state.waterDetails.today;
export const selectMonthWater = state => state.waterDetails.month;
export const selectDailyDrank = state => state.waterDetails.dailyDrank;
export const selectIsLoadingList = state => state.waterDetails.isLoading;
export const selectOwnerId = state => state.waterDetails.ownerId;

export const selectWaterPercentage = createSelector(
  [selectDailyNormaData, selectDailyDrank],
  (dailyNorm, dailyDrank) => {
    return Math.round((100 * dailyNorm) / dailyDrank);
  }
);
