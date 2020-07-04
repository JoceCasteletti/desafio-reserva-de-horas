
const validateForm = () => {
  let valid = true;

  let name = document.getElementById('name');
  let lastName = document.getElementById('lastName');
  let rut = document.getElementById('rut');
  let age = document.getElementById('age');
  let email = document.getElementById('email');
  let especialidad = document.getElementById('especialidad');
  let date = document.getElementById('date');
  let hour = document.getElementById('hour');

  // Validar Rut
  if (!validateRut(rut.value)) {
    alert('Rut invalido');
    valid = false;
  }

  //Validar Nombre y Apellido
  if (!validateString(name.value) || name.value.length === 0) {
    alert('Nombre y apellidos inválidos');
    valid = false;
  }

  //Validar edad
  if (!validateNumber(age.value)) {
    alert('Edad inválida');
    valid = false;
  }

  //Email invalido
  if (!validateEmail(email.value)) {
    alert('Email inválido');
    valid = false;
  }

  // Validar Fecha
  if (!validateDate(date.value)) {
    alert('Fecha inválida');
    valid = false;
  }

  // Validar Hora
  // if (!validateHour(hour.value)) {
  //   alert('Hora inválida');
  //   valid = false;
  // }

  // Botón agendar hora ejecuta evento
  if (valid) {
    const data = {
      name: name.value,
      lastName: lastName.value,
      rut: rut.value,
      age: age.value,
      email: email.value,
      especialidad: especialidad.value,
      date: date.value,
      hour: hour.value
    };

    register(data);
  } else {
    // Formulario inválido
  }
}

/**
 * Valida si string cumple formato RUT x.xxx.xxx-5
 *
 * @param {string} rut
 * @returns {boolean}
 */
const validateRut = (rut) => {
  return /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/.test(rut);
};

/**
 * Valida si string es solo texto.
 *
 * @param {string} string
 * @returns {boolean}
 */
const validateString = (string) => {
  return /^[a-zA-Z ñ]*$/.test(string);
};

/**
 * Validar si string es númerico.
 *
 * @param {string} number
 * @returns {boolean}
 */
const validateNumber = (number) => {
  return /^[0-9]+$/.test(number);
};

/**
 * Valida si string tiene formato Email.
 *
 * @param {string} email
 * @returns {boolean}
 */
const validateEmail = (email) => {
  return /^[a-zA-Zñ._\-&*0-9\.]*@[a-zA-Zñ._\-&*0-9]*\.[a-zA-Zñ._\-&*0-9]+/.test(email);
};

/**
 * Valida si string fecha tiene formato dd-mm-yyyyy.
 *
 * No valida si fecha es válida.
 *
 * @param {string} date
 * @returns {boolean}
 */
const validateDate = (date) => {
  return /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/.test(date);
};

/**
 * Primera forma de escoger hora con select
 * Segunda forma de validar campo hora y expresion regular
 * Valida si string hora tiene formato 00:00.
//  *
//  * @param {string} hour
//  * @returns {boolean}
//  */
// const validateHour = (hour) => {
//   return /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/.test(hour);
// };


// Acción de botón enviar
// let reservar = (data) = {
//   RSERVAR
// }

const register = (data) => {
  alert(`Estimado ${data.name}${data.lastName} su hora para ${data.especialidad} ha sido reservada para el día ${data.date} a las ${data.hour}. Además, se le envió un mensaje a su correo ${data.email} con el detalle de su cita. Gracias por preferirnos, le saluda Centro Médico Ñuñoa.`);
}

document
  .getElementById('register')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });