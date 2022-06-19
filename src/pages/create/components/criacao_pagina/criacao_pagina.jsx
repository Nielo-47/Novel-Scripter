import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./criacao_pagina.css"
import ModalCriarOpcao from '../modal_criar_opcao/modal_criar_opcao';
import { Modal } from '@mui/material';
import Pagina from '../../../../models/pagina_model';
import ModalCriarTexto from '../modal_criar_texto/modal_criar_texto';
import ModalCriarImagem from '../modal_criar_imagem/modal_criar_imagem';


function OpcaoCriacao({ cor, pagina, indice, historia }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        pagina.linkOpcoes != null && pagina.linkOpcoes[indice] != null
            ? <div className='opcaoCriacao'
                style={{ borderColor: cor, backgroundColor: cor }}
                onClick={open ? null : setOpen}

            >
                {pagina.textoOpcoes[indice]}
                <Modal
                    className='modal'
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCriarOpcao pagina={pagina} indiceOpcao={indice} historia={historia} fecharModal={handleClose} />
                </Modal>
            </div >
            : <div
                className='opcaoVazioCriacao'
                onClick={open ? null : setOpen}
            >
                Adicionar opção
                <AddBoxIcon fontSize='large' style={{ color: '#22285F' }} />
                <Modal
                    className='modal'
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCriarOpcao pagina={pagina} indiceOpcao={indice} historia={historia} fecharModal={handleClose} />
                </Modal>
            </div>
    )
}

function TextoCriacao({ pagina }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    function dividirTexto() {
        const texto = pagina.texto
        const divisoes = texto.length / 56;
        let textoEmArray = [...texto]

        for (let i = 0; i <= divisoes; i++) {
            textoEmArray.splice(56 * i, 0, '\n');
        }

        return textoEmArray.join('')
    }

    return (
        pagina.texto != null
            ? <div className='texto' style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.44)', cursor: 'pointer', overflowY: 'scroll' }} onClick={open ? null : setOpen}>
                {dividirTexto().split('\n').map((line, idx) => <><div /><div key={idx} style={{ margin: '0.5vh' }}>{line}</div></>)}
                <Modal
                    className='modal'
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCriarTexto pagina={pagina} fecharModal={handleClose}></ModalCriarTexto>
                </Modal>
            </div>
            : <div className='textoVazioCriacao' onClick={open ? null : setOpen}>
                Adicionar texto
                <AddBoxIcon fontSize='large' style={{ color: '#22285F' }} />
                <Modal
                    className='modal'
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCriarTexto pagina={pagina} fecharModal={handleClose}></ModalCriarTexto>
                </Modal>
            </div>
    )
}

function ImagemCriacao({ pagina }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        pagina.imagem != null
            ? <div onClick={open ? null : setOpen}>
                <img
                    className='imagemCriacao'
                    src={pagina.imagem}
                    alt='new'

                /><Modal
                    className='modal'
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCriarImagem pagina={pagina} fecharModal={handleClose}></ModalCriarImagem>
                </Modal>
            </div>

            :
            <div className='imagemVazioCriacao' onClick={open ? null : setOpen}>
                Adicionar imagem
                <AddBoxIcon fontSize='large' style={{ color: '#22285F' }} />
                <Modal
                    className='modal'
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCriarImagem pagina={pagina} fecharModal={handleClose}></ModalCriarImagem>
                </Modal>
            </div>
    );
}

function CriacaoPagina({ cancelarEdicao, salvarPagina, removerPagina, paginaAtual, historia }) {
    console.log('Pagina criacao ', paginaAtual)
    const pagina = paginaAtual ?? new Pagina(null, [null, null, null], [null, null, null], null, historia.gerarNovoId());

    return (
        <div className='CriacaoPagina'>
            <div className='historiaCriacao'>
                <TextoCriacao pagina={pagina} />
                <div className='opcoesCriacao'>
                    <OpcaoCriacao cor='#A00909' pagina={pagina} indice={0} historia={historia} />
                    <OpcaoCriacao cor='#0DD615' pagina={pagina} indice={1} historia={historia} />
                    <OpcaoCriacao cor='#247CFF' pagina={pagina} indice={2} historia={historia} />
                </div>
            </div>
            <ImagemCriacao pagina={pagina} />
            {paginaAtual != null
                ?
                <div className='botaoCancelarEdicaoPagina' onClick={() => {
                    cancelarEdicao()
                }}> Cancelar </div>
                : null
            }
            <div className='botaoRemoverPagina' onClick={() => {
                removerPagina(pagina.id)
            }}>
                Remover página
            </div>
            <div className='botaoSalvarPagina' onClick={() => {
                if (pagina.imagem != null || pagina.imagem != null || pagina.textoOpcoes.filter((opcao) => opcao != null).length >= 1) {
                    salvarPagina(pagina)
                }
            }}>
                Salvar página
            </div>

        </div >
    )
}

export default CriacaoPagina