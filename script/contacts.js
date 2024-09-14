let validate = () => {
	let name = document.getElementById("name");
	let errorMsg = document.getElementById("nameError")
	if (name.value.length != 0) {
		name.classList = "form-control";
		errorMsg.classList = "d-none text-danger";
	}
	else{
		name.classList = "form-control is-invalid";
		errorMsg.classList = "text-danger";
		console.log("dang,u suck")
	}
	let email = document.getElementById("email");
	let emailErrorMsg = document.getElementById("emailError")
	if (email.value.length != 0) {
		email.classList = "form-control";
		emailErrorMsg.classList = "d-none text-danger";
	}
	else{
		email.classList = "form-control is-invalid";
		emailErrorMsg.classList = "text-danger";
		console.log("what da hyell")
	}
	let subject = document.getElementById("subject");
	let subjectErrorMsg = document.getElementById("subjectError")
	if (subject.value.length != 0) {
		subject.classList = "form-control";
		subjectErrorMsg.classList = "d-none text-danger";
	}
	else{
		subject.classList = "form-control is-invalid";
		subjectErrorMsg.classList = "text-danger";
		console.log("FAILURE LMAO")
	}
	let message = document.getElementById("message");
	let messageErrorMsg = document.getElementById("MsgError")
	if (message.value.length != 0) {
		message.classList = "form-control";
		messageErrorMsg.classList = "d-none text-danger";
	}
	else{
		message.classList = "form-control is-invalid";
		messageErrorMsg.classList = "text-danger";
		console.log("BEIJING CORRRN")
	}
}