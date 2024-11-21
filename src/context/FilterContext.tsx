import React, { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { fetchProducts } from '../api/productService';
import { DataContext } from '../context/DataContext';
import { FilterContextType } from '../types/types';

const defaultContextValue: FilterContextType = {
    pageSize: 1,
    setPageSize: () => { },
    pageIndex: 1,
    setPageIndex: () => { },
    heightMin: 90,
    setHeightMin: () => { },
    heightMax: 180,
    setHeightMax: () => { },
    diameterMin: 30,
    setDiameterMin: () => { },
    diameterMax: 55,
    setDiameterMax: () => { },
    standingPlace: [],
    setStandingPlace: () => { },
    nameFilter: '',
    setNameFilter: () => { }
}

export const FilterContext = createContext<FilterContextType>(defaultContextValue);

export const FilterProvider = ({ children }: { children: ReactNode }) => {

    const [pageSize, setPageSize] = useState<number>(10);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [heightMin, setHeightMin] = useState<number>(90);
    const [heightMax, setHeightMax] = useState<number>(180);
    const [diameterMin, setDiameterMin] = useState<number>(30);
    const [diameterMax, setDiameterMax] = useState<number>(55);
    const [standingPlace, setStandingPlace] = useState<string[]>([]);
    const [nameFilter, setNameFilter] = useState<string>('');

    const {
        data,
        setData,
    } = useContext(DataContext);

    useEffect(() => {
        const debounceDelay = setTimeout(() => {
            const fetchData = async () => {
                try {
                    const fetchedData = await fetchProducts(
                        pageSize,
                        pageIndex,
                        heightMin,
                        heightMax,
                        diameterMin,
                        diameterMax,
                        standingPlace,
                        nameFilter
                    );

                    if (fetchedData) {
                        setData(fetchedData);
                    }
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            fetchData();
        }, 300);

        return () => clearTimeout(debounceDelay);
    }, [pageSize, pageIndex, heightMin, heightMax, diameterMin, diameterMax, standingPlace, nameFilter]);

    return (
        <FilterContext.Provider value={{
            pageSize,
            setPageSize,
            pageIndex,
            setPageIndex,
            heightMin,
            setHeightMin,
            heightMax,
            setHeightMax,
            diameterMin,
            setDiameterMin,
            diameterMax,
            setDiameterMax,
            standingPlace,
            setStandingPlace,
            nameFilter,
            setNameFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext