/*
Agostina Rosano
Camada 2390
Trabajo Práctico 2 JavaScript
- Debera poder ingresar un dia de la semana
- Debera poder compararlo con todos los dias de la semana
- Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
- En caso de cnontrar el dia utilizar la sentencia break y terminar el for
*/

var arrayDias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
var semana = prompt('Inserte un dia', "lunes")
var datosDia = function(listadoDias, dia){
for (var i = 0; i < listadoDias.length; i++) {
    console.log(listadoDias[i])
    if(listadoDias[i] === dia){
    if (i < 4) {
        return "El dia es habil"
    }
    else {
       return "El dia es fin de semana"
    }
  }
}
}

var res = datosDia(arrayDias, semana)
console.log(res)
    
    

