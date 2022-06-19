import React from 'react'
import './botao_nav.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useNavigate } from "react-router-dom";


function BotaoNav(props) {
    let navigate = useNavigate();
    let icone, destino = null;

    switch (props.nome) {
        case 'Home':
            icone = <HomeIcon fontSize='large' />;
            destino = '/home';
            break;
        case 'Categorias':
            icone = <LibraryBooksIcon fontSize='large' />;
            destino = "/home"
            break;
        case 'A-Z':
            icone = <SortByAlphaIcon fontSize='large' />;
            destino = "/home"
            break;
        default:
            icone = <TipsAndUpdatesIcon fontSize='large' />;
            destino = "/home"
            break;
    }

    return (
        <div
            className='botaoNav'
            onClick={() => {
                navigate(destino);
            }}>

            {icone} {props.nome}

        </div>
    )
}

export default BotaoNav