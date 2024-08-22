import React, { createContext } from 'react'
import Parent from './Parent'
import DataProvider from './DataProvider'


export default function GrandParent() {

    return (
        <div>
            <DataProvider>
                <Parent />
            </DataProvider>
            <h1>This is GrandParent</h1>

        </div>
    )
}
