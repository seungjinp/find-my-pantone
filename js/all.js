const questions = [
"나는 주변의 의견을 받아들이는 편이다.",
"나는 조별과제를 할 때 최대한 편의를 맞추기 위해 노력한다.",
"나는 어느 정도 타협이 있어야 이 세상이 살기 편하다고 생각한다.",
"나는 친구들에게 있어서 편안한 존재이다.",
"나는 종종 사회적 약자를 위해 할 수 있는 것을 생각해보고는 한다.",
"나는 대를 위해서 소를 희생할 수 없는 경우를 이해한다.",
"나는 과정이 어떻게 되더라도 결과물을 완성하도록 노력한다.",
"나는 줄곧 어떻게 하면 효율적으로 일할 수 있는지 고민하곤 한다.",
"나는 항상 자신의 목표를 위해 만반의 준비를 해 둔다.",
"나는 친구들과 여행을 갈 때 주로 사진을 남겨두는 편이다.",
"나는 사람들과 어울림을 통해 에너지를 충전한다.",
"나는 주변의 지지와 인정을 통해 자존감을 채울 때가 있다.",
"나는 혼자서도 충분히 행복하다고 느끼며 내 자신이 가장 중요하다.",
"나는 자유로운 사색을 통해 마음속 감정을 정리하고는 한다.",
"나는 자주 세상에 안 될 것은 없다고 느낀다.",
"나는 나 자신의 관념이 투철하다.",
"나는 크게 심리가 흔들리는 경우는 몇 없다.",
"나는 계획과 탐색보다 실험과 도전을 가치 있게 여긴다.",
"나는 장소에 따른 분위기를 알며, 그에 걸맞게 행동한다.",
"나는 새로운 사람과 만나서 깊게 얘기할 수 있다."];

var confirmedAnswer = {};

function buildQuestion(){
	let index =0;
	questions.forEach(function(element) {
		document.getElementById("container").appendChild(createQuestionBox(element, index++));
	});
}

function createQuestionBox(question, index){
	let box = document.createElement("div");
	box.setAttribute("class", "question-box");
	let h3 = document.createElement("h3");
	h3.appendChild(document.createTextNode((index+1)+". "+question));
	box.appendChild(h3)
	let answerbox = document.createElement("div");
	answerbox.setAttribute("class", "question-answer");
	const label = ["매우 그렇다", "그렇다", "보통이다", "아니다", "매우 아니다"];
	for (let i = 0; i < 5; i++)
	{
		let answer = document.createElement("input");
		answer.setAttribute("type", "radio");
		answer.setAttribute("name", "q"+index);
		answer.setAttribute("value", i+1);
		answer.addEventListener("click", function(){onClickAnswer(index, i+1);});
		answerbox.appendChild(answer);
		answerbox.appendChild(document.createTextNode(label[i]));
	}
	box.appendChild(answerbox);
	return box;
}

function onClickResultButton(){
	if (Object.keys(confirmedAnswer).length < 20){
		let str = "";
		for (let i = 0; i < 20; i++)
		{
			if (i in confirmedAnswer == false)
				str += (i+1)+","
		}
		document.getElementById("fail-console").innerText=str.substring(0, str.length - 1) + "문항이 선택되지 않았습니다!";
	}
	else{
		window.location.href = "result.html?answer=" + JSON.stringify(confirmedAnswer);
	}
}

function onClickAnswer(index, radioValue){
	confirmedAnswer[index] = radioValue;
	let value = Object.keys(confirmedAnswer).length / 20;
	let percentage = (value * 100)+"%";
	document.getElementById("progress-text").innerText = percentage;
	document.getElementById("progress").style.backgroundPosition = "-"+(window.innerWidth * (1-value))+"px 0px";
}

function buildResult(){
	let val = decodeURIComponent(location.href).substr(location.href.lastIndexOf('=') + 1);
	let obj = JSON.parse(val);
	calculate(obj);
}

function calculate(answer){

}

function onClickReturn(){
	window.location.href = "index.html";
}