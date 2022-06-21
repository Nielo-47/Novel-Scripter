import Historia from "../../models/historia_model"
import Pagina from "../../models/pagina_model"

class ReadController {
    constructor(historia) {
        this.visualizacao = 'padrao'
        this.historia = (historia == null || historia == undefined) ? new Historia(
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
                    "https://c.wallhere.com/photos/7e/fa/dragon_knight_art_boat-997524.jpg!d",
                    '1'
                ),
                new Pagina(
                    `Você é atacado pelo dragão e morre de uma maneira horrível.`,
                    ['Finalizar aventura', null, null],
                    [-1, null, null],
                    "http://wallpapers.net/web/wallpapers/sea-monster-attacks-boathd-wallpaper/thumbnail/lg.png",
                    '2'
                ),
            ]
        ) : historia;

        this.pagina = null;
    }
}

export default ReadController