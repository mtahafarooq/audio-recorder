import { combineReducers } from "@reduxjs/toolkit";

import { audioSlice } from './audio-slice';

export default combineReducers({

    audio: audioSlice.reducer

})