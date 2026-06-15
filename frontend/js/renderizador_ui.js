class renderizador_ui {
    constructor() {}

    renderizar(escena, onAlternativaClick) {
        document.getElementById("escena-titulo").textContent = escena.titulo
        document.getElementById("escena-texto").textContent = escena.texto
        document.getElementById("escena-imagen").src = escena.imagen_url ?? ""

        document.getElementById("alternativas").innerHTML = ""
        escena.alternativas.forEach(alternativa => {
            const boton = document.createElement("button")
            boton.textContent = alternativa.texto_opcion
            boton.addEventListener("click", () => onAlternativaClick(alternativa.id))
            document.getElementById("alternativas").appendChild(boton)
        })
    }
}