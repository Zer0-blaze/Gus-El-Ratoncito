import asyncio
import json
from backend.database import init_db, AsyncSessionLocal
from backend.models.models import Escena, Alternativa

async def poblar():
    with open("data/cuento.json", "r", encoding="utf-8") as f:
        datos = json.load(f)

    await init_db()
    async with AsyncSessionLocal() as session:
        for escena_datos in datos["escenas"]:
            session.add(Escena(**escena_datos))
        await session.commit()

        for alt_datos in datos["alternativas"]:
            session.add(Alternativa(**alt_datos))
        await session.commit()

if __name__ == "__main__":
    asyncio.run(poblar())