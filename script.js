const compute = document.querySelector('.computeStep');
compute.addEventListener('click', KaprekarsConstant);

function kaprekarUnique(number){
	number = number.toString();
	number = number.split('');
	for(let i = 0; i < number.length; i++){
		let distinctDigit = 0;
		for(let j = 0; j < number.length; j++){
			if(number[i] === number[j]){
				distinctDigit += 1;
			}
		}
		if (distinctDigit > 2){
			return false;
		}
	}
	return true;
}

let number;
function KaprekarsConstant(number){
	let error;
	number = document.getElementById('userInput').value;
	let originalNumber = number;
	let result;
	let count = 0;

	
	let validInput = /^[0-9]{4}$/;
	let validate = validInput.test(number);
	if(!validate){
		error = `Please enter a valid 4-digit number.`;
		document.getElementById('result').innerHTML = '';
		return document.getElementById('error').innerHTML = error;
	}

	
	if(! kaprekarUnique(number)){
		error = `The number you entered does not meet the Kapreka's Constant uniqueness requirement`;
		document.getElementById('result').innerHTML = '';
		return document.getElementById('error').innerHTML = error;
	}
	
	while(result !== 6174){
		number = number.toString();
		number = number.split('');

		
		if(!error){
			document.getElementById('error').innerHTML = '';
		}

		let smallest = [];
		let biggest = [];
		
		for(let i = 0; i < number.length; i++){
			number[i] = parseInt(number[i]);
		}

		
		for(let i = 0; i < number.length; i++){
			for(j = 0; j < number.length; j++){
				if(number[i] > number[j]){
					let temp = number[i];
					number[i] = number[j];
					number[j] = temp;
				}
			}
		}
		
		biggest = number;
		smallest = number.slice().reverse();

		
		biggest = biggest.join('');
		smallest = smallest.join('');
        console.log(biggest);
        console.log(smallest);

		
        result = parseInt(biggest - smallest);
        console.log(result);
		count+= 1;
		if(result === 6174){
			return document.getElementById('result').innerHTML =
			 `Result: ${originalNumber} becomes a kaprekar's constant in ${count} steps`; 
		}
		number = result;
	}
}