let myVariable;
myVariable = 'Bob';

let myVariable2 = 'Bob';

myVariablel;

myVariable = 'Steve';


/* String */ 	let myVariable = 'Bob'; 
/* Number */ 	let myVariable = 10;	
/* Boolean */ 	let myVariable = true;
/* Array */ 	let myVariable = [1,'Bob','Steve',10];
/* Object */ 	let myVariable = document.querySelector('h1');

// line comment

/*addition*/	6 + 9;
				"Hello" + "World!";

/*subtraction*/		9 - 3;
/*multiplication*/	9 * 3;
/*division*/		9 / 3;

/*assignment*/		let myVariable = 'Bob';

/*equality*/		let myVariable = 3;
					myVariable === 4; //boolean result

/*not, does-not-equal*/	let myVariable = 3;
						!(myVariable === 3);
						myVariable !== 3;

//conditional
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
	alert('Yay, I love chocolate ice cream!');
} else {
	alert('Awww, but chocolate is my favorite...');
}


//function
let myVariable = document.querySelector('h1');
alert('Hello!');

function multiply(num1,num2) {
	let result = num1 * num2;
	return result;
}
/*calling the function*/ multiply(4, 7); 


//events
document.querySelector('html').onClick = function() {
	alert('Ouch! Stop poking me!');
}

