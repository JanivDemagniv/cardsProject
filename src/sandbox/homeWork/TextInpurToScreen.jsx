import { Button, Divider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function TextInpurToScreen() {

    const [textValue, setTextValue] = useState('');
    const [textToScreen, setTextToScreen] = useState('');

    const [changeVisabiliry, setChangeVisability] = useState(true);

    const [myList, setMyList] = useState([]);
    const [addText, setAddText] = useState('');

    return (
        <div>
            <TextField value={textValue} onChange={(e) => { setTextValue(e.target.value) }}></TextField>
            <br />
            <Button variant='contained' onClick={() => { setTextToScreen(textValue) }}>Show Text</Button>
            <Typography>{textToScreen}</Typography>
            <Divider />
            {changeVisabiliry && <Typography sx={{ mt: 5 }}>Hello</Typography>}
            <br />
            <Button variant='contained' onClick={() => setChangeVisability((p) => !p)}>Hide It!</Button>
            <Divider />
            <TextField value={addText} sx={{ m: 5 }} onChange={(e) => { setAddText(e.target.value) }}></TextField>
            <br />
            <Button onClick={() => { setMyList(p => [...p, addText]); setAddText('') }}>Add</Button>
            <Button onClick={() => { setMyList([]); setAddText('') }}>Clear</Button>
            <ul>{myList.map((item, index) => <li key={index}>{item}</li>)}</ul>
            <Divider />
        </div >
    )
}
