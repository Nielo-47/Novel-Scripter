import React from 'react'
import PaginaView from './components/pagina_view';
import ReadController from './read_controller';
import { useParams } from "react-router-dom";
import './read.css';
import Pagina from '../../models/pagina_model';


function Read() {
    let { idHistoria, idPagina } = useParams();
    const controller = new ReadController(idHistoria);

    console.log(idPagina)

    const textoOpcoes = [
        '“Fala tu vetim, seloko, pai ta on.”',
        '“Apenas de passagem, nobre dragão.”',
        'Finge que nem viu.']
    const linksOpcoes = [2, 3, 4]
    const texto = `O mar se revolta inesperadamente. Seu pequeno companheiro verde se espanta - “Acordamos ele! É o fim!”. Você se segura no barco para não ser jogado longe. Espinhos como rochas colossais emergem da água. Um dragão feroz e antigo levanta do seu sono e indaga:

    “O que fazes aqui, verme humano?”
    
    Qual é sua resposta?`
    const imagem = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"

    controller.pagina = idPagina === '2' ? new Pagina("AAAAAAAAAAAAA", textoOpcoes, linksOpcoes, imagem) : new Pagina(texto, textoOpcoes, linksOpcoes, imagem)

    return (
        <div>
            <div className='areaLeitura'>
                <PaginaView controller={controller} />
            </div>
        </div>

    )
}

export default Read