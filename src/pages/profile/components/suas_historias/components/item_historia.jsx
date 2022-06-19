import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import './item_historia.css'

function ItemHistoria() {
    const navigate = useNavigate();

    return (
        <li className='historiaPerfil'>
            <img
                className='fotoHistoriaPerfil'
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt='new'
                onClick={() => {
                    navigate(`/read/idHistoria/0`);
                }}
            />

            <div >
                <div className='tituloHistoriaPerfil' onClick={() => {
                    navigate(`/read/idHistoria/0`);
                }}>
                    O bichinho do Lago
                </div>
                <div className='descricaoHistoriaPerfil'>
                    <div>Aventura / Drama</div>
                    <div>Bichinho do lago so queria paz no lago dele, quando....</div>
                    <div className='autorEAvaliacaoPerfil'>
                        <div>Por: Saitama</div>
                        <div className='avaliacaoPerfil'>
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small' />
                            <StarIcon fontSize='small' />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ItemHistoria