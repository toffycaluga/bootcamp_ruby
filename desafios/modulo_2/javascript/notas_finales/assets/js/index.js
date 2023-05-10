
const notas = (ramo) => {
    const notas = [];
    notas.push(prompt(`ingrese nota 1 [${ramo}]`));
    notas.push(prompt(`ingrese nota 2 [${ramo}]`));
    notas.push(prompt(`ingrese nota 3 [${ramo}]`));
    console.log(notas);
    const promedio = calcularPromedio(notas);
    instertarHtml(ramo, notas, promedio)
}

const instertarHtml = (ramo, notas, promedio) => {
    const newRamo = document.getElementById(ramo)
    console.log(ramo);
    newRamo.innerHTML = `
                    <th>${ramo.toUpperCase()}</th>
                    <th >${notas[0]}</th>
                    <th >${notas[1]}</th>
                    <th >${notas[2]}</th>
                    <th >${promedio.toFixed(2)}</th>
                    <td><button class="btn btn-primary" onclick="notas('${ramo}');">agregar notas</button></td>
    `
}

const calcularPromedio = (notas) => {
    let acum = 0
    notas.forEach(nota => acum += parseInt(nota))
    return acum / notas.length
}