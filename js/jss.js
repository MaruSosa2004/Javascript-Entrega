let bienvenido ="!!Bienvenidos a cakescool!!"
let torta = 100, chocolate = 200, vainilla = 100, crema = 300 
let suma = 0

let seleccion_productos

alert (bienvenido)

let pago = prompt ("Ingrese su metodo de pago")
console.log ("Metodo de pago:" + pago )

let cantidad_productos = parseInt ( prompt ("Ingrese la cantidad de productos que quiere a comprar (Maximo por persona de 5 unidades)"))
let i = 0
console.log ("Cantidad de productos en la lista:" + cantidad_productos)


function seleccion(){
    console.log("Producto seleccionado: " + seleccion_productos.toLowerCase() + " sumando " + suma + " con un total de " + i + " comprados")
}

function alerta () {
    alert ("Compra de : " + seleccion_productos +" cantidad en la lista: "+ i )
    }

while (i <  cantidad_productos || typeof(cantidad_productos) === String) {
    
    seleccion_productos = prompt("Ingrese los productos que desea comprar \n torta: 100 \n chocolate: 200 \n vainilla: 100 \n crema: 300") .toLowerCase()

    
    
    if(cantidad_productos > 5){cantidad_productos = 5}


    if(seleccion_productos == "torta"){
        suma += torta 
        i++  
        seleccion()
        alerta()
    }   
    else if(seleccion_productos == "chocolate"){
        suma += chocolate 
        i++ 
        seleccion()
        alerta()
    }
    else if(seleccion_productos == "vainilla"){
        suma += vainilla 
        i++
        seleccion()
        alerta()
    }
    else if(seleccion_productos == "crema"){
        suma += crema 
        i++
        seleccion()
        alerta()
    }
    
    else{console.log("No es un dato valido.")}
} 