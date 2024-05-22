 function cuatro () {
    console.log("cuatro")
}

function tres () {
    console.log("tres")
    setTimeout(cuatro,2000)
}

function dos () {
    console.log("dos")
   setTimeout(tres,2000)
}

function uno (dos) {
    console.log("uno")
    setTimeout(dos,2000)
}

setTimeout(()=> uno(dos)
, 5000);

//callback 


const nombre=function (){
    console.log("nombre");
}
nombre()
const persona = ()=> console.log("Abdiel");
persona();

