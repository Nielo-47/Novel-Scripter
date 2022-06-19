import { TextField } from '@mui/material'
import React from 'react'
import './atrib_historia.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function EditarDescricaoHist({ historia }) {
    return (
        <div style={{ alignItems: 'center', flexDirection: 'column', display: 'flex', fontSize: '110%', color: 'white', fontWeight: 'bold' }}>
            Descrição
            <TextField
                defaultValue={historia.descricao ?? ''}
                style={{ width: '28vw' }}
                InputProps={{
                    disableUnderline: true,
                    inputProps: {
                        maxLength: '120',
                        style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower', fontWeight: '500', color: 'white' },
                    }
                }}
                onChange={(event) => { historia.descricao = event.target.value; console.log(historia.descricao) }}
                variant='filled'
                margin='none'
                maxRows={4}
                multiline
            />
        </div>
    )
}


function AtributosHistoria({ historia, salvarHistoria }) {
    const generos = [
        {
            value: 'drama',
            label: 'Drama',
        },
        {
            value: 'aventura',
            label: 'Aventura',
        },
        {
            value: 'romance',
            label: 'Romance',
        },
        {
            value: 'suspense',
            label: 'Suspense',
        },
        {
            value: 'terror',
            label: 'Terror',
        },
        {
            value: 'comedia',
            label: 'Comédia',
        },
    ];
    console.log('GENERO', historia.genero)

    return (
        <div className='editarAtributosHistoria'>
            <div className='tituloEGenero'>
                <div className='atributoEditavel'>
                    <div>Título</div>
                    <TextField
                        defaultValue={historia.titulo ?? ''}
                        style={{ width: '25vw' }}
                        InputProps={{
                            disableUnderline: true,
                            inputProps: {
                                maxLength: '40',
                                style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower', fontWeight: '500' },
                            }
                        }}
                        variant='filled'
                        margin='none'
                        onChange={(event) => historia.titulo = event.target.value}
                        sx={{
                            input: { color: 'white', border: '1px solid #FEFEFE', borderRadius: '25px', padding: 1 },
                        }} />
                </div>
                <div style={{ marginTop: '1vh' }} />
                <div className='atributoEditavel'>
                    <div>Gênero</div>
                    <select
                        className='selecionarGenero'
                        onChange={(event) => historia.genero = event.target.value}
                    >
                        {generos.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div >
            <EditarDescricaoHist historia={historia} />
            <div className='botaoSalvarHistoria' onClick={() => {
                console.log('titulo', historia.titulo)
                console.log('descricao', historia.descricao)
                console.log('genero', historia.genero)
                console.log('paginas', historia.paginas)
                if (historia.titulo != null && historia.descricao != null && historia.genero != null && historia.paginas.length != 0) {
                    salvarHistoria();
                }
            }}>
                <CheckCircleIcon fontSize='large' style={{ color: 'white' }} />
                Salvar história
            </div>
        </div>
    )
}

export default AtributosHistoria