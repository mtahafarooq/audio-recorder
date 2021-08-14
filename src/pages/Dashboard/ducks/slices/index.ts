import { combineReducers } from "@reduxjs/toolkit";

import { d1Slice } from './d1-slice';

export default combineReducers({

    firstReducer: d1Slice.reducer

})