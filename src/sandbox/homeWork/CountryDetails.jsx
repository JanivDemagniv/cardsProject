import { Margin } from '@mui/icons-material'
import { Box, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function CountryDetails() {
  const [data, setData] = useState([])
  const [newData, setNewData] = useState([])
  useEffect(() => {
    const getCountries = async () => {
      let response = await fetch('https://restcountries.com/v3.1/all');
      let data = await response.json();
      setData(data)
      setNewData(data)
    }
    getCountries()
  }, [])

  const [textSearch, setTextSearch] = useState('')

  useEffect(() => {
    setNewData(data.filter((country) => country.name.common.toLowerCase().includes(textSearch.toLowerCase())))
  }, [textSearch])



  if (data.length === 0) {
    return <CircularProgress />
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField value={textSearch} onChange={(e) => { setTextSearch(e.target.value) }} />
      </Box>
      {newData.map((country) => <Typography align='center' key={country.name.common}>{country.name.common}</Typography>)}
    </div >
  )
}
