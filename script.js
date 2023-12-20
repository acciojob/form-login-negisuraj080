function getFormvalue() {
    //Write your code here
	let form = document.getElementById('form1');
let firstInput = form.elements('fname');
	let lastInput = form.elemenrs('lname');


	let firstName = firstInput.value;
	let lastName = lastInput.value;

	alert("First name: " + firstName + "\nLast name: " + lastName);
	
}
