import { TextField } from '@mui/material'
import React from 'react'
import "./modal_criar_imagem.css"

function ModalCriarImagem({ pagina, fecharModal }) {
    const [urlImagem, setImagem] = React.useState(null);

    return (
        <div className='modalCriarImagem'>
            Digite a URL da imagem
            <TextField
                defaultValue={pagina.imagem ?? ''}
                style={{ width: '25vw' }}
                InputProps={{
                    disableUnderline: true,
                    inputProps: {
                        style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower', fontWeight: '500' },
                    }
                }}
                variant='filled'
                margin='none'
                onChange={(event) => setImagem(event.target.value)}
                sx={{
                    input: { color: 'white', border: '1px solid #FEFEFE', borderRadius: '25px', padding: 1 },
                }} />
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
                <div className='botao' onClick={() => { fecharModal(); }}>
                    Cancelar
                </div>
                <div className='botao' onClick={() => { pagina.imagem = urlImagem; fecharModal(); }}>
                    Salvar
                </div>
            </div>
        </div>
    )
}

export default ModalCriarImagem