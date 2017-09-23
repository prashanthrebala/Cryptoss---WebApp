
var buildPhase = true;
var startTimeStamp = 0;
var endTimeStamp = 0;
var currentQuestion = 0;
var participantScore = 0;
var attempts = [100, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 9, 9];
var scores = [0, 5, 5, 8, 8, 8, 10, 10, 15, 15, 15, 20, 20];
var solved   = [true, false, false, false, false, false, 
				false, false, false, false, false, false, false];
var attempted = [true, false, false, false, false, false, 
				false, false, false, false, false, false, false];

var submissionHistory = [[]];
var questionNumberDiv, questionDetailsDiv;
var answerTextField, submitButton;

function setVariables()
{
	questionNumberDiv = document.getElementById("appHeaderID");
	questionDetailsDiv = document.getElementById("questionDescriptionID");
	answerTextField = document.getElementById("answerText");
	submitButton = document.getElementById("submitButton");

	for(let i=1;i<=12;i++)
	{
		document.getElementById("qn"+i+"S").innerHTML = attempts[i];
		submissionHistory.push([]);
	}

	startTimeStamp = new Date().getTime();
	endTimeStamp = startTimeStamp + 0.1 * 60 * 1000;
	$('#countDown').countdown(endTimeStamp)
		.on('update.countdown', function(event) 
		{
			var format = '%H:%M:%S';
			$(this).html(event.strftime(format));
		})
		.on('finish.countdown', function(event) 
		{
			document.getElementById("countDown").innerHTML = "00:00:00";
		});

}

function displayQuestion(n)
{
	questionNumberDiv.innerHTML = "Question " + n;
	questionDetailsDiv.innerHTML = questions[n-1];
	currentQuestion = n;
	answerTextField.value = "";
}

function openNav()
{ 
	document.getElementById("myScore").innerHTML = participantScore;
	document.getElementById("mySidenav").style.width = "23%"; 
	document.getElementById("mySidenav").style.transition = "0.5s";
}

function closeNav()
{ 
	document.getElementById("mySidenav").style.width = "0"; 
	document.getElementById("mySidenav").style.transition = "0.3s";
}

function submit()
{
	// alert(submissionHistory);
	if(buildPhase)
		submitX();
}

function submitX() 
{
	if(solved[currentQuestion])
		return;

	attempted[currentQuestion] = true;


	var typedAnswer = answerTextField.value;
	var cur = document.getElementById("qn"+currentQuestion+"S");

	if(typedAnswer.length <= 0)
		return;

	if(submissionHistory[currentQuestion].indexOf(typedAnswer) >= 0)
	{
		 if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
		 		return;
	}

	submissionHistory[currentQuestion].push(typedAnswer);

	if("aeiou".indexOf(typedAnswer) >= 0) 
	{
		cur.style.border = "2px solid #37B76C";
		cur.style.color = "#37B76C";
		cur.innerHTML = '&#10003;'
		solved[currentQuestion] = true;
		participantScore += scores[currentQuestion];
		document.getElementById("sDinner2").innerHTML = participantScore;
	}
	else if(attempts[currentQuestion] > 0)
	{
		attempts[currentQuestion]--;
		cur.style.border = "2px solid #FF3F2F";
		cur.style.color = "#FF3F2F";
		cur.innerHTML = attempts[currentQuestion];
		if(attempts[currentQuestion] == 0)
			solved[currentQuestion] = true;
	}

}
