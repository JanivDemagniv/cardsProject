import { TextField } from '@mui/material'
import React, { useState } from 'react'

export default function UserNameCheck() {
    const [labelName, setLabelName] = useState('User Name');
    const [idValue, setIdValue] = useState('standard-helperText');
    const [heplperContent, setHelperContent] = useState('enter user name between 4-10 digits');
    const [userName, setUserName] = useState('')
    const [errorName, setErrorName] = useState('')

    const usetNameCheck = (e) => {
        setUserName(e.target.value);
        if (userName.length < 4 > 0 || userName.length > 10) {
            setLabelName("Error")
            setIdValue("erroroutlined-helper-text")
            setHelperContent("Incorrect entry.")
            setErrorName('error')
        } else {
            setLabelName('User Name')
            setIdValue('standard-helperText')
            setHelperContent('enter user name between 4-10 digits')
            setErrorName('')
        }
    }

    return (
        <div>
            <TextField onChange={usetNameCheck} label={labelName} error={errorName} id={idValue} helperText={heplperContent} />
        </div>
    )
}
