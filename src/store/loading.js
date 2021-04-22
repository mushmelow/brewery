import { createAction, createReducer } from '@reduxjs/toolkit';

export const loading = createAction('page/loading');
export const filled = createAction('page/filled');

const initialState = false;

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(loading, () => true).addCase(filled, () => false);
});
