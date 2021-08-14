import { configureStore } from '@reduxjs/toolkit';

import dashboardReducers from 'pages/Dashboard/ducks/slices/index';

export const store = configureStore({

    reducer: { dashboard: dashboardReducers }

});