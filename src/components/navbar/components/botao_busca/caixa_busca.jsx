import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './caixa_busca.css'
import { TextField } from '@mui/material';

function CaixaDeBusca() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <TextField
        InputProps={{
          disableUnderline: true,
          inputProps: {
            style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower' },
          }
        }}
        placeholder='Buscar'
        variant='filled'
        margin='none'
        sx={{
          input: { color: 'white', border: '1px solid #FEFEFE', borderRadius: '25px', padding: 1 },
        }} />
      <div style={{ marginLeft: '1vw' }} />
      <div className='botaoBuscar'>
        <SearchIcon fontSize='large' />
      </div>
    </div>
  )
}

export default CaixaDeBusca