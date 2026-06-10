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
        const hola = this.gestorEstado.retroceder()
        const adios = await this.apiClient.fetchEscena(hola)
        this.gestorEstado.ActualizarEscena(adios)
    }
}
