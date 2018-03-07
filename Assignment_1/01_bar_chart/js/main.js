
// **** Your JavaScript code goes here ****
// Name: Komal Hirani
// gtID: khirani6
// Coding Assignment #1
// Copyrighted; Do not use this code unless you specifically ask for permission

//Loading csv file:
d3.csv('./data/coffee_data.csv', function(error, data) {
	if (error) {
		console.error('Error loading coffee sale data');
		console.error(error);
		return;
	}
	
	console.log(data);

});

