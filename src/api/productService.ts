import { FilterType } from "../types/types";

/**
 * Fetches products from the API with various filters.
 *
 * @param {number} pageSize - The number of products per page.*
 * @param {number} pageIndex - The page number for the results Standaard is 1.*
 * @param {number} heightMin - The minimum height filter for products
 * @param {number} heightMax - The maximum height filter for products.
 * @param {number} diameterMin - The minimum diameter filter for products.
 * @param {number} diameterMax - The maximum diameter filter for products.
 * @param {string[]} standingPlace - An array of places where the product can be located. Default is an empty array.
 * @param {string} nameFilter - A search filter for the name of the product. Default is an empty string.
 * 
 * @returns {Promise<FilterType>}- The products fetched from the API.
 */

export const fetchProducts = async (
    pageSize: number,
    pageIndex: number,
    heightMin: number,
    heightMax: number,
    diameterMin: number,
    diameterMax: number,
    standingPlace: string[],
    nameFilter: string
) => {

    const URL = getURL(pageSize, pageIndex, heightMin, heightMax, diameterMin, diameterMax, standingPlace, nameFilter)

    try {
        const response = await fetch(URL + '&=accept', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Response was not ok.');
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

/**
 * Get specific product from the API with a ID.
 * 
 * @param {number} id - product ID for fetching the product.*
 * 
 * @return {Promise<FilterType>} - fetched product of the API.
 */
export const fetchProductById = async (id: number) => {
    const URL = `https://jemid-warmupapi.azurewebsites.net/api/products/${id}`;

    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Response was not ok.');
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

const getURL = (
    pageSize: number,
    pageIndex: number,
    heightMin: number,
    heightMax: number,
    diameterMin: number,
    diameterMax: number,
    standingPlace: string[],
    nameFilter: string
) => {
    let URL = `https://jemid-warmupapi.azurewebsites.net/api/products?pageSize=${pageSize}&pageIndex=${pageIndex}`;

    if (nameFilter && nameFilter.length > 0) {
        URL += `&nameFilter=${nameFilter}`;
    }

    URL += `&heightMinimumFilter=${heightMin}&heightMaximumFilter=${heightMax}&diameterMinimumFilter=${diameterMin}&diameterMaximumFilter=${diameterMax}`;

    standingPlace.forEach(place => {
        URL += `&standingPlaceFilters=${place}`;
    });

    return URL;
}