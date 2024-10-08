import Footer from '../Footer/Footer'
import logoP from '../../assets/images/logo-pequeno.png'
import Pergunta from '../Pergunta/Pergunta'
import './Perguntas.css'
import { useState } from 'react'

function comparador() {
    return Math.random() - 0.5;
}

const questoes = [
    { questao: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
    { questao: 'O React é __', resposta: 'Uma biblioteca JavaScript para construção de interfaces' },
    { questao: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
    { questao: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
    { questao: 'O ReactDOM nos ajuda __ ', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
    { questao: 'Usamos o npm para __ ', resposta: 'gerenciar os pacotes necessários e suas dependências' },
    { questao: 'Usamos props para __ ', resposta: 'passar diferentes informações para componentes ' },
    { questao: 'Usamos estado (state) para __ ', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
].sort(comparador)


export default function Perguntas() {
    const [listaRespostas, setListaRespostas] = useState([]);
    const [concluido, setConcluido] = useState(false);

    return (
        <>
            <Logo />
            <div className='perguntas'>
                {questoes.map((questao, index) => <Pergunta
                    key={index}
                    index={index}
                    questao={questao.questao}
                    resposta={questao.resposta}
                    setListaRespostas={setListaRespostas}
                    listaRespostas={listaRespostas}
                    setConcluido={setConcluido}
                    qtdQuestoes={questoes.length}
                    qtdRespostas={listaRespostas.length} />)}
            </div>
            <Footer qtdQuestoes={questoes.length} listaRespostas={listaRespostas} concluido={concluido} />
        </>
    )
}

function Logo() {
    return (<header className='logo'>
        <img src={logoP} alt="logo" />
        <span>FlashRecall</span>
    </header>)
}

