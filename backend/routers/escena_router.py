from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from backend.database import get_session
from backend.gestor_cuento import GestorCuento
from backend.models.schemas import EscenaSchema

router = APIRouter(prefix="/escenas", tags=["Escenas"])


# Input: session asíncrona
# Funcion: retorna todas las escenas ordenadas por orden
# Output: lista de todas las escenas
@router.get("/", response_model=list[EscenaSchema])

async def obtener_todas(session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    return await gestor.cargar_escenas()

# Input: session asíncrona
# Funcion: retorna la primera escena del cuento según el orden 
# Output: primera escena
@router.get("/primera", response_model=EscenaSchema)

async def obtener_primera(session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    escena = await gestor.obtener_primera()
    
    if not escena:
        raise HTTPException(status_code=404, detail="No hay escenas")
    return escena

# Input: id y session asincronica
# Funcion: busca una escena específica por su id 
# Output: escena correspondiente al id o None si no existe
@router.get("/{id}", response_model=EscenaSchema)

async def obtener_por_id(id: int, session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    escena = await gestor.obtener_escena(id)
    if not escena:
        raise HTTPException(status_code=404, detail="Escena no encontrada")
    return escena

# Input: id_alternativa y session asincronica
# Funcion: carga la alternetiva que sigue en la siguiente escena
# Output: escena siguiente segun la alternativa elegida
@router.get("/alternativa/{id_alternativa}/siguiente", response_model=EscenaSchema)

async def resolver_alternativa(id_alternativa: int, session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    escena = await gestor.resolver_alternativa(id_alternativa)
    if not escena:
        raise HTTPException(status_code=404, detail="Escena no encontrada")
    return escena