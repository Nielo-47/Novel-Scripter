import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './caixa_busca.css'

function CaixaDeBusca() {
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
      <div className='caixaBusca'>
        buscar...
      </div>
      <div style={{marginLeft:'1vw'}}/>
      <div className='botaoBuscar'>
        <SearchIcon fontSize='large'/>
      </div>
    </div>
  )
}

export default CaixaDeBusca