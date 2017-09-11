
var currentQuestion = 0;
var attempts = [5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 9, 9];


function displayQuestion(n)
{
	document.getElementById("titleHeader").innerHTML = "Question " + n;
	document.getElementById("questionDescription").innerHTML = questions[n-1];
	currentQuestion = n;
}