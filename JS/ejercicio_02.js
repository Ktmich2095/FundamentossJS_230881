let miCliente;
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
miCliente = "Michelle";
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
miCliente = 123;
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log("El tipo de dato de la variable cliente es: ",typeof(esPremium));
console.log("Asignando el valor 'true' a la variable")
esPremium = true
console.log("El tipo de dato de la variable cliente es: ",typeof(esPremium));
console.log(`¿Es el cliente Premium?: ${esPremium}`)
esPremium=0
if(esPremium)
    console.log("El cliente pago por usar el servicio.");
else 
    console.log("El cliente que recibe los servicios gratuitos")
// 3. NUMBER
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transacción;
console.warn("---Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos.`);
console.log(`El importe total de la compra es:  ${(cantidad*costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_transacción=1500;
console.log(`Tu abono de ${monto_transacción} ha sido recibida, tu nuevo saldo es de: ${(saldo_cuenta+monto_transacción)}`)

//tipos de datos

//4. STRING
const alumno = "Michelle"
let producto;
console.warn("--- Tipo de Dato - STRING (cadenas de texto)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof producto}`)
producto = "Monitor 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof producto}`)
//manipulando los strings
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones 
    específicas cómo convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`)

/*5.  BIGINT (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o 
espaciales donde se requiere de una excelente precisión numérica
*/
console.warn("--- Tipo de Datos - BIGINT (Número Amplio)")
const numeroGrande = 1234567890
const numeroGrandeDos = 1234567890123456790
let numeroGrandeTres = 1234567890123456789001234567890
let numeroGrandeCuatro = 12345678901234567890012345678901234567890 
console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por 
            NUMBER, y su tipo de dato es: ${typeof numeroGrandeDos}`)   
        console.log(`El tercer experimento de un número grande es: ${numeroGrandeTres}, que ya no es soportado por 
            NUMBER, ya que hay perdida de presición y su tipo de dato es: ${typeof numeroGrandeTres}`)   
            console.log(`El cuarto experimento de un número grande es: ${numeroGrandeCuatro}, que ya no es soportado por 
            NUMBER, ya que hay perdida de presición y su tipo de dato es: ${typeof numeroGrandeCuatro}`)      
        
//Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar una letra "n" al final del número en la asignación de valor.                
console.log("Declaramos los valores númericos gran tamaño...")
numeroGrandeTres = BigInt(1234567890123456789001234567890);
numeroGrandeCuatro = 12345678901234567890012345678901234567890n  
console.log(`El segundo experimento de un número grande es: ${numeroGrandeTres}, que si es soportado por 
    NUMBER, y su tipo de dato es: ${typeof numeroGrandeTres}`)   
    console.log(`El segundo experimento de un número grande es: ${numeroGrandeCuatro}, que si es soportado por 
        NUMBER, y su tipo de dato es: ${typeof numeroGrandeCuatro}`)     
//Hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo Number
let numero = 238;
//Si intentamos realizar una operación matématica entre dos tipos de datos, obtendremos un error crítico de operación.
console.log(`El resultado de la operación de: numeroGrandeCuatro / numero es = a: ${numeroGrandeCuatro/BigInt(numero)}`)
//6. SYMBOL 
console.warn("--- Tipo de Dato - SYMBOL (Símbolo o forzar la Unicidad)")
const numero1 = 2;
const numero2 = 2.0; 
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol(2);
console.log("Prueba de comparación 1: ¿es 2 = 2.0?")
if(numero1 == numero2)
    console.log(`Se han comparado los valores de numero1 y numero2, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero1 y numero2, detectando que NO tienen el mismo valor.`)    
console.log("Prueba de comparación 2: ¿es 2 = '2'?")
if(numero1 == numero3)
    console.log(`Se han comparado los valores de numero1 y numero2, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero1 y numero2, detectando que NO tienen el mismo valor.`)    
console.log("Prueba de comparación 3: ¿es 2  estrictamente = '2'?")
if(numero1 === numero3)
    console.log(`Se han comparado los valores de numero1 y numero2, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero1 y numero2, detectando que NO tienen el mismo valor.`)    
    /*
    = asignación
    == igualdad de valor
    === igualdad estricta
    */
console.log("Prueba de comparación 4: ¿es 2 = \'2.0\'?")
if(numero1 === numero4)
    console.log(`Se han comparado los valores de numero1 y numero4, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero1 y numero4, detectando que NO tienen el mismo valor.`)   
console.log("Prueba de comparación 5: ¿es 2 === \'2.0\'?")
if(numero1 === numero4)
    console.log(`Se han comparado los valores de numero1 y numero4, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero1 y numero4, detectando que NO tienen el mismo valor.`) 
console.log("Prueba de comparación 6: ¿es 2 = Symbol(2)?")
if(numero1 === numero5)
    console.log(`Se han comparado los valores de numero1 y numero5, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero1 y numero5, detectando que NO tienen el mismo valor.`) 
console.log("Prueba de comparación 7: ¿es Symbol(2) = Symbol(\'2.0\')?")
if(numero5 === numero7)
    console.log(`Se han comparado los valores de numero5 y numero7, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero5 y numero7, detectando que NO tienen el mismo valor.`) 
console.log("Prueba de comparación 8: ¿es Symbol(2) = Symbol(2)")
if(numero5 === numero9)
    console.log(`Se han comparado los valores de numero 5 y numero9, confirmado que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero5 y numero9, detectando que NO tienen el mismo valor.`) 
//7.NULL
console.warn("--- Tipo de dato - NULL (Nulo o Vacío)")
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío, bajo su 
//consentimiento, a diferencia de UNDEFINED que es un valor desconocido asigando por DEFAULT por JS
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fechaUltimoPost;
//Supongamos que estamos programando una red social, tipo facebook, en la que parte de la información se publicarán en el perfil del usuario.
//Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicación web, puede explorar contenido de acceso publico.
//Y no existira información para mostrar
//En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numero telefónico o correo electronico y una contraseña
//que deberemos guardar en las variables previamente definidas
//Supongamos que el usuario: Michelle, con correo mich@gmail.com  desea ingresar con su contraseña: 2095
nombreUsuario = "mich@gmail.com"
passUsuario = 2095;
//En este momento de ejecución del sistema noo sabemos se género, ni su estatus de relación sentimental.
console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUsuario}`)
//Lo que prosigue es que el sistema contejara los datos ingresados con la bbase de datos y en caso de que los datos seas correctos  comenzará
//la sesión en la plataforma actualizando estos valores
//Dado que Michelle es del ggenero Femenino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto 
//genera la actualización de los valores de las variables
generoUsuario="F";
estatusRelacionSentimental=null;
console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del
    género ${generoUsuario} y que su estatus de relación es ${estatusRelacionSentimental} y su última publicación la realizó el: ${fechaUltimoPost}`)        
// const numero = "30"
// const numeroDos = 30
// console.log(typeof numero)
// console.log(typeof numeroDos)
//BigInt
// const numeroGrande = BigInt(9876212345678876543234234554567896)
// console.log(typeof numeroGrande)
// const numero = 10
// const numeroDos = 20 
// console.log(numero + Number(numeroGrande))
// const numero = "30"
// const numeroDos = 30
// console.log(typeof String(numeroDos))
// console.log(typeof Number(numero))
//Symbol
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
// console.log(primerSymbol === segundoSymbol)
// console.log(primerSymbol.valueOf())
// console.log(segundoSymbol.valueOf())
//null
// const descuento = null
// console.log(typeof descuento)