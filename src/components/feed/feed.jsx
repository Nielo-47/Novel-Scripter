import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import './feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className='historiaEmDestaque'>
                <div className='anuncioHistoriaEmDestaque'>
                    História em Destaque
                </div>
                <img
                    className='fotoDestaque'
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt='new'
                />
            </div>
            <div >
                <div className='tituloHistoria'>
                    O bichinho do Lago
                </div>
                <div className='descricaoHistoria'>
                    <div>Aventura / Drama</div>
                    <div>Bichinho do lago so queria paz no lago dele, quando....</div>
                    <div className='autorEAvaliacao'>
                        <div>Por: Saitama</div>
                        <div className='avaliacao'>
                            <StarIcon fontSize='large' />
                            <StarIcon fontSize='large' />
                            <StarIcon fontSize='large' />
                            <StarIcon fontSize='large' />
                            <StarIcon fontSize='large' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed