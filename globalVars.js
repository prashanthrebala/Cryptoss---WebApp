
var buildPhase = true;
var currentQuestion = 0;
var attempts = [100, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 9, 9];
var solved   = [true, false, false, false, false, false, 
				false, false, false, false, false, false, false];

function displayQuestion(n)
{
	questionNumberDiv.innerHTML = "Question " + n;
	questionDetailsDiv.innerHTML = questions[n-1];
	currentQuestion = n;
	answerTextField.value = "";
}

function submit()
{
	if(buildPhase)
		submitX();
}

function submitX() 
{
	if(solved[currentQuestion])
		return;

	var typedAnswer = answerTextField.value;
	var cur = document.getElementById("qn"+currentQuestion+"S");

	if(typedAnswer.length <= 0)
		return;

	if("aeiou".indexOf(typedAnswer) >= 0) 
	{
		cur.className = "questionStatusS";
		cur.innerHTML = '&#10003;'
		solved[currentQuestion] = true;
	}
	else if(attempts[currentQuestion] > 0)
	{
		attempts[currentQuestion]--;
		cur.className = "questionStatusF";
		cur.innerHTML = attempts[currentQuestion];
		if(attempts[currentQuestion] == 0)
			solved[currentQuestion] = true;
	}

}
