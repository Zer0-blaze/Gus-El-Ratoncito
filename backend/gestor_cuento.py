from sqlalchemy.ext.asyncio import AsyncSession
from backend.repositorios.escenas_repo import EscenaRepository
from backend.repositorios.alternativa_repo import AlternativaRepository

class GestorCuento:
    def __init__(self, session: AsyncSession):
        self.escena_repo = EscenaRepository(session)
        self.alternativa_repo = AlternativaRepository(session)

    # Input: ninguno
    # Funcion: retorna todas las escenas ordenadas por orden
    # Output: todas las escenas del repositorio
    async def cargar_escenas(self):
        return await self.escena_repo.obtener_todas()
    
    # Input: id - identificador de las escenas
    # Funcion: busca una escena específica por su id
    # Output: escena correspondiente al id o None si no existe 
    async def obtener_escena(self, id):
        return await self.escena_repo.obtener_por_id(id)
    
    # Input: id - indentificar de alternativas
    # Funcion: carga la alternetiva que sigue en la siguiente escena
    # Output: escena siguiente segun la alternativa elegida
    async def resolver_alternativa(self, id_alternativa):
        return await self.alternativa_repo.obtener_siguiente(id_alternativa)
    
    # Input: Ninguno
    # Funcion: Carga la primera escena del repositorio
    # Output: primera escena
    async def obtener_primera(self):
        return await self.escena_repo.obtener_primera()