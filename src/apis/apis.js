import qs from 'qs';

import { BASE_API_URL } from './config';

/**
 * fetch list of breweries
 * @param {number} page - page of breweries.  
 * @param {number} size - page size of breweries
 * @returns {Promise}
 */
export const fetchBreweries = (page = 1, size = 21) =>
    fetch(
        `${BASE_API_URL}/breweries${qs.stringify(
            { page, per_page: size },
            { addQueryPrefix: true },
        )}`,
    ).then((res) => res.json());

/**
 * fetch a single brewery
 * @param {number} breweryId 
 * @returns {Promise}
 */
export const fetchBrewery = (breweryId) =>
    fetch(`${BASE_API_URL}/breweries/${breweryId}`).then((res) => res.json());

/**
 * search breweries by keyword
 * @param {string} searchKey 
 * @returns {Promise}
 */
export const searchBrewery = (searchKey) =>
    fetch(`${BASE_API_URL}/breweries/search/?query=${searchKey}`).then((res) => res.json());
