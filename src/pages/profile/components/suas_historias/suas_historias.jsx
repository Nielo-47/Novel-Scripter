import React from 'react'
import "./suas_historias.css"
import ItemHistoria from './components/item_historia'

function SuasHistorias() {
    return (
        <div className='suasHistorias'>
            <div className='apresentacao'>
                Suas Histórias
            </div>
            <ul className='listaHistorias'>
                <ItemHistoria />
                <ItemHistoria />
                <ItemHistoria />
                <ItemHistoria />
                <ItemHistoria />
            </ul>
        </div>
    )
}

export default SuasHistorias