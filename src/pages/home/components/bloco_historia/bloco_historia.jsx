import React from 'react'
import "./bloco_historia.css"
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

function BlocoHistoria() {
    const navigate = useNavigate();

       return (
        <div style={{margin:'auto', color:'white'}}>
            <div className='tituloHistoriaTimeline' onClick={() => {
                navigate(`/read/idHistoria/1`);
            }}>
                O bichinho do Lago
            </div>
            <div className='descricaoHistoriaTimeline'>
                <div style={{fontWeight:'600'}}>Aventura / Drama</div>
                <div >Bichinho do lago so queria paz no lago dele, quando....</div>
                <div className='autorEAvaliacaoTimeline'>
                    <div>Por: Saitama</div>
                    <div className='avaliacaoTimeline'>
                        <StarIcon fontSize='small' color='yellow' />
                        <StarIcon fontSize='small' color='yellow' />
                        <StarIcon fontSize='small' color='yellow' />
                        <StarIcon fontSize='small' color='yellow' />
                        <StarIcon fontSize='small' color='yellow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocoHistoria