from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from contextlib import asynccontextmanager
from backend.database import init_db
from backend.routers.escena_router import router as escena_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

app = FastAPI (lifespan = lifespan)
app.include_router(escena_router)

app.mount("/css", StaticFiles(directory="frontend/css"), name="css")
app.mount("/js", StaticFiles(directory="frontend/js"), name="js")
app.mount("/images", StaticFiles(directory="frontend/images"), name="images")


@app.get("/")
def inicio():
    return FileResponse("frontend/index.html")

