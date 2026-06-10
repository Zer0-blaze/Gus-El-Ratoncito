const apiClient = new APIClient()
const gestorEstado = new gestor_estado()
const gestorNavegacion = new gestor_navegacion(apiClient, gestorEstado)

document.addEventListener("DOMContentLoaded", async () => {
    await gestorNavegacion.NavegarPrimera()
    renderizar(gestorEstado.getEscenaActual())
})

function renderizar(escena){
    document.getElementById("escena-titulo").textContent = escena.titulo
    document.getElementById("escena-texto").textContent = escena.texto
    document.getElementById("escena-imagen").src = escena.imagen_url

    document.getElementById("alternativas").innerHTML = ""
        escena.alternativas.forEach(alternativas => {
        const boton = document.createElement("button")
        boton.textContent = alternativas.texto_opcion
        boton.addEventListener("click", async () => {
            await gestorNavegacion.navegarSiguiente(alternativas.id) 
            const hola = gestorEstado.getEscenaActual()
            renderizar(hola)
        })
        document.getElementById("alternativas").appendChild(boton)
    });

    
}

document.getElementById("btn-retroceder").addEventListener("click", async () =>{
    await gestorNavegacion.retroceder()
    renderizar(gestorEstado.getEscenaActual())
})

document.getElementById("btn-reiniciar").addEventListener("click", async () => {
    gestorEstado.reiniciar()
    await gestorNavegacion.NavegarPrimera()
    renderizar(gestorEstado.getEscenaActual())
})

