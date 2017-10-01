
var buildPhase = true;
var currentQuestion = 0;
var currentQuestionJSON = null;
var duration = 90;
var numberOfQuestions = 12;

var participant = 

	{
		'startTimeStamp': 0,
		'timeElapsed': 0,
		'score': 0,
		'submissionHistory': [[]]

	};

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
var DataStore = require('nedb');
var path = require('path');
var db = new DataStore(
		{
			filename : path.join(ngui.App.dataPath, 'Cryptoss-SuperHeroes.db'),
			autoload : true
		});

function isSpaceChar(char){ return (char < 33 || char > 126);}

function dropSpaceChars(string)
{
	var x = 0, y = string.length - 1;
	while(isSpaceChar(string.charCodeAt(x))) x++;
	while(isSpaceChar(string.charCodeAt(y))) y--;
	return string.substr(x, y - x + 1);
}

function setVariables()
{
	try{ launchApp(); }
	catch(err){ console.log(err); }

	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "<div id='qn" + i + "S' class='questionStatus'>" + questions[i]['attempts'] + "</div>";
		questionLinksHTML += "</div>" + (i == numberOfQuestions ? "<hr style='width: 100%;'>" : "<hr>");
		participant['submissionHistory'].push([]);
	}
	$('#sideBarID').html(questionLinksHTML);

	participant['startTimeStamp'] = new Date().getTime();

	$('#countDown').countdown(participant['startTimeStamp'] + duration * 60000)
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

function copyToClipboard(element) 
{
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}

function openNav()
{ 
	$('#myScore').text(participant['score']);
	$('#mySidenav').css({'width' : '23%', 'transition' : '0.5s'});
}

function closeNav()
{ 	$('#mySidenav').css({'width' : '0', 'transition' : '0.3s'});}

function submit()
{
	if(buildPhase)
		submitX();
}

function submitX() 
{
	if(currentQuestionJSON['solved'] || currentQuestionJSON['attempts'] <= 0)
		return;

	currentQuestionJSON['attempted'] = true;

	var typedAnswer = $('#answerText').val();
	var id = "#qn"+currentQuestion+"S";

	typedAnswer = dropSpaceChars(typedAnswer);

	if(typedAnswer.length <= 0)
		return;

	if(participant['submissionHistory'][currentQuestion].indexOf(typedAnswer) >= 0)
		 if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
		 		return;

	participant['submissionHistory'][currentQuestion].push(typedAnswer);

	if("aeiou".indexOf(typedAnswer) >= 0) 
	{
		$('#successModal').delay(100).fadeIn();
		$('#successModal').delay(300).fadeOut();
		$(id).css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		$(id).html('&#10003;');
		currentQuestionJSON['solved'] = true;
		participant['score'] += currentQuestionJSON['score'];
		$('#sDinner2').text(participant['score']);
	}
	else if(currentQuestionJSON['attempts'] > 0)
	{
		$('#wrongAnswerModal').delay(100).fadeIn();
		$('#wrongAnswerModal').delay(300).fadeOut();
		currentQuestionJSON['attempts']--;
		$(id).css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
		$(id).text(currentQuestionJSON['attempts']);
	}

}

function launchApp()
{
	db.find({}, function(err, docs)
	{
		if(docs.length == 0)
		{
			db.insert(
				{
					participant: participant,
					questions: questions
				}, function(err, newDocs){});
		}
		else
		{
			participant = docs[0].participant;
			questions   = docs[0].questions;
		}
	});
}
