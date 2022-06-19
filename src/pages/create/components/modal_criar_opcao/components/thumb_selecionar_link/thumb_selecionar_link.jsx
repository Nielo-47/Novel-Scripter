import React from 'react'
import ThumbPagina from '../../../thumbnail/thumb_pagina'

function ThumbSelecionarLink({ paginaDestino, pagina, setPaginaDestino }) {
    let selecionado = paginaDestino === pagina.id;

    return (
        <div onClick={() => { setPaginaDestino(pagina.id); }}>
            <ThumbPagina pagina={pagina} style={{ border: selecionado ? '2px solid green' : null }} />
        </div>
    )
}

export default ThumbSelecionarLink