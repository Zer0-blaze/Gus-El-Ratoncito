class APIClient {
    constructor() {
        this.baseUrl = ""
    }

    async fetchPrimera() {
        const escena = await fetch("/escenas/primera")
        const datos = await escena.json()
        return datos
    }

    async fetchEscena(id) {
        const escena = await fetch(`/escenas/${id}`)
        const datos = await escena.json()
        return datos
    }

    async fetchSiguiente(idAlternativa) {
        const escena = await fetch(`/escenas/alternativa/${idAlternativa}/siguiente`)
        const datos = await escena.json()
        return datos
    }
}