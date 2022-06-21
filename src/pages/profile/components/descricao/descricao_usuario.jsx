import React from 'react'
import './descricao_usuario.css'
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate, useParams } from 'react-router-dom'

function Descricao() {
    const { idUsuario } = useParams();
    const navigate = useNavigate();

    return (
        <div className='descricaoUsuario'>
            <div className='fotoDePerfilUsuario'>
                {idUsuario[0]}
            </div>
            <div className='nomeUsuario'>
                Saitama
            </div>
            <div className='botaoCriar' onClick={() => navigate("/create")}>
                <CreateIcon fontSize='large' />
                <div>Criar nova história</div>
            </div>
        </div>
    )
}

export default Descricao