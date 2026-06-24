class gestor_navegacion{
    constructor(apiClient, gestorEstado){
        this.apiClient=apiClient
        this.gestorEstado=gestorEstado
    }

    // Input: ninguno
    // Funcion: obtiene la primera escena y actualiza
    // Output: ninguno
    async NavegarPrimera(){
        const hola = await this.apiClient.fetchPrimera()
        this.gestorEstado.ActualizarEscena(hola)
    }

    // Input: idAlternativa
    // Funcion: obtiene la escena siguiente según la alternativa y actualiza
    // Output: ninguno
    async navegarSiguiente(idAlternativa){
        const adios = await this.apiClient.fetchSiguiente(idAlternativa)
        this.gestorEstado.ActualizarEscena(adios)
    }

    // Input: ninguno
    // Funcion: reemplaza la escena actual por la anterior
    // Output: ninguno
    async retroceder(){
        const escenaAnterior = this.gestorEstado.retroceder()
        if (escenaAnterior) {
            this.gestorEstado.escenaActual = escenaAnterior
        }
    }
}
