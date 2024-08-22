import React, { createContext, useContext } from 'react'

const MyData = createContext()

export default function DataProvider({ children }) {

    const data = {
        info1: 2,
        info2: 'name',
        info3: true
    }

    return (
        <MyData.Provider value={data}>{children}</MyData.Provider>
    )
}

export const useData = () => {
    const context = useContext(MyData)
    if (!context) {
        throw new Error('useData can only use as children and grand children of the DataProvider')
    }
    return context
}
