const form = document.getElementById('registration-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const comments = document.getElementById('comments');
const errorFirstName = document.getElementById('error-first-name');
const errorLastName = document.getElementById('error-last-name');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');
const registerBtn = document.getElementById('register-btn');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (validateForm()) {
		alert('Реєстрацію успішно завершено!');
		form.reset();
	}
});

function validateForm() {
	let isValid = true;

	if (firstName.value.trim() === '') {
		isValid = false;
		setErrorFor(firstName, errorFirstName, "Ім'я обов'язкове");
	} else {
		setSuccessFor(firstName, errorFirstName);
	}

	if (lastName.value.trim() === '') {
		isValid = false;
		setErrorFor(lastName, errorLastName, "Прізвище обов'язкове");
	} else {
		setSuccessFor(lastName, errorLastName);
	}

	if (email.value.trim() === '') {
		isValid = false;
		setErrorFor(email, errorEmail, 'Необхідно вказати адресу електронної пошти');
	} else if (!isValidEmail(email.value.trim())) {
		isValid = false;
		setErrorFor(email, errorEmail, 'Будь ласка, введіть дійсну адресу електронної пошти');
	} else {
		setSuccessFor(email, errorEmail);
	}

	if (phone.value.trim() === '') {
		isValid = false;
		setErrorFor(phone, errorPhone, "Обов'язковий номер телефону");
	} else if (!isValidPhone(phone.value.trim())) {
		isValid = false;
		setErrorFor(phone, errorPhone, 'Будь ласка, введіть дійсний номер телефону');
	} else {
		setSuccessFor(phone, errorPhone);
	}

	return isValid;
}

function setErrorFor(input, error, message) {
	input.classList.add('error');
	error.innerText = message;
}

function setSuccessFor(input, error) {
	input.classList.remove('error');
	error.innerText = '';
}

function isValidEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

function isValidPhone(phone) {
	const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
	return re.test(phone);
}


function validateForm() {
	let isValid = true;
  
	if (firstName.value.trim() === '') {
	  isValid = false;
	  setErrorFor(firstName, errorFirstName, "Ім'я обов'язкове");
	} else if (/^\d+$/.test(firstName.value.trim())) { // new code - prevent numeric values
	  isValid = false;
	  setErrorFor(firstName, errorFirstName, "Ім'я має містити літери");
	} else {
	  setSuccessFor(firstName, errorFirstName);
	}
  
	if (lastName.value.trim() === '') {
	  isValid = false;
	  setErrorFor(lastName, errorLastName, "Прізвище обов'язкове");
	} else if (/^\d+$/.test(lastName.value.trim())) { // new code - prevent numeric values
	  isValid = false;
	  setErrorFor(lastName, errorLastName, 'Прізвище повинно містити літери');
	} else {
	  setSuccessFor(lastName, errorLastName);
	}
  
	if (email.value.trim() === '') {
	  isValid = false;
	  setErrorFor(email, errorEmail, 'Необхідно вказати адресу електронної пошти');
	} else if (!isValidEmail(email.value.trim())) {
	  isValid = false;
	  setErrorFor(email, errorEmail, 'Будь ласка, введіть дійсну адресу електронної пошти');
	} else {
	  setSuccessFor(email, errorEmail);
	}
  
	if (phone.value.trim() === '') {
	  isValid = false;
	  setErrorFor(phone, errorPhone, "Обов'язковий номер телефону");
	} else if (!isValidPhone(phone.value.trim())) {
	  isValid = false;
	  setErrorFor(phone, errorPhone, 'Будь ласка, введіть дійсний номер телефону');
	} else {
	  setSuccessFor(phone, errorPhone);
	}
  
	return isValid;
  }

 
  window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('fixed', window.scrollY > 0);
  });

  