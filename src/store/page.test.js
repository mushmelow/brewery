import { reducer, nextPage, cleanPage } from './page';

describe('store/page', () => {
    it('should increate page number', () => {
        const state = 1;
        const nextState = reducer(state, nextPage());
        expect(nextState).toEqual(2);
    });

    it('should clean page number', () => {
        const state = 4;
        const nextState = reducer(state, cleanPage());
        expect(nextState).toEqual(1);
    });
});
