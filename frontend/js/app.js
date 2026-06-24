const apiClient = new APIClient()
const gestorEstado = new gestor_estado()
const gestorNavegacion = new gestor_navegacion(apiClient, gestorEstado)
const renderizador = new renderizador_ui()

// Input: escena
// Funcion: llama al renderizador para mostrar la escena actual y al elegir una alternativa, navega a la siguiente escena y vuelve a renderizar
// Output: ninguno
function renderizar(escena) {
    if (!escena) return;
    
    renderizador.renderizar(escena, async (id) => {
        await gestorNavegacion.navegarSiguiente(id);
        renderizar(gestorEstado.getEscenaActual());
    });

    if (typeof reproducirMusicaEscena === "function") {
        reproducirMusicaEscena(escena.orden); 
    }
}

// Input: ninguno
// Funcion: oculta la pantalla de inicio, carga la primera escena y inicia la musica
// Output: ninguno
document.getElementById("btn-empezar").addEventListener("click", async () => {
    
    if (typeof inicializarAudio === "function") {
        inicializarAudio();
    }
    document.getElementById("pantalla-inicio").style.display = "none"
    document.getElementById("contenedor").style.display = "block"
    await gestorNavegacion.NavegarPrimera()
    renderizar(gestorEstado.getEscenaActual())
})

// Input: ninguno
// Funcion: retrocede a la escena anterior en el historial
// Output: ninguno
document.getElementById("btn-retroceder").addEventListener("click", async () => {
    await gestorNavegacion.retroceder()
    renderizar(gestorEstado.getEscenaActual())
})

// Input: ninguno
// Funcion: reinicia todo, carga la primera escena
// Output: ninguno
document.getElementById("btn-reiniciar").addEventListener("click", async () => {
    gestorEstado.reiniciar()
    await gestorNavegacion.NavegarPrimera()
    renderizar(gestorEstado.getEscenaActual())
})