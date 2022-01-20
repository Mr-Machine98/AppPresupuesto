class Egreso extends Dato{
    static contadorEgreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorEgreso;
    }
    get getId(){
        return this._id;
    }
}