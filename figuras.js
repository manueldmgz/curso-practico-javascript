//Código del cuadrado
console.group("Cuadrados")
// Perimetro
function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`);
// Área
function areaCuadrado(lado){
    return lado * lado
}
// console.log(`El área del cuadrado es ${areaCuadrado}cm^2`);
console.groupEnd();


//Código del triángulo
console.group("Triángulos")
// Perimetro
function perimetroTriangulo (lado1, lado2, base){
    return (Number(lado1)) + (Number(lado2)) + (Number(base));
}
// console.log(`El perímetro del triángulo es ${perimetroTriangulo} cm`);
// Área
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log(`El área del triángulo es ${areaTriangulo} cm^2`);
console.groupEnd();


//Código del círculo
console.group("Círculos")
const PI = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
} 
// console.log(`El radio del círculo es ${radioCirculo} cm`);
// console.log(`El diámetro del círculo es ${diametroCirculo} cm`) ;
// console.log(`PI mide ${PI} cm`);
// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log(`La circunferencia del círculo es ${perimetroCirculo} cm`);
// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log(`El área del círculo es ${areaCirculo} cm`);
console.groupEnd();




// Interacción HTML

// Cuadrado 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
} 

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
} 


//Triángulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");

    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueLadoBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueLadoBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura");

    const valueLadoBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueLadoBase, valueAltura);
    alert(area);
}

//Círculo
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;
    
    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;
    
    const area = areaCirculo(valueRadio);
    alert(area);
}

// var node = document.getElementById('node-id');
// node.innerHTML('<p>some dynamic html</p>');