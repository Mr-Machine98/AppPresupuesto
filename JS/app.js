const ingresos = [
    new Ingreso('Sueldo', 3500000),
    new Ingreso('Venta zapatos', 150000)
];
const egresos = [
    new Egreso('Gastos Hogar', 1000000),
    new Egreso('Reparación moto', 420500)
];

const totalIngresos = () => {

    let total = 0;

    ingresos.forEach(ingreso => {
        total += ingreso._valor;
    });

    return total;

};

const totalEgresos = () => {

    let total = 0;

    egresos.forEach(egreso => {
        total += egreso._valor;
    });

    return total;

};

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() /  totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 2});
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-CO', {style: 'percent', minimumFractionDigits: 2});
};

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.getValor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn" onclick = "eliminarIngreso(${ingreso.getId})" >
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
            </div>
    </div>
    `;
    return ingresoHTML;
};

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.getId === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
};

const crearEgresosHTML = (egreso) => {
    let egresosHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.getDescripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.getValor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje( egreso.getValor / totalIngresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" onclick = "eliminarEngreso(${egreso.getId})">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresosHTML;
};

const eliminarEngreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.getId === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
};

const cargarEgresos = () => {
    let egresosHTML = '';
    egresos.forEach(egreso => egresosHTML += crearEgresosHTML(egreso));
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const cargarIngresos = () => {
    let ingresosHTML = '';
    ingresos.forEach( ingreso => ingresosHTML += crearIngresoHTML(ingreso));
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const agregarDato = () => {

    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if (descripcion.value !== '' && tipo.value !== '' && valor.value !== '') {
        if (tipo.value === 'ingreso') {
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        } else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }      
    }

    
};
