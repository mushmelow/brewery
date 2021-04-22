import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

import { fetchBrewery } from '../../apis/apis';
import { loadBrewery } from '../../store/brewery';
import { NavBar } from './NavBar.jsx';
import { Brewery } from '../../components';

export const BreweryDetailsPage = () => {
    const dispatch = useDispatch();
    const brewery = useSelector((state) => state.brewery);
    const { breweryId } = useParams();

    useEffect(() => {
        fetchBrewery(breweryId).then((json) => {
            dispatch(loadBrewery(json));
        });
    }, [dispatch, breweryId]);

    if (!brewery) return <Loader />;

    return (
        <div>
            <NavBar name={brewery.name} />
            <Brewery brewery={brewery} />
        </div>
    );
};
