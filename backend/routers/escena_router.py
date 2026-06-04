from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from backend.database import get_session
from backend.gestor_cuento import GestorCuento
from backend.models.schemas import EscenaSchema

router = APIRouter(prefix="/escenas", tags=["Escenas"])

@router.get("/", response_model=list[EscenaSchema])

async def obtener_todas(session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    return await gestor.cargar_escenas()

@router.get("/primera", response_model=EscenaSchema)

async def obtener_primera(session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    escena = await gestor.obtener_primera()
    
    if not escena:
        raise HTTPException(status_code=404, detail="No hay escenas")
    return escena

@router.get("/{id}", response_model=EscenaSchema)

async def obtener_por_id(id: int, session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    escena = await gestor.obtener_escena(id)
    if not escena:
        raise HTTPException(status_code=404, detail="Escena no encontrada")
    return escena

@router.get("/alternativa/{id_alternativa}/siguiente", response_model=EscenaSchema)

async def resolver_alternativa(id_alternativa: int, session: AsyncSession = Depends(get_session)):
    gestor = GestorCuento(session)
    escena = await gestor.resolver_alternativa(id_alternativa)
    if not escena:
        raise HTTPException(status_code=404, detail="Escena no encontrada")
    return escena