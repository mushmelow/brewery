import { createAction, createReducer } from '@reduxjs/toolkit';

export const loadBrewery = createAction('brewery/load');
export const cleanBrewery = createAction('brewery/clean');

const initialState = null;

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadBrewery, (state, action) => action.payload)
        .addCase(cleanBrewery, () => initialState);
});
