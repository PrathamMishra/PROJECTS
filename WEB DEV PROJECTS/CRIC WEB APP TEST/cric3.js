//*********************************************
var chooseTossWinner=document.querySelector("#tossWinner");
var choiceOfToss;
var takeChoiceOfToss=document.querySelector("#choiceOfToss");
chooseTossWinner.addEventListener("change",function(){
	tossWinner=chooseTossWinner.value;
	localStorage.setItem("tossWinner",tossWinner);
});
//*********************************************

takeChoiceOfToss.addEventListener("change",function(){
	choiceOfToss=takeChoiceOfToss.value;
	localStorage.setItem("choiceOfToss",choiceOfToss);
});

//********************************************

