import { createAction, createReducer } from '@reduxjs/toolkit';

export const nextPage = createAction('page/next');
export const cleanPage = createAction('page/clean');

const initialState = 1;

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(nextPage, (state) => state + 1).addCase(cleanPage, () => initialState);
});
