import React from 'react'
import './fechar_salvar_opcao.css'

function FecharSalvarOpcao({ opcaoNova, podeSalvar, salvarOpcao, removerOpcao, fecharModal }) {
    return (
        <div className='fecharSalvarOpcao'>
            <div className='botao' onClick={fecharModal}>
                Cancelar
            </div>
            {opcaoNova
                ? null
                : <div className='botao' onClick={removerOpcao} style={{ marginLeft: '2%' }}>Remover</div>}

            {podeSalvar
                ? <div className='botao' onClick={salvarOpcao} style={{ marginLeft: '2%' }}>Salvar</div>
                : null}

        </div>
    )
}

export default FecharSalvarOpcao