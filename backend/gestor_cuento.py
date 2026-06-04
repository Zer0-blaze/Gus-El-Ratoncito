from sqlalchemy.ext.asyncio import AsyncSession
from backend.repositorios.escenas_repo import EscenaRepository
from backend.repositorios.alternativa_repo import AlternativaRepository

class GestorCuento:
    def __init__(self, session: AsyncSession):
        self.escena_repo = EscenaRepository(session)
        self.alternativa_repo = AlternativaRepository(session)

    async def cargar_escenas(self):
        return await self.escena_repo.obtener_todas()
    
    async def obtener_escena(self, id):
        return await self.escena_repo.obtener_por_id(id)
    
    async def resolver_alternativa(self, id_alternativa):
        return await self.alternativa_repo.obtener_siguiente(id_alternativa)
    
    async def obtener_primera(self):
        return await self.escena_repo.obtener_primera()