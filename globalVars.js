
var buildPhase = true;
var startTimeStamp = 0;
var endTimeStamp = 0;
var currentQuestion = 0;
var currentQuestionJSON = null;
var participantScore = 0;
var duration = 90;
var numberOfQuestions = 12;
// var attempts = [100, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 9, 9];
// var scores = [0, 5, 5, 8, 8, 8, 10, 10, 15, 15, 15, 20, 20];
// var solved   = [true, false, false, false, false, false, 
// 				false, false, false, false, false, false, false];
// var attempted = [true, false, false, false, false, false, 
// 				false, false, false, false, false, false, false];

var submissionHistory = [[]];
var questionNumberDiv, questionDetailsDiv;
var answerTextField, submitButton;
var ngui = require('nw.gui');
var nwin = ngui.Window.get();

function setVariables()
{
	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "<div id='qn" + i + "S' class='questionStatus'>" + questions[i]['attempts'] + "</div>";
		questionLinksHTML += "</div>" + (i == numberOfQuestions ? "<hr style='width: 100%;'>" : "<hr>");
		submissionHistory.push([]);
	}
	$('#sideBarID').html(questionLinksHTML);

	// questionNumberDiv = document.getElementById("appHeaderID");
	// questionDetailsDiv = document.getElementById("questionDescriptionID");
	// answerTextField = document.getElementById("answerText");
	// submitButton = document.getElementById("submitButton");

	startTimeStamp = new Date().getTime();
	endTimeStamp = startTimeStamp + duration * 60000;
	$('#countDown').countdown(endTimeStamp)
		.on('update.countdown', function(event) 
		{
			var format = '%H:%M:%S';
			$(this).html(event.strftime(format));
		})
		.on('finish.countdown', function(event) 
		{
			$(this).text("00:00:00");
		});
	nwin.show();
	nwin.maximize();

}

function displayQuestion(n)
{
	currentQuestion = n;
	currentQuestionJSON = questions[currentQuestion];
	$('#appHeaderID').text("Question " + currentQuestion);
	$('#questionDescriptionID').html(currentQuestionJSON['questionStatement']);
	$('#answerText').val('');
}

function openNav()
{ 
	$('#myScore').text(participantScore);
	$('#mySidenav').css({'width' : '23%', 'transition' : '0.5s'});
}

function closeNav()
{ 	$('#mySidenav').css({'width' : '0', 'transition' : '0.3s'});}

function submit()
{
	// alert(submissionHistory);
	if(buildPhase)
		submitX();
}

function submitX() 
{
	if(currentQuestionJSON['solved'])
		return;

	currentQuestionJSON['attempted'] = true;

	var typedAnswer = $('#answerText').val();
	var id = "#qn"+currentQuestion+"S";

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
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		$(id).css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		$(id).html('&#10003;');
		currentQuestionJSON['solved'] = true;
		participantScore += currentQuestionJSON['score'];
		$('#sDinner2').text(participantScore);
	}
	else if(currentQuestionJSON['attempts'] > 0)
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		currentQuestionJSON['attempts']--;
		$(id).css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
		$(id).text(currentQuestionJSON['attempts']);
		if(currentQuestionJSON['attempts'] == 0)
			currentQuestionJSON['solved'] = true;
	}

}
