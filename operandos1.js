// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE

function asignacionDeValoresSumar(){

    let x = 0;
    let y = 0;

    x +=3;

    return x === 3;
}


function asignacionDeValoresRestar(){

    let x = 0;
    let y = 0;

    x -= -5;

    return x === 5;
}

function asignacionDeValoresMultiplicacion(){

    let x = 7;
    let y = 5;

    x *= y;

    return x === 35;
}

function asignacionDeValoresResto(){

    let x = 3;
    let y = 2;

    x %= y;

    return x === 1;
}

function comparacionIgualdad(){

    let x = undefined;
    let y = null;
    let resultado = x == y;

    return resultado;
}

function comparacionIgualdadEstricto(){

    let x = undefined;
    let y = undefined;
    let resultado = x === y;

    return resultado;
}

function compararcionMayorIgual(){

    let x = 0;
    let y = 0;
    let resultado - x >= y;

    return resultado;
}


function incremento(){

    let x = 2;
    x++;
    x++;
    x++;


    return x === 5;
}


function decremento(){

    let x = 6;
    x--;

    return x === 5;
}


function igualdadIncremento(){

    let x = 4;
    ++x;

    return x++ === 5;
}

function comparacionAND(){
    var x = 2;
    var y = 3;
    var resultado = x>1 && y<4;

    return resultado;
}

function comparacionOR(){
    var x = 2;
    var y = 3;
    var resultado = x>1 || y<3;

    return resultado;
}

function comparacionNOT(){
    var x = 5;
    var resultado = ~x!==5;

    return resultado;
}