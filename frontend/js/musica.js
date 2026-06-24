const audio = new Audio()
audio.loop = true
let pistaActual = ''

function inicializarAudio() {
    audio.play().catch(() => {})
}

function reproducirMusicaEscena(ordenEscena) {
    const mapaMusica = {
        1: '/assets/tranquila.mp3',
        2: '/assets/tranquila.mp3',
        3: '/assets/triste.mp3',
        4: '/assets/triste.mp3',
        5: '/assets/tranquila.mp3',
        6: '/assets/triste.mp3',
        7: '/assets/triste.mp3',
        8: '/assets/triste.mp3',
        9: '/assets/triste.mp3'
    }

    const nuevaRuta = mapaMusica[ordenEscena] || '/assets/tranquila.mp3'

    if (pistaActual !== nuevaRuta) {
        audio.src = nuevaRuta
        pistaActual = nuevaRuta
        audio.play().catch(() => {})
    } else {
        audio.play().catch(() => {})
    }
}

audio.volume = 0.5

document.addEventListener("DOMContentLoaded", () => {
    const volumenSlider = document.getElementById("volumen")
    const iconoVolumen = document.getElementById("icono-volumen")

    if (!volumenSlider || !iconoVolumen) return

    volumenSlider.addEventListener("input", () => {
        audio.volume = volumenSlider.value
        iconoVolumen.textContent = volumenSlider.value == 0 ? "🔇" : "🔊"
    })

    iconoVolumen.addEventListener("click", () => {
        if (audio.volume > 0) {
            audio.volume = 0
            volumenSlider.value = 0
            iconoVolumen.textContent = "🔇"
        } else {
            audio.volume = 0.25
            volumenSlider.value = 0.5
            iconoVolumen.textContent = "🔊"
        }
    })
})