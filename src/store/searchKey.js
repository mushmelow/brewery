import { createAction, createReducer } from '@reduxjs/toolkit';

export const updateSearchKey = createAction('search/update');

const initialState = '';

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(updateSearchKey, (state, action) => action.payload);
});
