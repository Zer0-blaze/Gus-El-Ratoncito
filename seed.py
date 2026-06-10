import asyncio
from backend.database import init_db, AsyncSessionLocal
from backend.models.models import Escena, Alternativa

escenas_data = [
    {
        "orden": 0,
        "titulo": "Gus el Ratoncito Bailarin",
        "texto": "Gus el Ratoncito Bailarin"
    },
    {
        "orden": 1,
        "titulo": "Gus",
        "texto": "Había una vez, en un pequeño bosque, un pequeño ratoncito llamado Gus. Era un ratón muy especial, porque veía el mundo en colores muy brillantes y hermosos. Cada mañana, cuando Gus salía de su casa, veía las flores de colores, un cielo celeste con nubes y las hojas verdes relucientes. ¡Gus amaba su mundo colorido!"
    },
    {
        "orden": 2,
        "titulo": "La meta de Gus",
        "texto": "Un día, Gus se puso una meta, quería ser el ganador de un concurso de baile, que se hacía cada año en el bosque. Día tras día bailaba su canción favorita, bailaba muchas horas todos los días y soñaba con poder ganar el trofeo del mejor bailarín. Sin embargo, las cosas no salían como él esperaba."
    },
    {
        "orden": 3,
        "titulo": "Practica",
        "texto": "Algunos pasos de baile no le salían bien, se caía y por más que trataba no podía hacerlos como él quería. Esto le daba rabia y ganas de llorar. -Tengo que lograr hacer este paso o nunca ganaré el concurso- Decía con los ojos llorosos."
    },
    {
        "orden": 4,
        "titulo": "Gus sigue adelante",
        "texto": "A pesar de los obstáculos, Gus continuó practicando..."
    },
    {
        "orden": 5,
        "titulo": "Gus se rinde",
        "texto": "Gus decidió no seguir practicando y no fue al concurso..."
    }
]

alternativas_data = [
    {
        "id_escena_origen": 3,
        "texto_opcion": "Seguir practicando",
        "id_escena_siguiente": 4
    },
    {
        "id_escena_origen": 3,
        "texto_opcion": "Rendirse",
        "id_escena_siguiente": 5
    }
]

async def poblar():
    await init_db()
    async with AsyncSessionLocal() as session:
        for datos in escenas_data:
            escena = Escena(**datos)
            session.add(escena)
        await session.commit()

        for datos in alternativas_data:
            alternativa = Alternativa(**datos)
            session.add(alternativa)
        await session.commit()

if __name__ == "__main__":
    asyncio.run(poblar())