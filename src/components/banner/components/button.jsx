import './button.css';

function Botao(props) {
    return <div className='botao' style={{ width: props.acao === 'Criar conta' ? '9vw' : '5vw' }}>{props.acao}</div>;
}

export default Botao;


