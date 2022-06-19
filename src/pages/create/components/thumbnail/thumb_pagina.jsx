import React from 'react'
import './thumb_pagina.css'

function OpcaoThumb({ cor, visivel }) {
    return (
        <div
            className='opcaoThumb'
            style={{ borderColor: cor, backgroundColor: cor, visibility: visivel ? 'visible' : 'hidden' }}
        >
            <hr style={{
                color: 'white',
                height: '0.1px',
                backgroundColor: 'white',
                width: `70%`
            }}></hr>
        </div>
    )
}

function TextoThumb({ texto }) {
    return (
        <div className='textoThumb' style={{ visibility: texto === null ? 'hidden' : 'visible' }} >
            {(texto ?? '').split('\n').map((line, idx) => <hr key={idx} style={{
                color: 'white',
                height: '0.1px',
                backgroundColor: 'white',
                width: `${(line.length > 90 ? 90 : line.length)}%`,
                margin: '1%'
            }}></hr>)}
        </div>
    )
}

function ThumbPagina({ pagina, ativarEdicao, mudarPaginaAtual, style }) {
    console.log(pagina)
    return (
        <div className='thumbnailPagina' onClick={() => { ativarEdicao(true); mudarPaginaAtual(pagina.id); }} style={style}>
            <div className='historiaThumb'>
                <TextoThumb texto={pagina.texto} />
                <div className='opcoesThumb'>
                    <OpcaoThumb cor='#A00909' visivel={pagina.textoOpcoes[0] != null} />
                    <OpcaoThumb cor='#247CFF' visivel={pagina.textoOpcoes[2] != null} />
                    <OpcaoThumb cor='#0DD615' visivel={pagina.textoOpcoes[1] != null} />
                </div>
            </div>
            <img
                className={'imagemThumb'}
                src={pagina.imagem}
                alt='new'
                style={{ visibility: pagina.imagem === null ? 'hidden' : 'visible' }}
            />
        </div>
    )
}

export default ThumbPagina