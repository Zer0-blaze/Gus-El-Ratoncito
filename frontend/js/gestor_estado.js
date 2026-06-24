
class gestor_estado{
    constructor(){
        this.escenaActual = null;
        this.historial = [];
    }

    // Input: ninguno
    // Funcion: comprueba si no hay ninguna escena cargada
    // Output: true si no hay escena, falso si si hay
    _Vacia() {
        if (this.escenaActual==null) {
            return true;
        }
        else{
            return false;
        }
    }

    // Input: escena
    // Funcion: si no hay escena asigna la escena. Si hay desde antes la pone en el historial y la reemplaza
    // Output: ninguno
    ActualizarEscena(escena) {
        if (this._Vacia()) {
            this.escenaActual=escena
        }
        else{
            this.historial.push(this.escenaActual) 
            this.escenaActual= escena
        }
    }

    // Input: ninguno
    // Funcion: Borra la escena y vacia el historial
    // Output: ninguno
    reiniciar(){
        this.escenaActual = null;
        this.historial = [];
    }

    // Input: ninguno
    // Funcion: comprueba si hay al menos una escena guardada en el historial
    // Output: true si el historial tiene escenas y falso si no
    _PuedeRetroceder() {
    return this.historial.length > 0;
    }

    // Input: ninguno
    // Funcion: extrae y devuelve la ultima escena del historial
    // Output: escena anteriro
    retroceder(){
        if (this._PuedeRetroceder()) {
            return this.historial.pop()
        }
        
    }

    // Input: ninguno
    // Funcion: devuelve la escena actual
    // Output: la escena actual
    getEscenaActual(){
        return this.escenaActual
    }
    
}
