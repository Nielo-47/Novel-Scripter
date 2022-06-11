import React from 'react'
import './banner.css'
import Botao from './components/button'

function Banner() {
    return (
        <div className='banner' style={{marginLeft:'2vw', marginRight:'2vw'}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className='simbolo'>
                    NS
                </div>
                <ul>
                    <li className='titulo'>
                        Novel Scripter
                    </li>
                    <li className='subtitulo'>
                        Sua plataforma de histórias interativas
                    </li>
                </ul>
            </div>
            <div style={{ display: 'flex', marginBottom: '7vh'}}>
                <div className='login' >
                    <Botao acao="Entrar" />
                    <div style={{ marginLeft: '1vw' }} />
                    <Botao acao="Criar conta" />
                </div>
            </div>
        </div>
    )
}

export default Banner