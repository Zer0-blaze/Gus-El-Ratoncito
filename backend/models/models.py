from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()

class Escena(Base):
    __tablename__ = "escenas"

    id = Column(Integer, primary_key = True, index = True)
    orden = Column(Integer, nullable = False)
    titulo = Column(String, nullable = False)
    texto = Column(String, nullable = False)
    imagen_url= Column(String)
    alternativas = relationship("Alternativa", foreign_keys="[Alternativa.id_escena_origen]", back_populates="escena_origen")

class Alternativa(Base):
    __tablename__ = "alternativas"

    id = Column(Integer, primary_key = True, index = True)
    id_escena_origen = Column(Integer, ForeignKey("escenas.id"))
    texto_opcion = Column(String, nullable = False)
    imagen_url = Column(String)
    id_escena_siguiente = Column(Integer, ForeignKey("escenas.id"))
    escena_origen = relationship("Escena", foreign_keys=[id_escena_origen], back_populates="alternativas")
    escena_siguiente = relationship("Escena", foreign_keys=[id_escena_siguiente])

