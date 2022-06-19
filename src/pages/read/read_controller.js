import Historia from "../../models/historia_model"
import Pagina from "../../models/pagina_model"

class ReadController {
    constructor(historia) {
        this.visualizacao = 'padrao'
        this.historia = historia ?? new Historia(
            '20',
            'O Bichinho do Lago',
            'Drama',
            'Bichinho do lago so queria paz no lago dele, quando....',
            'Saitama',
            [
                new Pagina(
                    `O mar se revolta inesperadamente. Seu pequeno companheiro verde se espanta - “Acordamos ele! É o fim!”. Você se segura no barco para não ser jogado longe. Espinhos como rochas colossais emergem da água. Um dragão feroz e antigo levanta do seu sono e indaga:

        “O que fazes aqui, verme humano?”
        
        Qual é sua resposta?`,
                    ['“Fala tu vetim, seloko, pai ta on.”', '“Apenas de passagem, nobre dragão.”', 'Finge que nem viu.'],
                    [2, 2, 2],
                    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
                    '1'
                ),
                new Pagina(
                    `Você é atacado pelo dragão e morre de uma maneira horrível.`,
                    ['Finalizar aventura', null, null],
                    [-1, null, null],
                    null,
                    '2'
                ),
            ]
        )
        this.pagina = null;
    }
}

export default ReadController