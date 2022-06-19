import React from 'react'
import "./historia_destaque.css"
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

function HistoriaDestaque() {
    let navigate = useNavigate();

    return (
        <div className='destaque'>
            <div className='historiaEmDestaque'>
                <div className='anuncioHistoriaEmDestaque'>
                    História em Destaque
                </div>
                <img
                    className='fotoDestaque'
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt='new'
                    onClick={() => {
                        navigate(`/read/idHistoria/1`);
                    }}
                />
            </div>
            <div >
                <div className='tituloHistoria' onClick={() => {
                    navigate(`/read/idHistoria/1`);
                }}>
                    O bichinho do Lago
                </div>
                <div className='descricaoHistoria'>
                    <div>Aventura / Drama</div>
                    <div>Bichinho do lago so queria paz no lago dele, quando....</div>
                    <div className='autorEAvaliacao'>
                        <div>Por: Saitama</div>
                        <div className='avaliacao'>
                            <StarIcon fontSize='large' color='yellow'/>
                            <StarIcon fontSize='large' color='yellow'/>
                            <StarIcon fontSize='large' color='yellow'/>
                            <StarIcon fontSize='large' color='yellow'/>
                            <StarIcon fontSize='large' color='yellow'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoriaDestaque