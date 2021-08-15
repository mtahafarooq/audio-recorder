import { createSelector } from "reselect";
import { State } from 'store/types';

export const dashboardState = (state: State) => state.dashboard;

export const selectDashboard = createSelector([dashboardState], (dashboardState) => dashboardState);


//All selectors related to Dashboard page will define here i-e using reselect library