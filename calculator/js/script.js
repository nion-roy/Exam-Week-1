function calculate() {
	// Get input values
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var operation = document.getElementById("operation").value;

	// Check if input is valid
	if (isNaN(num1) || isNaN(num2)) {
		showError("Please enter valid numbers.");
		return;
	}

	// Perform calculation based on selected operation
	var result;
	switch (operation) {
		case "addition":
			result = num1 + num2;
			break;
		case "subtraction":
			result = num1 - num2;
			break;
		case "multiplication":
			result = num1 * num2;
			break;
		case "division":
			if (num2 === 0) {
				showError("Cannot divide by zero.");
				return;
			}
			result = num1 / num2;
			break;
		default:
			showError("Invalid operation selected.");
			return;
	}

	// Display result
	document.getElementById("result").innerText = result;
	document.getElementById("success-alert").style.display = "block";
	document.getElementById("error-alert").style.display = "none";
}

function showError(message) {
	document.getElementById("error-message").innerText = message;
	document.getElementById("error-alert").style.display = "block";
	document.getElementById("success-alert").style.display = "none";
}
