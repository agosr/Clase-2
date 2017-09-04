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
    
    

