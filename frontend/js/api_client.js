class APIClient {
    constructor() {
        this.baseUrl = ""
    }

    // Input: ninguno
    // Funcion: obtiene los datos de la primera escena desde /escenas/primera
    // Output:datos de la primera escena
    async fetchPrimera() {
        const escena = await fetch("/escenas/primera")
        const datos = await escena.json()
        return datos
    }

    // Input: id
    // Funcion: obtiene los datos de una escena especifica desde /escenas/{id}
    // Output: datos de la escena correspondiente
    async fetchEscena(id) {
        const escena = await fetch(`/escenas/${id}`)
        const datos = await escena.json()
        return datos
    }

    // Input: idAlternativa
    // Funcion: obtiene los datos de la escena siguiente segun la alternativa elegida desde /escenas/alternativa/{idAlternativa}/siguiente
    // Output: datos de la escena siguiente
    async fetchSiguiente(idAlternativa) {
        const escena = await fetch(`/escenas/alternativa/${idAlternativa}/siguiente`)
        const datos = await escena.json()
        return datos
    }
}