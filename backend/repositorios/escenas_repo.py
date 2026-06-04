from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from backend.models.models import Escena

class EscenaRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    # Input: ninguno
    # Funcion: obtiene todas las escenas ordenadas por el campo orden
    # Output: lista de objetos Escena
    async def obtener_todas(self):
        result = await self.session.execute(
            select(Escena).options(selectinload(Escena.alternativas)).order_by(Escena.orden)
            )
        return result.scalars().all()
    
    # Input: id - identificador de la escena
    # Funcion: busca una escena especifica por su id incluyendo sus alternativas
    # Output: objeto Escena o None si no existe
    async def obtener_por_id(self, id):
        result = await self.session.execute(
            select(Escena).options(selectinload(Escena.alternativas)).where(Escena.id == id)
        )
        return result.scalar_one_or_none()
    
    # Input: ninguno
    # Funcion: obtiene la primera escena del cuento segun el campo orden
    # Output: objeto Escena o None si no hay escenas
    async def obtener_primera(self):
        result = await self.session.execute(
            select(Escena).options(selectinload(Escena.alternativas)).order_by(Escena.orden).limit(1)
        )
        return result.scalar_one_or_none()