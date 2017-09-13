
var currentQuestion = 0;
var attempts = [5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 9, 9];


function displayQuestion(questionNumberDiv, questionDetailsDiv, n, questions)
{
	questionNumberDiv.innerHTML = "Question " + n;
	questionDetailsDiv.innerHTML = questions[n-1];
	currentQuestion = n;
}