from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from backend.models.models import Alternativa, Escena

class AlternativaRepository:
    def __init__(self, session: AsyncSession):
        self.session = session
    

    # Input: id_escena - identificador de la escena origen
    # Funcion: obtiene todas las alternativas que pertenecen a una escena
    # Output: lista de objetos Alternativa
    async def obtener_por_escena(self, id_escena):
        result = await self.session.execute(
           select(Alternativa).where(Alternativa.id_escena_origen == id_escena)
           )
        
        return result.scalars().all()
    
    # Input: id_alternativa - identificador de la alternativa elegida
    # Funcion: busca la alternativa y retorna la escena siguiente correspondiente
    # Output: objeto Escena o None si no existe
    async def obtener_siguiente(self, id_alternativa):
        result = await self.session.execute(
            select(Alternativa).where(Alternativa.id == id_alternativa)
        )

        alternativa = result.scalar_one_or_none()

        if not alternativa:
            return None
        
        result_escena = await self.session.execute(
            select(Escena).options(selectinload(Escena.alternativas)).where(Escena.id == alternativa.id_escena_siguiente)
        )
        return result_escena.scalar_one_or_none()
