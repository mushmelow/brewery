import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

import { Brewery } from '../../components';
import { BreweryListWrapper, ListItem } from './BreweryList.styled';

export const BreweryList = () => {
    const history = useHistory();
    const breweries = useSelector((state) => state.breweries);

    if (breweries.length === 0) return <Loader />;

    return (
        <BreweryListWrapper>
            {breweries.map((brewery, index) => (
                <ListItem
                    key={brewery.id}
                    role="button"
                    tabIndex={index}
                    onClick={() => history.push(`/brewery/${brewery.id}`)}
                >
                    <Brewery brewery={brewery} />
                </ListItem>
            ))}
        </BreweryListWrapper>
    );
};
