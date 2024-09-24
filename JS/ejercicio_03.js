// //objetos

// const productoUno = {
//     Nombre: "Tablet",
//     Marca: "Mac",
//     Modelo: "iPad",
//     Venta: 222.12,
//     sku: Symbol("123na9"),
//     Colores:["Blanca", "Gris","Rosa","Azul"]
// }

// //imprimir el objeto
// console.warn("--- OBJETO---");
// console.log(productoUno);

// //Los objetos también pueden representarse en formato de tabla utilizando la función console.table
// console.table(productoUno);
// console.log(productoUno,Colores);
// console.log(productoUno,Venta);

// //Acceder a las propiedades de un objeto
// console.warn("Leyendo las propiedades de un objeto y sus tipos de datos\n")
// console.log(`Nombre del producto: ${producto,Nombre} que es del tipo: ${typeof(productoUno,Nombre)}`)

// const producto = {
//     nombre : "tablet", 
//     precio : 300,
//     disponible : true
// }

// console.log(producto)
// console.table(producto)

// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.disponible)

// //Destructuring
// const { nombre,precio,disponible } = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// //Object literal enhacement
// const autenticado = true
// const usuario = "Michelle"

// const nuevoObjeto = {
//     autenticado : autenticado,
//     usuario : usuario
// }
// console.table(nuevoObjeto)

const bg= "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console= `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 05: Repaso de Objetos en JavaScript");

//Variables independientes
console.log("%c1.- Variables independientes", style_console);


//Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre= "Computadora\"";
let Producto_Marca= "ASUS";
let Producto_Modelo= "ASUS Zenbook";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W");
let Producto_Stock=15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias=["Electrónicos", "Computación"];


//accedemos a los valores actuales de las características del producto de manera independiente 

console.log(`Los datos del PRODUCTO son: \n Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorías: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

    
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

//ahora la declaramos como un objeto
console.log("%c2.- Objeto", style_console)

let Producto=
{
    Nombre: "celular",
    Marca: "iPhone",
    Modelo: "iPhone 14",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "",
    Barcode: null,
    Categorias: ["electronica", "telefonos"]
}

//Ahora leemos el objeto completo

console.table(Producto);

//Para acceder a las propiedades del objeto utilizamos un "," y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)

if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} unidades disponibles.`)



//Desestructuración de objetos.
console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2=
{
    Clave: 316,
    Nombre: "Lentes para Sol",
    Marca: "Oakley",
    Modelo: "QNTM Kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "009481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRe.png",
    Barcode: 888392491626 ,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador={
    Clave: 3216,
    Nombre: "Mich",
    Apellidos: "Otero",
    Tipo: "Fugaz",
    Correo: "2095@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido={
    Producto_Id: 316,
    Comprador_clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de compra",
    TipoPago: "Tarjeta de Crédito"
}

//En base de a los 3 objetos necesitamos calcular el costo de la compra y si nos alcanza a favor del cliente
let{Precio: Producto_Precio2}=Producto2; 
let{Cantidad: Pedido_Cantidad}= Pedido;
let{SaldoActual: Cliente_SaldoActual}= Comprador;
let Costo_Compra= Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${(Costo_Compra)}`)

if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")




//Actualizar el valor de los objetos

console.log("%c4.- Actualización de los valores de las propiedades de un objeto",style_console);
console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
//Connvierte el objeto de una cadena para evitar problemas con la referencia 

