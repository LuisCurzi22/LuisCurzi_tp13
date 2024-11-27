let movimientos = [100, -100, 50, 80, -200, -300, 700];

let cuenta = 0;
let depositos = 0;
let retiros = 0;

function totalMovimientos(mov) {

    for (let i = 0; i < movimientos.length; i++) {

        cuenta += movimientos[i];

        if (movimientos[i] > 0) {
            depositos += movimientos[i];
        } else if (movimientos[i] < 0) {
            retiros += movimientos[i];
        }
    }

    return `El monto total de los depositos es de: ${ depositos }
            El monto total de los retiros es de: ${ retiros }
            Por lo tanto, su saldo actual en la cuenta es de: ${ cuenta } `;
}

function calcularBalance(nombre, apellido, mov){

    balance = totalMovimientos
    nombre = nombre;
    apellido = apellido;

    return `
            Estimada ${ nombre } ${ apellido }
            ${ balance}`;

}

//console.log(totalMovimientos(movimientos));
//|console.log(calcularBalance("Gloria", "Medina", movimientos));

module.exports = calcularBalance