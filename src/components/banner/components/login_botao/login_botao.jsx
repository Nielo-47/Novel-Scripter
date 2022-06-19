import Modal from '@mui/material/Modal';
import './login_botao.css';
import React from 'react';
import LoginModal from '../login_modal/login_modal';




function BotaoLoginCadastro(props) {
    const [open, setOpen] = React.useState(false);
    const [tipoModal, mudarTipo] = React.useState(props.acao);
    const handleClose = () => { 
        setOpen(false); 
        mudarTipo(props.acao); 
    }

    const abrirCadastro = () => {
        handleClose();
        mudarTipo('Criar conta')
        setOpen(true);
    }

    return (
        <div>
            <div className='botao' onClick={setOpen} style={{ width: props.acao === 'Criar conta' ? '9vw' : '5vw' }}>{props.acao}</div>
            <Modal
                className='modal'
                open={open}
                onClose={handleClose}
            >
                <LoginModal abrirCadastro={abrirCadastro} fecharModal={handleClose} tipo={tipoModal === 'Criar conta' ? 'cadastro' : 'login'} />
            </Modal>
        </div>
    );
}

export default BotaoLoginCadastro;


