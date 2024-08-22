import React from 'react'
import GrandChild from './GrandChild'
import { useData } from './DataProvider'


export default function Child() {
    const data = useData()
    return (
        <div>
            <GrandChild />
            <h1>This is Child</h1>
            <h2>{data.info2}</h2>
        </div>
    )
}
