from pydantic import BaseModel
from typing import List, Optional

class AlternativaSchema(BaseModel):
    id: int
    texto_opcion: str
    imagen_url : Optional[str] = None
    id_escena_siguiente: int

    class Config:
        from_attributes = True

class EscenaSchema(BaseModel):
    id: int
    orden: int
    titulo: str
    texto: str
    imagen_url : Optional[str] = None
    alternativas: List[AlternativaSchema] = []
    
    class Config:
        from_attributes = True