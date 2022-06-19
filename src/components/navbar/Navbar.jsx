import React from 'react'
import CaixaDeBusca from './components/botao_busca/caixa_busca'
import BotaoNav from './components/botao_nav/botao_nav'
import './navbar.css'

function Navbar() {

    return (
        <div className='navbar'>
            <BotaoNav nome='Home' />
            <BotaoNav nome='Categorias' />
            <BotaoNav nome='A-Z' />
            <BotaoNav nome='Sobre' />
            <CaixaDeBusca />
        </div>
    )
}

export default Navbar