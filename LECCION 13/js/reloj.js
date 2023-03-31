const mostrarReloj = ()=>{
    let fecha =new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${'hr'}:${'min'}:${'seg'}`;
}

const formatoHora = (hora) =>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);