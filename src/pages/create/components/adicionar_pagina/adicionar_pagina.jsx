import React from 'react'
import "./adicionar_pagina.css"
import AddBoxIcon from '@mui/icons-material/AddBox';

function AdicionarPagina(props) {
    return (
        <div className='adicionarPagina' onClick={() => { props.ativarEdicao(); props.mudarPaginaAtual(null); }}>
            <AddBoxIcon fontSize='large' style={{ color: '#22285F' }} />
        </div>
    )
}

export default AdicionarPagina