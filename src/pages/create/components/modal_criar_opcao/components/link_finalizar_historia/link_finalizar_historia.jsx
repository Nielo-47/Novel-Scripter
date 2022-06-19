import React from 'react'
import "./link_finalizar_historia.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function LinkFinalizarHistoria({ paginaDestino, indicePagina, setPaginaDestino }) {
    let selecionado = paginaDestino === indicePagina;

    return (
        <div className='adicionarPagina' onClick={() => { setPaginaDestino(indicePagina); }} style={{ border: selecionado ? '2px solid green' : null }}>
            Finalizar história
            <CheckCircleIcon fontSize='large' style={{ color: '#22285F' }} />
        </div>
    )
}

export default LinkFinalizarHistoria