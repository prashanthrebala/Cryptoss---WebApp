
var currentQuestion = 0;
var attempts = [100, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 9, 9];


function displayQuestion(n)
{
	questionNumberDiv.innerHTML = "Question " + n;
	questionDetailsDiv.innerHTML = questions[n-1];
	currentQuestion = n;
}

function submit() 
{
	if(currentQuestion == 0)
	{
		alert("Select a question to submit this answer");
		return;
	}
	if(attempts[currentQuestion] <= 0)
	{
		alert("You are out of attempts for this question :(");
		return;
	}
	var typedAnswer = answerTextField.value;
	var cur = document.getElementById("qn"+currentQuestion+"S");

	if(typedAnswer.length > 0  && "aeiou".indexOf(typedAnswer) >= 0) 
	{
		cur.className = "questionStatusS";
		cur.innerHTML = '&#10003;'
	}
	else if(attempts[currentQuestion] > 0)
	{
		attempts[currentQuestion]--;
		cur.className = "questionStatusF";
		cur.innerHTML = attempts[currentQuestion];
	}

}
