# AppPresupuesto
Este es un pequeño proyecto en donde realicé la funcionalidad con Javascript, el front me fue entregado y yo programé la funcionalidad.
Este es el enlace al sitio -> [Project AppPresupuesto](https://mr-machine98.github.io/AppPresupuesto/).

La página de incio debería verse de la siguiente forma:
> ![AppPresupuesto](https://github.com/Mr-Machine98/AppPresupuesto/blob/main/img/apppresupuesto.png)
> 
> Página sin CSS:
> 
> ![AppPresupuesto](https://github.com/Mr-Machine98/AppPresupuesto/blob/main/img/Screenshot%20from%202022-01-21%2011-51-51.png)

-------------------------------------------------------------

Lo que hay que tener claro es lo siguiente, entender con lo que se va a trabajar, entender el problema, sabemos que es un app de presupuesto y tanto los ingresos como los egresos compraten similitudes en cuanto valores y descripciones, la gran diferencia es, las operaciones que podemos realizar con estos datos (**Egreso**, **Ingreso**). Se determina que, un ingreso o egreso no es más que un número y nosotros decidimos que hacer con ellos.
Este es el diagrama para construir el programa:
> ![AppPresupuesto](https://github.com/Mr-Machine98/AppPresupuesto/blob/main/img/AppPresupuesto.jpg)

Explicaciones de la funciones principales:
- **cargarApp();** -> Función principal que se encarga de ejecutar funciones para los cálculos del presupuesto, cargar la lista de los ingresos e egresos.
- **cargarIngresos();** -> recorre el arr[] de ingresos, y crea un string grande que contiene etiquetas html para mostrar la lista de los ingresos.
- **cargarEgresos();** -> recorre el arr[] de egresos, y crea un string grande que contiene etiquetas html para mostrar la lista de los egresos.
- **cargarCabecero();** -> carga los cálculos del presupuesto.


