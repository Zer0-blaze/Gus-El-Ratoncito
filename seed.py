import asyncio
from backend.database import init_db, AsyncSessionLocal
from backend.models.models import Escena, Alternativa

escenas_data = [
    {"orden": 1, "titulo": "Gus y su sueño", "texto": "Había una vez..."},
    {"orden": 2, "titulo": "Gus y su sueño", "texto": "Un Raton"}
]

alternativas_data = [
    {"id_escena_origen": 1, "texto_opcion": "...", "id_escena_siguiente": 2}
]

#Funcion para ver si la base de datos funciona

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
    print("Base de datos poblada")

if __name__ == "__main__":
    asyncio.run(poblar())