import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Sidebar } from 'semantic-ui-react';
import { debounce } from 'lodash';

import { loadBreweries, loadMoreBreweries } from '../../store/breweries';
import { nextPage } from '../../store/page';
import { loading, filled } from '../../store/loading';
import { updateSearchKey } from '../../store/searchKey';
import { fetchBreweries, searchBrewery } from '../../apis/apis';
import { BreweryList } from './BreweryList.jsx';

import { SearchBar } from './HomePage.styled';

export const HomePage = () => {
    const dispatch = useDispatch();
    const breweries = useSelector((state) => state.breweries);
    const page = useSelector((state) => state.page);
    const isLoading = useSelector((state) => state.loading);
    const searchKey = useSelector((state) => state.searchKey);

    const onSearch = useCallback(
        debounce((key) => {
            dispatch(loading());
            searchBrewery(key)
                .then((json) => dispatch(loadBreweries(json)))
                .finally(() => dispatch(filled()));
        }, 1000),
        [],
    );

    useEffect(() => {
        if (breweries.length === 0) {
            dispatch(loading());
            fetchBreweries()
                .then((json) => {
                    dispatch(loadBreweries(json));
                })
                .finally(() => dispatch(filled()));
        }
    }, [dispatch, breweries]);

    useEffect(() => {
        if (page !== 1) {
            dispatch(loading());
            fetchBreweries(page)
                .then((json) => {
                    dispatch(loadMoreBreweries(json));
                })
                .finally(() => dispatch(filled()));
        }
    }, [dispatch, page]);

    useEffect(() => {
        if (searchKey) {
            onSearch(searchKey);
        } else {
            dispatch(loading());
            fetchBreweries()
                .then((json) => {
                    dispatch(loadBreweries(json));
                })
                .finally(() => dispatch(filled()));
        }
    }, [dispatch, onSearch, searchKey]);

    return (
        <>
            <SearchBar>
                <Input
                    loading={isLoading}
                    placeholder="Search..."
                    value={searchKey}
                    onChange={(e) => dispatch(updateSearchKey(e.target.value))}
                />
            </SearchBar>
            <BreweryList />
            {!isLoading && !searchKey && (
                <Button onClick={() => dispatch(nextPage())}>Load more</Button>
            )}
        </>
    );
};
