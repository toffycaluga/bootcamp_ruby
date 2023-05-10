
// const nombre = document.getElementById("nombre");
// const apellido = document.getElementById("apellido");
// const profesion = document.getElementById("profesion");
// const salario = document.getElementById("salario");
const data = document.getElementById("new-data");
let count = 1

const newData = () => {
    const nombre = prompt("ingrese un nombre")
    const apellido = prompt("ingrese un apellido")
    const profesion = prompt("ingrese una profesion")
    const salario = prompt("ingrese un salario")
    data.innerHTML += `
        <tr>
            <th id='nombre-${count}'>${nombre}</th>
            <th id="apellido-${count}">${apellido}</th>
            <th id="profesion-${count}">${profesion}</th>
            <th id="salario-${count}">${salario}</th>
        </tr>
    `

    count++
    return alert("datos aregados con exito")
}