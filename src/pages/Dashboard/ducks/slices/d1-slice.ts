import { createSlice } from "@reduxjs/toolkit";

import { d1 } from '../initial-state';

const REDUCER_NAME = 'first-reducer';

export const d1Slice = createSlice({

    name: REDUCER_NAME,
    initialState: d1,
    reducers: {},
    extraReducers: {}

});

