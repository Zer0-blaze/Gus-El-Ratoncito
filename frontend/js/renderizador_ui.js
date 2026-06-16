class renderizador_ui {
    constructor() {}

    renderizar(escena, onAlternativaClick){
        const titulo = document.getElementById("escena-titulo")
        titulo.textContent = escena.titulo
        titulo.style.display = escena.titulo ? "block" : "none"
        const contenedor = document.getElementById("escena-texto")
        contenedor.innerHTML = ""
        const lineas = escena.texto.split("\n")
        lineas.forEach(linea => {
            const p = document.createElement("p")
            p.textContent = linea
            p.className = linea.startsWith("—") ? "texto-personaje" : "texto-narrador"
            contenedor.appendChild(p)
        })

        const img = document.getElementById("escena-imagen")
        img.src = escena.imagen_url ?? ""
        img.style.display = escena.imagen_url ? "block" : "none"

        document.getElementById("alternativas").innerHTML = ""
        escena.alternativas.forEach(alternativa => {
            const boton = document.createElement("button")
            boton.textContent = alternativa.texto_opcion
            boton.addEventListener("click", () => onAlternativaClick(alternativa.id))
            document.getElementById("alternativas").appendChild(boton)
        })
    }
}