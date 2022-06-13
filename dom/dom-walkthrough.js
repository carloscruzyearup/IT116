// get the document domain
console.log(document.domain);
// get the URL of the document
console.log(document.URL);


// the following section will...
// get the title of the document
console.log(document.title);
// get the doctype element
console.log(document.doctype);
// get the head element
console.log(document.head);
// get the body element
console.log(document.body);
// get the entire document tree -- deprecated
console.log(document.all);
// get the entire document tree and access an element by its index -- deprecated
console.log(document.all[12]);
// ... and then log the element to the console as text

// get the number of forms
console.log(document.forms);
// get the number of links
console.log(document.links);
// ... and return the count and references to the objects as an object

// access the 10th element in the doc and change the text content
//document.all[10].textContent = "I just changed the header!";

// output to the console
// all the forms of the document
console.log(document.forms);
// all the links in the doc
console.log(document.links);
// all the images in the doc
console.log(document.images);

// gets the element by id
console.log(document.getElementById('header-title'));
console.log(document.getElementById('header-title'));

// store the returned element to a variable
let header_title = document.getElementById('header-title');

// access values of the html element stored in the variable from the variable itself!
header_title.textContent = "I'm changing the header"
header_title.innerText = "I'm changing the header again!"

// changing the css style from the variable
header_title.style.color = 'hotpink';

// get all items in the doc that are of a certain class and store them in items
let items = document.getElementsByClassName('list-group-item');

// print the array to console
console.log(items);

// create a new colors array
let colors = [
	'hotpink',
	'red',
	'blue',
	'lightgreen',
	'gray',
	'brown',
	'orange'
];

// a for loop to satisfy the requirements of editing the 3 css style attributes and the text content of each element
for ( i = 0; i < items.length; i++ )
{
	// set the fontWeight programatically
	items[i].style.fontWeight = `${i*100+300}`;
	// set the text content
	items[i].textContent = `This items index in the item's array is: ${i}`;
	// set to one of the colors in the colors array based on index
	items[i].style.backgroundColor = colors[i];
	// the following if statement makes it so that the item right in the middle isn't assigned the same value for both the color and backgroundColor
	if ( i !== 3 ) {
		items[i].style.color = colors[6-i];
	} else {
		items[i].style.color = 'orange';
	}
}

// a simple for loop that outputs the nth iteration to the log
// counts from 1 - 10
for ( i = 1; i <= 10; i++ )
{
	console.log(i);
}

// counts from 0 - 20 by 2
for ( j = 0; j <= 20; j+=2 )
{
	// outputs the iteration number to the log
	console.log(j);
}

// counts down from 100 to 0 by 2
for ( j = 100; j <= 0; j-=2 )
{
	// outputs the iteration number to the log
	console.log(j);
}

// see the code above where I combined the for loop and editing the elements thru the dom


// declare an array with various elements
const diamonds = ['snacky', 'scary', 'piggy', 'pinchy', 'lily', 'ittybitty'];

// iterate thru the array and output the value of the element to the console
for ( i = 0; i < diamonds.length; i++ )
{
	// output to console
	console.log(diamonds[i]);
}


// GetElementByTagName

// select the elements by tag name - li
let li = document.getElementsByTagName('li');

// output the entire array of li objects
console.log(li);
// output the 2nd item in the array of li elements
console.log(li[1]);

// can then access the elements attributes and css styles EXACTLY the same was as before

// set the fontWeight
li[1].style.fontWeight = 900;
// set the text content
li[1].textContent = `This items index in the item's array is: 1`;
// set to one of the colors in the colors array based on index
li[1].style.backgroundColor = colors[2];

for ( i = 0; i < li.length; i++ )
{
	li[i].style.fontWeight = 900;
	// set the text content
	li[i].textContent = `This items index in the item's array is: ${i}`;
	// set to one of the colors in the colors array based on index
	li[i].style.backgroundColor = colors[i];
}


// selecting the element thru a querySelector selecting by id main-header
let header = document.querySelector('#main-header');
// setting style 
header.style.borderBottom = 'solid 10px hotpink';

// select element by type input
let input = document.querySelector('input');
// setting the value ofinput
input.value = "changed the input box text";

// select the first input element with type=submit attribute
let submit = document.querySelector("input[type='submit']");
// set the value attribute
submit.value = 'SEND';

// select the first element of class list-group-item
let item = document.querySelector('.list-group-item');
// set the color
item.style.color = 'red';

// select the last element of class list-group-item by using the psuedo class last-child
let lastItem = document.querySelector('.list-group-item:last-child');
// set the border to 50 px and red
lastItem.style.border = 'solid 50px red';


let titleItems = document.querySelectorAll( 'title' );
console.log(titleItems);
titleItems[0].textContent = 'Hello Carlos';

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

console.log(odd);

for ( i = 0; i < odd.length; i++ )
{
	odd[i].textContent = "Odd <li> here!";
}

for ( i = 0; i < even.length; i++ )
{
	even[i].textContent = "Even <li> here!";
}

