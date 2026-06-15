const apiClient = new APIClient()
const gestorEstado = new gestor_estado()
const gestorNavegacion = new gestor_navegacion(apiClient, gestorEstado)
const renderizador = new renderizador_ui()

function renderizar(escena) {
    if (!escena) return
    renderizador.renderizar(escena, async (id) => {
        await gestorNavegacion.navegarSiguiente(id)
        renderizar(gestorEstado.getEscenaActual())
    })
}

document.getElementById("btn-empezar").addEventListener("click", async () => {
    document.getElementById("pantalla-inicio").style.display = "none"
    document.getElementById("contenedor").style.display = "block"
    await gestorNavegacion.NavegarPrimera()
    renderizar(gestorEstado.getEscenaActual())
})

document.getElementById("btn-retroceder").addEventListener("click", async () => {
    await gestorNavegacion.retroceder()
    renderizar(gestorEstado.getEscenaActual())
})

document.getElementById("btn-reiniciar").addEventListener("click", async () => {
    gestorEstado.reiniciar()
    await gestorNavegacion.NavegarPrimera()
    renderizar(gestorEstado.getEscenaActual())
})