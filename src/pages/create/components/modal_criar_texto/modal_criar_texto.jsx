import { TextField } from '@mui/material';
import React from 'react'
import './modal_criar_texto.css'

function ModalCriarTexto({ pagina, fecharModal }) {
    const [texto, editarTexto] = React.useState(null);

    return (
        <div className='modalCriarTexto'>
            Texto
            <TextField
                defaultValue={pagina.texto ?? ''}
                style={{ width: '90%' }}
                InputProps={{
                    disableUnderline: true,
                    inputProps: {
                        maxLength: '500',
                        style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower', fontWeight: '500', color: 'white' },
                    }
                }}
                onChange={(event) => { editarTexto(event.target.value); }}
                variant='filled'
                margin='none'
                minRows={8}
                maxRows={8}
                multiline
            />
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
                <div className='botao' onClick={() => { fecharModal(); }}>
                    Cancelar
                </div>
                <div className='botao' onClick={() => { pagina.texto = texto; fecharModal(); }}>
                    Salvar
                </div>
            </div>
        </div>
    )
}

export default ModalCriarTexto