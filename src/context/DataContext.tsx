import React, { createContext, ReactNode, useState } from 'react'
import { DataContextType, DataType } from '../types/types';

const defaultContextValue: DataContextType = {
    data: undefined,
    setData: () => { },
}

export const DataContext = createContext<DataContextType>(defaultContextValue);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<DataType | undefined>(undefined);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )

}