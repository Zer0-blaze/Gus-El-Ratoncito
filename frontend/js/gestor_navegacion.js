class gestor_navegacion{
    constructor(apiClient, gestorEstado){
        this.apiClient=apiClient
        this.gestorEstado=gestorEstado
    }

    async NavegarPrimera(){
        const hola = await this.apiClient.fetchPrimera()
        this.gestorEstado.ActualizarEscena(hola)
    }

    async navegarSiguiente(idAlternativa){
        const adios = await this.apiClient.fetchSiguiente(idAlternativa)
        this.gestorEstado.ActualizarEscena(adios)
    }

    async retroceder(){
        const escenaAnterior = this.gestorEstado.retroceder()
        if (escenaAnterior) {
            this.gestorEstado.escenaActual = escenaAnterior
        }
    }
}
