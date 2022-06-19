class Historia {
    constructor(id, titulo, genero, descricao, autor, paginas) {
        this.paginas = paginas
        this.titulo = titulo
        this.genero = genero
        this.descricao = descricao
        this.autor = autor
        this.id = id
    }

    gerarListaDeIds() {
        if (this.paginas.length === 0) {
            return [0];
        }
        else {
            let listaDeIds = [];
            for (const pagina of this.paginas) {
                listaDeIds.push(pagina.id)
            }
            return listaDeIds;
        }
    }

    gerarNovoId() {
        return Math.max.apply(null, this.gerarListaDeIds()) + 1
    }
}

export default Historia