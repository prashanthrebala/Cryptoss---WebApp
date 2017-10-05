
var currentQuestion = 0;
var duration = 90;
var numberOfQuestions = 20;
var defaultTries = [100, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
						 7, 7, 7, 7, 7, 7, 7, 9, 9, 9];

var participant = 

{
	'startTimeStamp': 0,
	'endTimeStamp' : 0,
	'score': 0,
	'submissionHistory': [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
};

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
var DataStore = require('nedb');
var path = require('path');
var db = new DataStore(
{
	filename : path.join(ngui.App.dataPath, 'Cryptoss-SuperHeroes_8.db'),
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
	var questionLinksHTML = "<hr style='width: 100%;'>";
	for(let i=1;i<=numberOfQuestions;i++)
	{
		questionLinksHTML += "<div id='qn" + i + "' class='questionLink' onclick='displayQuestion("+i+")'>";
		questionLinksHTML += "<div id='qn" + i + "T' class='questionNumber'>Question " + i + "</div>";
		questionLinksHTML += "<div id='qn" + i + "S' class='questionStatus'>" + (questions[i]['solved'] ? '&#10003;' : questions[i]['attempts']) + "</div>";
		questionLinksHTML += "</div>" + (i == numberOfQuestions ? "<hr style='width: 100%;'>" : "<hr>");
	}
	$('#sideBarID').html(questionLinksHTML);

	for(let i=1;i<=numberOfQuestions;i++)
	{
		if(questions[i]['solved'])
			$("#qn" + i + "S").css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
		else if(questions[i]['attempts'] < defaultTries[i])
			$("#qn" + i + "S").css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
	}

	$('#countDown').countdown(participant['endTimeStamp'])
	.on('update.countdown', function(event) 
	{
		var format = '%H:%M:%S';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) 
	{
		$(this).text("00:00:00");
			//uncomment while deploying
			// $("#submitButton").css("pointer-events","none");
			// alert('Your time\'s up!');
	});
	nwin.show();
	nwin.maximize();

}

function displayQuestion(n)
{
	currentQuestion = n;
	$('#appHeaderID').text("Question " + currentQuestion);
	$('#questionDescriptionID').html(questions[currentQuestion]['questionStatement']);
	$('#answerText').val('');
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
	submitX(function()
	{
		db.remove({}, { multi: true }, function (err, numRemoved) 
		{
			db.insert(
			{
				participant: participant,
				questions: questions
			}, function(err, newDocs){
				console.log(err);
				console.log(newDocs);
			});
		});
	});
}

function submitX(callback) 
{
	var typedAnswer = $('#answerText').val();
	if(Sha256.hash(dropSpaceChars(typedAnswer)) === "2ebd69960e67153ba0592c42cb7eef226f53eef97333626deba0a82fee79f1cd" && participant['submissionHistory'][0].length == 0)
	{
		$('#qn' + currentQuestion + 'S').text(++questions[currentQuestion]['attempts']);
		alert('You have an extra attempt for this question');
		$('#answerText').val('');
		participant['submissionHistory'][0].push('prashanthrebala');
		return callback();
	}

	if(currentQuestion <= 0 || questions[currentQuestion]['solved'] || questions[currentQuestion]['attempts'] <= 0)
		return callback();

	questions[currentQuestion]['attempted'] = true;

	var id = "#qn"+currentQuestion+"S";

	typedAnswer = dropSpaceChars(typedAnswer);

	if(typedAnswer.length <= 0)
		return callback();

	if(participant['submissionHistory'][currentQuestion].indexOf(typedAnswer) >= 0)
		if(!confirm("You have already submitted this answer for this question. Are you sure you want to submit again?"))
			return callback();

		participant['submissionHistory'][currentQuestion].push(typedAnswer);

		if(Sha256.hash(typedAnswer) === questions[currentQuestion]['answer']) 
		{
			$('#successModal').delay(100).fadeIn();
			$('#successModal').delay(300).fadeOut();
			questions[currentQuestion]['attempts'] = -1;
			$(id).css({'border' : '2px solid #37B76C', 'color' : '#37B76C'});
			$(id).html('&#10003;');
			questions[currentQuestion]['solved'] = true;
			participant['score'] += questions[currentQuestion]['score'];
			$('#sDinner2').text(participant['score']);
			callback();
		}
		else if(questions[currentQuestion]['attempts'] > 0)
		{
			$('#wrongAnswerModal').delay(100).fadeIn();
			$('#wrongAnswerModal').delay(300).fadeOut();
			questions[currentQuestion]['attempts']--;
			$(id).css({'border' : '2px solid #FF3F2F', 'color' : '#FF3F2F'});
			$(id).text(questions[currentQuestion]['attempts']);
			callback();
		}

	}

	function launchApp()
	{
		db.find({}, function(err, docs)
		{
			if(docs.length == 0)
			{
				
				participant['startTimeStamp'] = new Date().getTime();
				participant['endTimeStamp']   = participant['startTimeStamp'] + duration * 60000;
				db.insert(
				{
					participant: participant,
					questions: questions
				},function(err, newDocs){	setVariables();	});
			}
			else
			{
				console.log(docs[0]);
				participant = docs[0].participant;
				questions   = docs[0].questions;
				$('#sDinner2').text(participant['score']);
				setVariables();
			}
		});
	}


	$(document).ready(function() 
	{
		try{ launchApp(); } 
		catch(err){ console.log(err); }
	});
	document.addEventListener('contextmenu', event => event.preventDefault());

