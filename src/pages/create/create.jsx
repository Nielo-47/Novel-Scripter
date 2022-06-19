import React from 'react'
import Historia from '../../models/historia_model'
import AdicionarPagina from './components/adicionar_pagina/adicionar_pagina'
import AtributosHistoria from './components/atributos_historia/atrib_historia'
import CriacaoPagina from './components/criacao_pagina/criacao_pagina'
import ThumbPagina from './components/thumbnail/thumb_pagina'
import './create.css'

const Create = () => {
    const [historia, mudarHistoria] = React.useState(new Historia(20, null, null, null, null, []))
    const [idPaginaAtual, mudarIdPagina] = React.useState(null);
    const [editando, ativarEdicao] = React.useState(false);

    const salvarPagina = (novaPagina) => {
        if (idPaginaAtual === null) {
            historia.paginas.push(novaPagina);
            console.log('paginas', historia.paginas)
        }
        else {
            const idx = historia.paginas.findIndex((hist) => hist.id === idPaginaAtual)
            historia.paginas[idx] = novaPagina
        }

        ativarEdicao(false);
    }

    const removerPagina = (id) => {
        historia.paginas = historia.paginas.filter(pag => pag.id !== id)
        ativarEdicao(false);
        console.log('historia.paginas', historia.paginas)
    }

    function mudarPaginaAtual(novoId) {
        ativarEdicao(true)
        mudarIdPagina(novoId)
        console.log('idPaginaAtual ', idPaginaAtual)
    }

    function paginaAtual() {
        return idPaginaAtual === null ? null : historia.paginas.filter((pag) => pag.id === idPaginaAtual)[0]
    }

    function cancelarEdicao() {
        ativarEdicao(false);
    }

    return (
        <div>
            {
                editando
                    ? <div className='editandoPagina'>
                        <CriacaoPagina
                            cancelarEdicao={cancelarEdicao}
                            salvarPagina={salvarPagina}
                            removerPagina={removerPagina}
                            paginaAtual={paginaAtual()}
                            historia={historia} />
                    </div>
                    : <div className='areaCriacao'>
                        <AtributosHistoria historia={historia} />
                        <div className='selecaoPaginas'>
                            {historia.paginas.map((pag) =>
                                <ThumbPagina
                                    ativarEdicao={ativarEdicao}
                                    mudarPaginaAtual={mudarPaginaAtual}
                                    pagina={pag}
                                />
                            )}
                            <AdicionarPagina
                                ativarEdicao={ativarEdicao}
                                mudarPaginaAtual={mudarPaginaAtual}
                            />
                        </div>
                    </div>
            }
        </div>
    )
}

export default Create