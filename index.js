
var customName = document.querySelector('input');
var randomize = document.querySelector('button');
var story = document.getElementById("story");
var imgElement = document.getElementById("character")

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus","Batman","Mr. Bean"];
var insertY = ["Area 51", "Death Valley", "Aruba","The Shire", "Mars", "Machu Pichu"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly","Disintegrated abruptly","Dissipated instantaneously","Vanished inexplicably","Crumbled spontaneously","Faded abruptly"];


function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

function result() {

	var newStory = storyText;

	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

	if(yItem == "Death Valley"){
		document.getElementById('scene').style.backgroundImage = 'url(images/deathvalley.png)';
	}
	else if(yItem == "Area 51"){
		document.getElementById('scene').style.backgroundImage = 'url(images/area51.png)';
	}
	else if(yItem == "Aruba"){
		document.getElementById('scene').style.backgroundImage = 'url(images/aruba.png)';
	} 
	else if(yItem == "The Shire"){
		document.getElementById('scene').style.backgroundImage = 'url(images/shire.png)';
	} 
	else if(yItem == "Machu Pichu"){
		document.getElementById('scene').style.backgroundImage = 'url(images/machupichu.png)';
	} 
	else if(yItem == "Mars"){
		document.getElementById('scene').style.backgroundImage = 'url(images/mars.png)';
	} 

	if(xItem == "Donald Trump"){
		imgElement.src = "images/dt2.png"
	}
	else if(xItem == "Jackie Chan"){
		imgElement.src = "images/jc2.png"
	}
	else if(xItem == "Santa Claus"){
		imgElement.src = "images/sc2.png"
	}
	else if(xItem == "Batman"){
		imgElement.src = "images/batman.png"
	}
	else if(xItem == "Mr. Bean"){
		imgElement.src = "images/mb.png"
	}

	newStory = newStory.replace(/:insertx:/g, xItem);
	newStory = newStory.replace(/:inserty:/g, yItem);
	newStory = newStory.replace(/:insertz:/g, zItem);

	if(customName.value != '') {
		newStory = newStory.replace(/Bob/g, customName.value);
	}

  	if(document.getElementById("metric").checked){
		var weight = 300 * 0.453592;
		var weight = weight.toFixed(1);
		var temp = (94 -32)*5/9;
		var temp = temp.toFixed(0);
		newStory = newStory.replace(/300/g, weight);
		newStory = newStory.replace(/ pounds/g, " kgs");
		newStory = newStory.replace(/94/g, temp);
		newStory = newStory.replace(/farenheit/g,"°C");
	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);


// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator


