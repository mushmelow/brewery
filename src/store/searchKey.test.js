import { reducer, updateSearchKey } from './searchKey';

describe('store/searchKey', () => {
    it('should update search keyword', () => {
        const state = 'Foo';
        const nextState = reducer(state, updateSearchKey('Bar'));
        expect(nextState).toEqual('Bar');
    });
});
