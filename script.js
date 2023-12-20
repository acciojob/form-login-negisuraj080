// function getFormvalue() {
//     //Write your code here
// 	var form = document.getElementById('form1');
// var firstInput = form.elements['fname'];
// 	var lastInput = form.elemenrs['lname'];


// 	var firstName = firstInput.value;
// 	var lastName = lastInput.value;

// 	alert("First name: " + firstName + "\nLast name: " + lastName);
// 	return false;
	
// }


function getFormvalue() {
  // Get the form element
  var form = document.getElementById('form1');

  // Access the input elements by their names
  var firstNameInput = form.elements['fname'];
  var lastNameInput = form.elements['lname'];

  // Get the values entered by the user
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;

  // Display the first and last names using alert
  alert(firstName +" "+ lastName);

  // Prevent the form from submitting (optional)
  return false;
}

