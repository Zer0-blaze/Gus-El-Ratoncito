class APIClient{
    constructor(){
        this.baseUrl = "http://localhost:8000"
    }

    async fetchPrimera(){
        const escena = await fetch("http://localhost:8000/escenas/primera")
        const datos = await escena.json()
        return datos
    }

    async fetchEscena(id){
        const escena = await fetch(`http://localhost:8000/escenas/${id}`)
        const datos = await escena.json()
        return datos
    }

    async fetchSiguiente(idAlternativa){
        const escena = await fetch(`http://localhost:8000/escenas/alternativa/${idAlternativa}/siguiente`)
        const datos = await escena.json()
        return datos
    }

    
}