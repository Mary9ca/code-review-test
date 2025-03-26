// Código con errores de buenas prácticas
function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getYear() - nacimiento.getYear();
    return edad;
}

console.log("Edad:", calcularEdad("2000-05-15"));
