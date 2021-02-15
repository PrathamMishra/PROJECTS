var playersOfA=new Array();
var playersOfB=new Array();
var selectStriker=document.querySelector("#striker");
var selectNonStriker=document.querySelector("#nonStriker");
var selectBowler=document.querySelector("#bowler");
var opA=new Array();
var opB=new Array();
var tossWinner=localStorage.getItem("tossWinner");
var choiceOfToss=localStorage.getItem("choiceOfToss");
//*********************************************
for (var i = 0; i>=0; i++) {
	if(localStorage.getItem("playersOfA"+i)!=''){
		playersOfA[i]=localStorage.getItem("playersOfA"+i);
	}
	else{
		i=-2;
	}
}
for (var i = 0; i>=0; i++) {
	if(localStorage.getItem("playersOfB"+i)!=''){
		playersOfB[i]=localStorage.getItem("playersOfB"+i);
	}
	else{
		i = -2;
	}
}
//**************************************
if(tossWinner=="Team A"){
	if(choiceOfToss=='Batting'){
		for (var i = 0; i <playersOfA.length; i++){
			opA[i]=document.createElement("option");
			opA[i].innerText=playersOfA[i];
			opB[i]=document.createElement("option");
			opB[i].innerText=playersOfB[i];
			selectStriker.appendChild(opA[i]);
			selectNonStriker.appendChild(opA[i]);
			selectBowler.appendChild(opB[i]);
		}
	}
	else{
		for (var i = 0; i <playersOfB.length; i++){
			opA[i]=document.createElement("option");
			opA[i].innerText=playersOfA[i];
			opB[i]=document.createElement("option");
			opB[i].innerText=playersOfB[i];
			selectStriker.appendChild(opB[i]);
			selectNonStriker.appendChild(opB[i]);
			selectBowler.appendChild(opA[i]);
		}
	}
}
else{
	if(choiceOfToss=='Batting'){
		for (var i = 0; i <playersOfB.length; i++){
			opA[i]=document.createElement("option");
			opA[i].innerText=playersOfA[i];
			opB[i]=document.createElement("option");
			opB[i].innerText=playersOfB[i];
			selectStriker.appendChild(opB[i]);
			selectNonStriker.appendChild(opB[i]);
			selectBowler.appendChild(opA[i]);
		}
	}
	else{
		for (var i = 0; i <playersOfA.length; i++){
			opA[i]=document.createElement("option");
			opA[i].innerText=playersOfA[i];
			opB[i]=document.createElement("option");
			opB[i].innerText=playersOfB[i];
			selectStriker.appendChild(opA[i]);
			selectNonStriker.appendChild(opA[i]);
			selectBowler.appendChild(opB[i]);
		}
	}
}