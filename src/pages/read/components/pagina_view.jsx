import React from 'react'
import './pagina_view.css'
import { useNavigate } from "react-router-dom";

function Opcao({ cor, indice, controller }) {
    let navigate = useNavigate();
    let visualizacao = controller.visualizacao
    let corBackground = visualizacao === 'padrao' ? cor : 'rgba(255, 255, 255, 0.44)'
    let corBorda = visualizacao === 'padrao' ? 'white' : cor
    let corLetras = visualizacao === 'padrao' ? 'white' : 'black'
    const historia = controller.historia
    console.log(controller.pagina)

    return (
        <div
            className='opcao'
            style={{ backgroundColor: corBackground, borderColor: corBorda, color: corLetras, visibility: controller.pagina.textoOpcoes[indice] === null ? 'hidden' : 'visible' }}
            onClick={() => {
                if (controller.pagina.linkOpcoes[indice] !== -1) {
                    navigate(`/read/${controller.historia.titulo}/${controller.pagina.linkOpcoes[indice]}`,
                        {
                            state: {
                                historia,
                            }
                        });
                }
                else {
                    navigate(`/home`);
                }
            }}
        >
            {controller.pagina.textoOpcoes[indice]}
        </div>
    )
}

function Texto({ texto, visualizacao }) {
    let corLetras = visualizacao === 'padrao' ? 'white' : 'black'
    let corBackground = visualizacao === 'padrao' ? null : 'rgba(255, 255, 255, 0.44)'
    return (
        <div className='texto' style={{ color: corLetras, backgroundColor: corBackground, visibility: texto === null ? 'hidden' : 'visible' }}>
            {(texto ?? '').split('\n').map((line, idx) => <><div /><div key={idx} style={{ margin: '0.5vh' }}>{line}</div></>)}
        </div>
    )
}


function PaginaView({ controller }) {
    let pagina = controller.pagina
    console.log('pagina: ', pagina)
    const [visualizacao, mudarVisualizacao] = React.useState('padrao');

    function alternarVisualizacao() {
        controller.visualizacao = visualizacao === 'padrao' ? 'extendida' : 'padrao';
        mudarVisualizacao(controller.visualizacao);
    }

    return (
        <div>
            <div className='historia'>
                <Texto visualizacao={controller.visualizacao} texto={pagina.texto} />
                <div className='opcoes'>
                    <Opcao cor='#A00909' controller={controller} indice={0} />
                    <Opcao cor='#0DD615' controller={controller} indice={1} />
                    <Opcao cor='#247CFF' controller={controller} indice={2} />
                </div>
            </div>
            <img
                className={controller.visualizacao === 'padrao' ? 'imagem' : 'imagemExpandida'}
                src={pagina.imagem}
                alt='new'
                onClick={alternarVisualizacao}
                style={{ cursor: 'pointer', visibility: pagina.imagem === null ? 'hidden' : 'visible' }}
            /></div>
    )
}

export default PaginaView