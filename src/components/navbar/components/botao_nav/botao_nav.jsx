import React from 'react'
import './botao_nav.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function icone(nome) {
    switch (nome) {
        case 'Home':
            return <HomeIcon fontSize='large'/>;
        case 'Categorias':
            return <LibraryBooksIcon fontSize='large'/>;
        case 'A-Z':
            return <SortByAlphaIcon fontSize='large'/>;
        default:
            return <TipsAndUpdatesIcon fontSize='large'/>;
    }
}

function BotaoNav(props) {
    return (
        <div className='botaoNav'>{icone(props.nome)} {props.nome}</div>
    )
}

export default BotaoNav