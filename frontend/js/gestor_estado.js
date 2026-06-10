
class gestor_estado{
    constructor(){
        this.escenaActual = null;
        this.historial = [];
    }

    _Vacia() {
        if (this.escenaActual==null) {
            return true;
        }
        else{
            return false;
        }
    }

    ActualizarEscena(escena) {
        if (this._Vacia()) {
            this.escenaActual=escena
        }
        else{
            this.historial.push(this.escenaActual) 
            this.escenaActual= escena
        }
    }

    reiniciar(){
        this.escenaActual = null;
        this.historial = [];
    }

    _PuedeRetroceder() {
    return this.historial.length > 0;
    }

    retroceder(){
        if (this._PuedeRetroceder()) {
            return this.historial.pop()
        }
        
    }

    getEscenaActual(){
        return this.escenaActual
    }
    
}
