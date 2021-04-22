import { createAction, createReducer } from '@reduxjs/toolkit';

export const loadBreweries = createAction('breweries/load');
export const loadMoreBreweries = createAction('breweries/load-more');
export const cleanBreweries = createAction('breweries/clean');

const initialState = [];

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadBreweries, (state, action) => action.payload)
        .addCase(loadMoreBreweries, (state, action) => [...state, ...action.payload])
        .addCase(cleanBreweries, () => initialState);
});
