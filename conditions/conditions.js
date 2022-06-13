console.log("Hello World");


// create a random number
let randomNumber = Math.random();

console.log(randomNumber); 

// if the random number is less than 0.5...
// if (randomNumber < 0.5) {
	   // do this
//     console.log("Hello Monte");
//     console.log(randomNumber);

// }

// if the random number is greater than 0.5...
// if (randomNumber >= 0.5) {
	// then do this
//     console.log('Random Number is greater than 0.5');
//     console.log(randomNumber);

// }

//If Else Statement:

//
// declare a const string
// const dayOfWeek = 'Monday';

// do a strict compare of the string
// if (dayOfWeek === 'Monday') {

//     console.log('This is Monday');
// if the prior is false do this comparison
// } else if (dayOfWeek === 'Thursday') {

//     console.log("This is Thursday");
// if the prior is false do this comparison
// } else if (dayOfWeek ===  'Saturday') {

//     console.log("Hooray, today is Saturday");
// }


// show a prompt and save the reponse in a variable 'age'
// const age = prompt('Enter An Age To Drive!');


// test if age is less than 5
// if (age < 5) {

// if less than 5 do THIS
//     console.log("You are less than 5! Cmon bro.");
// } else if (age < 10) {	// else check if its less than 10

//     console.log("Still too young!");

// } else if (age >= 16) {	// else check if the age is less than or equal to 16

//     console.log("You are able to drive!");
// }

const age = prompt('ENTER AN AGE');

if (age < 5) {	// if age is less than 5...
	// do THIS
    console.log("You Type Pretty Fast - 5 ");
} else if (age < 10) {	// else if age is less than 10
	// do THIS
    console.log("Output of the logic compared to CASE STATEMENTS");
} else if (age < 35) {	// else if age is less than 35
	// do THIS
    console.log("Output of the logic Mr Adult.");
}
//ELSE -- ALL ALL CONDITIONS IN THE LOGIC HAVE FAILED
else {	// this is executed if all other tests have failed
    console.log("Last Resort If All Conditons Fail");
} 

// create a string for comparison
let expr = 'Papayas';

// create a prompt to allow the user to enter a type of fruit
let fruit = prompt('Enter a fruit you\'d like to search up:');

// set expr to fruit if fruit isn't an empty string
if (fruit != '')
	expr = fruit;

// a switch case on the expr string
switch (expr) {
	// compare the expr string to following cases

	// if expr == Oranges...
	case 'Oranges':
		// send the oranges alert
		alert('Oranges are $0.59 a pound.');
		// stop execution and jump to the end of the switch statement
		break;

	// if expr == Oranges...
	case 'Papayas':
		// send the papayas alert
		alert('Papayas are $0.75 a pound.');
		// stop execution and jump to the end of the switch statement
		break;

	// if expr == Oranges...
	case 'Mangoes':
		// send the mangoes alert
		alert('Mangoes are $1.50 a pound.');
		// stop execution and jump to the end of the switch statement
		break;

	// if expr doesn't match any of the above cases do the following
	default:
		// send the we don't sell alert
		alert(`We don't sell ${expr}.`)
}

// save a password from the prompt
const password = prompt('Please enter a enter a new password:');

// if the password is greater than or equal to 6...
if (password.length >= 6) {
	// nested condition to check for spaces
	// check for any spaces using indexOf
	if (password.indexOf(' ') !== -1) {
		// tell the user no spaces are allowed
		alert('Passwords cannot contain spaces! For some reason...');
	}
	else {	// if the indexOf(' ') === -1 then...
		// tell the user their password is valid
		console.log('Valid password');
	}
}
else { // you'll hit this if the initial condition of greater length the 6 is false
	// tell the user the password is too short
	alert('Password is too short!');
}
	
// a new function called singSong
function singSong()
{
	// it outputs to the console a choice melody
	console.log('DO');
	console.log('RE');
	console.log('MI');
}

// call the function 3 times for a total of 9 console.log calls
singSong();
singSong();
singSong();

// create a function that takes one parameter ( firstName )
function greet(firstName)
{
	// output the parameter with a message attached
	console.log(`Hey there, ${firstName}`);
}

// call the function that takes a parameter
greet('Carlos');

// create a function that takes 2 parameters ( firstName, lastName )
function greet1(firstName, lastName)
{
	// output the two parameters with a message
	console.log(`Hey there, ${firstName}, ${lastName}`);
}

// call the function that takes 2 parameters with the following
greet1('Carlos', 'Cruz');
