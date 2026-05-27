## Tecnologías
- **Backend:** Python 3.11 + FastAPI + SQLAlchemy + SQLite
- **Frontend:** HTML + CSS + JavaScript vanilla
- **Servidor:** Uvicorn

## Requisitos
- Python 3.11 o superior
- pip

## Levantar el servidor

uvicorn main:app

## Pasos para clonar proyecto:
# 1. Crear y activar el entorno virtual
py -3.11 -m venv venv
venv\Scripts\activate

# 2. Instalar dependencias
pip install fastapi "uvicorn[standard]" sqlalchemy aiosqlite aiofiles

# 3. Poblar la base de datos
python seed.py

# 4. Levantar el servidor
uvicorn main:app --reload

# 5. Abrir en el navegador
http://localhost:8000

## Ver DB:

Instalar extensión: SQLite Viewer