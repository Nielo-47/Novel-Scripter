import React from 'react'
import Descricao from './components/descricao/descricao_usuario';
import SuasHistorias from './components/suas_historias/suas_historias';
import './profile.css'


function Profile() {
    return (
        <div className='perfil'>
            <div className='moldura'>
                <Descricao />
                <SuasHistorias />
            </div>
        </div>
    )
}

export default Profile