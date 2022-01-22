class Contacto {
	constructor(nombre, email, telefono, edad) {
		this.nombre = nombre
		this.email = email
		this.telefono = telefono
		this.edad = edad
    }​
	agendar() {
		console.log("El contacto " + this.nombre + " ha sido agendado")
	}​
	validar() {
		let valido = true
		if (this.nombre.length < 2) {
			valido = false
		} else if (this.email.length < 2) {
			valido = false
		} else if (this.telefono.length < 2) {
			valido = false
		} else if (this.mensaje.length < 2) {
			valido = false
		}​
		return valido
        }
    }​
        while (true) {
	const contacto1 = new Contacto(
		prompt("Nombre: "),
		prompt("Email: "),
		prompt("Telefono: "),
		prompt("Relacion: ")
	)
	let crear = prompt("ingresar otro?").toLowerCase()​
	if (crear == "si") {
		continue
	} else {
		break
	}
}