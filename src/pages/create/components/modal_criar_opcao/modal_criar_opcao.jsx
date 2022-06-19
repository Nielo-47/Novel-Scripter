import { TextField } from '@mui/material'
import React from 'react'
import FecharSalvarOpcao from './components/fechar_salvar/fechar_salvar_opcao'
import LinkFinalizarHistoria from './components/link_finalizar_historia/link_finalizar_historia'
import ThumbSelecionarLink from './components/thumb_selecionar_link/thumb_selecionar_link'
import './modal_criar_opcao.css'

function ModalCriarOpcao({ pagina, fecharModal, indiceOpcao, historia }) {
    let [textoOpcao, setTextoOpcao] = React.useState(pagina.textoOpcoes != null ? pagina.textoOpcoes[indiceOpcao] : null);
    let [paginaDestino, setPaginaDestino] = React.useState(pagina.linkOpcoes != null ? pagina.linkOpcoes[indiceOpcao] : null);

    const salvarOpcao = () => {
        if (paginaDestino === null || textoOpcao === null) {
            return;
        }
        pagina.linkOpcoes[indiceOpcao] = paginaDestino
        pagina.textoOpcoes[indiceOpcao] = textoOpcao
        fecharModal();
    }

    const removerOpcao = () => {
        pagina.linkOpcoes[indiceOpcao] = null
        pagina.textoOpcoes[indiceOpcao] = null
        fecharModal();
    }

    return (
        <div className='modalCriarOpcao'>
            Texto da opção
            <TextField
                style={{ width: '28vw' }}
                defaultValue={textoOpcao}
                InputProps={{
                    disableUnderline: true,
                    inputProps: {
                        maxLength: '45',
                        style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower', fontWeight: '500', },
                    }
                }}
                onChange={(event) => { setTextoOpcao(event.target.value); }}
                variant='filled'
                margin='none'
                sx={{
                    input: { color: 'white', border: '1px solid #FEFEFE', borderRadius: '25px', padding: 1 },
                }}
            />
            <div style={{ marginBottom: '3%' }} />
            Selecione a página de destino
            <div className='selecaoPaginaDestino'>
                {
                    historia.paginas != null
                        ? historia.paginas.map((pag) =>
                            <ThumbSelecionarLink paginaDestino={paginaDestino} pagina={pag} setPaginaDestino={setPaginaDestino} />
                        )
                        : null
                }
                <LinkFinalizarHistoria paginaDestino={paginaDestino} indicePagina={-1} setPaginaDestino={setPaginaDestino} />
            </div>
            <FecharSalvarOpcao
                opcaoNova={pagina.linkOpcoes[indiceOpcao] === null}
                podeSalvar={paginaDestino != null && textoOpcao != null}
                salvarOpcao={salvarOpcao}
                removerOpcao={removerOpcao}
                fecharModal={fecharModal} />
        </div>
    )
}

export default ModalCriarOpcao