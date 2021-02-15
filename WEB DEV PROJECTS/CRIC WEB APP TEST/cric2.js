var playersOfA=new Array();
var countOfA=0;
var opA=new Array();
var opB=new Array();
var selectCapA=document.querySelector('#selectCapA');
var selectCapB=document.querySelector('#selectCapB');
var addPlayerOfA= document.querySelector(".addA");
addPlayerOfA.addEventListener("click",function(){
	playersOfA[countOfA]=prompt("Enter player's name");
	localStorage.setItem("playersOfA"+countOfA,playersOfA[countOfA]);
	opA[countOfA]=document.createElement("option");
	opA[countOfA].innerText=playersOfA[countOfA];
	selectCapA.appendChild(opA[countOfA]);
	countOfA++;
});
var playersOfB=new Array();
var countOfB=0;
var addPlayerOfB= document.querySelector(".addB");
addPlayerOfB.addEventListener("click",function(){
	playersOfB[countOfB]=prompt("Enter player's name");
	localStorage.setItem("playersOfB"+countOfB,playersOfB[countOfB]);
	opB[countOfB]=document.createElement("option");
	opB[countOfB].innerText=playersOfB[countOfB];
	selectCapB.appendChild(opB[countOfB]);
	countOfB++;
});
var inputOvers=document.querySelector("#totalOver");
var totalOvers;
inputOvers.addEventListener("change",function(){
	totalOvers= Number(inputOvers.value);
	localStorage.setItem("totalOvers",totalOvers);
});

selectCapA.addEventListener("change",function(){
	localStorage.setItem("capA",selectCapA.value);
})
selectCapB.addEventListener("change",function(){
	localStorage.setItem("capB",selectCapB.value);
})