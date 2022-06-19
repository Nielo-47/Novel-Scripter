import './login_modal.css'
import TextField from '@mui/material/TextField';
import React from 'react'
import { useNavigate } from "react-router-dom";

function Cabecalho() {
    return (
        <div className='tituloSite'>
            <div style={{ fontSize: '6vw' }}>
                NS
            </div>
            <div style={{ fontSize: '2vw' }}>
                Novel Scripter
            </div>
            <div style={{ fontSize: '1vw' }}>
                Sua plataforma de histórias interativas
            </div>
        </div>
    )
}

function Input(props) {
    return (<TextField
        type={props.tipo === 'senha' ? 'password' : 'text'}
        InputProps={{
            disableUnderline: true,
            inputProps: {
                style: { textAlign: "center", fontSize: 20, fontFamily: 'Indie Flower' },

            }
        }}
        fullWidth
        variant='filled'
        margin='none'
        sx={{
            input: { color: 'white', border: '1px solid #FEFEFE', borderRadius: '25px', padding: 1 },
        }} />
    );
}

function CamposLogin() {
    return (
        <div className='campos'>
            E-mail ou nome de usuário
            <Input />
            <div style={{ margin: '4%' }} />
            Senha
            <Input tipo='senha' />
        </div>
    )
}

function CamposCadastro() {
    return (
        <div className='campos'>
            Nome de usuário
            <Input />
            <div style={{ margin: '4%' }} />
            E-mail
            <Input />
            <div style={{ margin: '4%' }} />
            Senha
            <Input tipo='senha' />
            <div style={{ margin: '4%' }} />
            Confirmar senha
            <Input tipo='senha' />
            <div style={{ margin: '4%' }} />
        </div>
    )
}

function LoginModal(props) {
    const navigate = useNavigate();

    return (
        <div className={props.tipo === 'login' ? 'loginModal' : 'cadastroModal'}>
            <Cabecalho />
            {props.tipo === 'login' ? <CamposLogin /> : <CamposCadastro />}
            <div className='botaoConfirmar' style={{ cursor: 'pointer' }} onClick={() => {
                navigate(`/profile/idUsuario`);
                props.fecharModal();
            }}>
                {props.tipo === 'login' ? 'Entrar' : 'Cadastre-se'}
            </div>
            <div style={{ cursor: 'pointer' }} onClick={props.abrirCadastro}>
                {props.tipo === 'login' ? 'Não possui uma conta? CADASTRE-SE' : null}
            </div>

        </div>
    )
}

export default LoginModal