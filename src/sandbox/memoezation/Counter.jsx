import { Button, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import SimpleComponent from './SimpleComponent';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(45)

    // const user = { firstName: 'Yaniv' }
    const user = useMemo(() => ({ firstName: "Yaniv", age: age }), [age])
    return (
        <div>
            <Typography>{count}</Typography>
            <Button onClick={() => { setCount(p => p + 1) }}>+</Button>
            <Button onClick={() => { setCount(p => p - 1) }}>-</Button>
            <SimpleComponent user={user} />
            <Button onClick={() => { setAge(p => p + 1) }}>Increase Age</Button>
        </div>
    )
}
