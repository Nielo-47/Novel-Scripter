import React from 'react'
import './banner.css'
import BotaoLoginCadastro from './components/login_botao/login_botao.jsx'
import { useNavigate } from "react-router-dom";

function Banner() {
    let navigate = useNavigate();

    return (
        <div className='banner' style={{marginLeft:'2vw', marginRight:'2vw'}}>
            <div style={{ display: "flex", alignItems: "center", cursor:'pointer' } } onClick={()=> navigate('/home')}>
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
                    <BotaoLoginCadastro acao="Entrar" />
                    <div style={{ marginLeft: '1vw' }} />
                    <BotaoLoginCadastro acao="Criar conta" />
                </div>
            </div>
        </div>
    )
}

export default Banner