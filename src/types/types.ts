//  Data types

export type ProductType = {
    id: number,
    name: string,
    description: string,
    height: number,
    diameter: number,
    standingPlace: string,
    wateringNeeds: string,
    photoUrl: string
}

export type DataType = {
    products: ProductType[],
    totalNumberOfProducts: number,
    minHeight: number,
    maxHeight: number,
    minDiameter: number,
    maxDiameter: number
}

export type DataContextType = {
    data: DataType | undefined,
    setData: (data: DataType) => void;
}

// Filter Type

export type FilterContextType = {
    pageSize: number,
    setPageSize: (size: number) => void,
    pageIndex: number,
    setPageIndex: (index: number) => void,
    heightMin: number,
    setHeightMin: (minHeight: number) => void,
    heightMax: number,
    setHeightMax: (maxHeight: number) => void,
    diameterMin: number,
    setDiameterMin: (minDiameter: number) => void,
    diameterMax: number,
    setDiameterMax: (maxDiameter: number) => void,
    standingPlace: string[],
    setStandingPlace: (standingPlace: string[]) => void,
    nameFilter: string,
    setNameFilter: (name: string) => void,
}

export type FilterType = {
    pageSize: number,
    pageIndex: number,
    heightMin: number,
    heightMax: number,
    diameterMin: number,
    diameterMax: number,
    standingPlace: string[],
    nameFilter: string
}