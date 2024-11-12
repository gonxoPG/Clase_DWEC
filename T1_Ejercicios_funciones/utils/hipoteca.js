let precioCasa = Number(prompt("¿Cuál es el precio de la casa?"));
let prestamoBanco = Number(prompt("¿Cuánto dinero le vas a pedir al banco?"));
let aniosDevolucion = Number(prompt("¿En cuántos años los quieres devolver?"));
let interesPrestamo = Number(prompt("¿Qué interés se te va a aplicar?"));

calcularAmortizacion(precioCasa, prestamoBanco, aniosDevolucion, interesPrestamo);

function calcularAmortizacion (precioCasa, prestamoBanco, aniosDevolucion, interesPrestamo) {
    
    // meses según años
    const meses = aniosDevolucion * 12;

    // cantidad total con intereses
    const importeInteres = (prestamoBanco * interesPrestamo) / 100;
    let cantidadTotal = precioCasa + importeInteres;
    let cantidadPrestamo = prestamoBanco + importeInteres;

    // cuota mensual
    let cuotaMensual = (prestamoBanco + importeInteres) / meses;

    alert(`Vas a pagar una cantidad de ${cantidadTotal} ya con intereses en ${meses} mensualidades con un importe mensual de ${cuotaMensual.toFixed(2)}`);
    
    // cantidad restante después de 1 mes, 2 meses, 3 meses...
    
    for (let mes = 1; mes <= meses; mes++) {
        cantidadPrestamo -= cuotaMensual;
        
        console.log(`Pago correspondiente al mes ${mes} con una cantidad de ${cantidadPrestamo.toFixed(2)}`);
        
    }
}