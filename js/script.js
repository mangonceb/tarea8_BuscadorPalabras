//Declaración de variables
var parrafoOriginal = document.getElementById("texto").innerHTML;
var buscador = document.getElementById("buscador");
var registro=document.getElementById("registro");
var palabra;

//Esta función se encarga de reemplazar el div modificado del texto por el original sin búsquedas
function recargar() {
    document.getElementById("texto").innerHTML = parrafoOriginal;

}
//Evento que detecta cuando se ha pulsado enter en cualquier lado de la página y llama a buscar()
document.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        buscar();
    }
})

//Se activa con el boton de limpiar y borra todo el código html contenido dentro de la lista (sin borrar el <ul></ul>)
function limpiar() {
    registro.innerHTML = null;
}

//Funcion que permite buscar la palabra escrita
function buscar() {

    //Si la opción de refrescar (input radio) está activada, llama a la función refrescar
    if (document.getElementsByName("opcion")[0].checked) {
        recargar();
    }

    //Toma el valor de la palabra buscada
    palabra = buscador.value;

    //Este if detecta si no se ha escrito palabra o solo un espacio
    if (palabra == "" || palabra == " ") {
        alert("Ingresa algo que no sea un solo espacio");
    
    //Si se ha buscado algo válido, entra en el else
    } else {
        

        //Añade una línea de lista en el registro con la palabra buscada
        registro.innerHTML = registro.innerHTML.concat("<li>" + palabra + "</li>");

        /*
        Remplaza el texto existente donde queremos buscar por el mismo solo que sustituyendo
        la palabra buscada por la misma pero subrayada y negrita. 
        No me dejaba usar el replace de la forma /variable/ig así que he tenido que añadir una 
        expresión regular que sustituya a este /ig 
        */
        document.getElementById("texto").innerHTML = document.getElementById("texto").innerHTML.replace(new RegExp(palabra, 'ig'), "<b><u>" + palabra + "</u></b>");
    }



}