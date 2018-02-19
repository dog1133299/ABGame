 function s(e) {
 	return document.querySelector(e);
 }

 document.addEventListener("DOMContentLoaded",function(){
 	s(".overlay").addEventListener("click",loadGame);
 });

var AB=[];
var RandomNumber=[1,2,3,4,5,6,7,8,9];
var GuessNumber=[];
var A=0;
var B=0;
var count=0;
 function loadGame(){
	
	reset();
 	for (var i = 0; i < 9; i++) {
 		var a=Math.ceil(Math.random()*9)-1;
 		var b=Math.ceil(Math.random()*9)-1;
 		var tmp=RandomNumber[a];
 		RandomNumber[a]=RandomNumber[b];
 		RandomNumber[b]=tmp;
 	}

 	for (var i = 0; i < 4; i++){
 		AB[i]=RandomNumber[i];
 		console.log(RandomNumber[i]);
 	}
 	
 	s('.guess button').addEventListener("click",gameing);
 	s('.overlay').style.display='none';


 };
 function gameing(){
	 GuessNumber[0]=parseInt(s('#number1').value);
	 GuessNumber[1]=parseInt(s('#number2').value);
	 GuessNumber[2]=parseInt(s('#number3').value);
	 GuessNumber[3]=parseInt(s('#number4').value);

	if (GuessNumber[0]&&GuessNumber[1]&&GuessNumber[2]&&GuessNumber[3]) {
		if (isDifferent(GuessNumber)) {
			A=0,B=0;
			
		 	for (var i = 0; i < 4; i++) {
		 		if (GuessNumber[i]==RandomNumber[i])
		 		A++;

		 		for (var j = 0; j < 4; j++) {
		 			if(GuessNumber[i]==RandomNumber[j])
		 				B++;
		 		}
		 	}
		 	B=B-A;
		 	var newNode=document.createElement("div");
		 	newNode.className="AB";
		 	newNode.innerHTML=GuessNumber[0]+''+GuessNumber[1]+''+GuessNumber[2]+''+GuessNumber[3]+' '+A+'A'+B+'B';
		 	s('.ABList').appendChild(newNode);
		 	s('.time span').innerHTML=++count;
		 	s('.bigAB').innerHTML=GuessNumber[0]+''+GuessNumber[1]+''+GuessNumber[2]+''+GuessNumber[3]+'  '+A+'A'+B+'B';

		 	if (A==4&&B==0)
		 		win();
		}
	}
 };

function isDifferent(n){
	for (var i = 0; i < n.length-1; i++) {
		for (var j = i+1; j < n.length; j++) {
			if(n[i]===n[j]){
				s('.bigAB').innerHTML="Same numbers!";
				return false;
			}
		}
	}
	return true;
}
function win(){
	s('.overlay').style.display="block";
	s('.msg-a').innerHTML="Great!"
	s('.msg-b').innerHTML='Answer: '+GuessNumber[0]+''+GuessNumber[1]+''+GuessNumber[2]+''+GuessNumber[3];
	s('.msg-c').innerHTML='You tried '+count+' times!';
	s('.msg-d').innerHTML='Try Again!';


}
function reset(){
	count=0;
	s('.time span').innerHTML='0';
	s('#number1').value=null;
	s('#number2').value=null;
	s('#number3').value=null;
	s('#number4').value=null;
	s('.ABList').innerHTML="";
	s('.bigAB').innerHTML='0000 0A0B';
	 
}