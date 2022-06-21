import React from 'react'
import PaginaView from './components/pagina_view';
import ReadController from './read_controller';
import { useLocation, useParams } from "react-router-dom";
import './read.css';
import Pagina from '../../models/pagina_model';

function Read() {
    let { idHistoria, idPagina } = useParams();
    const location = useLocation();
    const { state } = location;
    const { historia } = state || {};

    const controller = new ReadController(historia);
    console.log('HISTORIA', historia)
    console.log('HISTORIA CONTROLLER', controller.historia)
    console.log('ID PAGINA', idPagina)
    controller.pagina = controller.historia.paginas.filter((pag) => pag.id.toString() === idPagina)[0]
    for (const pagina of controller.historia.paginas) {
        console.log(pagina.id)
    }
    console.log('id 0', controller.pagina)

    return (
        <div>
            <div className='areaLeitura'>
                <PaginaView controller={controller} />
            </div>
        </div>

    )
}

export default Read