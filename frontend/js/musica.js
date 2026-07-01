const audio = new Audio()
audio.loop = true
let pistaActual = ''
const VOLUMEN_DEFAULT = 0.15
const DURACION_FADE = 1500

const CAMBIOS_MUSICA = [
    {desde: 1, pista: '/assets/tranquila.mp3'},
    {desde: 3, pista: '/assets/triste.mp3'},
    {desde: 5, pista: '/assets/tranquila.mp3'},
    {desde: 6, pista: '/assets/triste.mp3'},
    {desde: 11, pista: '/assets/esperanza.mp3'},
    {desde: 15, pista: '/assets/triunfo.mp3'},
    {desde: 18, pista: '/assets/final.mp3'},
]

function obtenerPista(ordenEscena) {
    let pista = CAMBIOS_MUSICA[0].pista
    for (const cambio of CAMBIOS_MUSICA) {
        if (ordenEscena >= cambio.desde) pista = cambio.pista
    }
    return pista
}

function fadeTo(objetivo, duracion = DURACION_FADE) {
    const inicio = audio.volume
    const diferencia = objetivo - inicio
    const pasos = 30
    const intervalo = duracion / pasos
    let paso = 0

    const timer = setInterval(() => {
        paso++
        audio.volume = Math.min(1, Math.max(0, inicio + (diferencia * paso / pasos)))
        if (paso >= pasos) clearInterval(timer)
    }, intervalo)
}

function inicializarAudio() {
    audio.volume = 0
    audio.play().catch(() => {})
    fadeTo(VOLUMEN_DEFAULT)
}

function reproducirMusicaEscena(ordenEscena) {
    const nuevaRuta = obtenerPista(ordenEscena)

    if (pistaActual !== nuevaRuta) {
        fadeTo(0)
        setTimeout(() => {
            audio.src = nuevaRuta
            pistaActual = nuevaRuta
            audio.volume = 0
            audio.play().catch(() => {})
            fadeTo(VOLUMEN_DEFAULT)
        }, DURACION_FADE)
    } else {
        if (audio.paused) {
            audio.volume = 0
            audio.play().catch(() => {})
            fadeTo(VOLUMEN_DEFAULT)
        }
    }
}

audio.volume = 0

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
            audio.volume = VOLUMEN_DEFAULT
            volumenSlider.value = VOLUMEN_DEFAULT
            iconoVolumen.textContent = "🔊"
        }
    })
})