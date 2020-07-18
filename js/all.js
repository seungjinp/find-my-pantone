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

const colorCode = {
"HMOS":"invert(76%) sepia(34%) saturate(264%) hue-rotate(291deg) brightness(100%) contrast(94%)", //분홍
"HMOX":"invert(17%) sepia(92%) saturate(6740%) hue-rotate(358deg) brightness(102%) contrast(116%)", //빨강
"HMNS":"invert(70%) sepia(13%) saturate(162%) hue-rotate(168deg) brightness(101%) contrast(85%)", //은색
"HMNX":"invert(74%) sepia(17%) saturate(647%) hue-rotate(125deg) brightness(97%) contrast(96%)", //강물
"HGOS":"invert(24%) sepia(40%) saturate(1138%) hue-rotate(163deg) brightness(96%) contrast(88%)", //남색
"HGOX":"invert(36%) sepia(99%) saturate(1057%) hue-rotate(340deg) brightness(102%) contrast(100%)", //주황
"HGNS":"invert(26%) sepia(53%) saturate(1154%) hue-rotate(246deg) brightness(98%) contrast(91%)", //보라
"HGNX":"invert(29%) sepia(17%) saturate(986%) hue-rotate(329deg) brightness(96%) contrast(86%)", //고동
"BMOS":"invert(84%) sepia(1%) saturate(1996%) hue-rotate(136deg) brightness(97%) contrast(88%)", //회색
"BMOX":"invert(89%) sepia(12%) saturate(4550%) hue-rotate(332deg) brightness(85%) contrast(86%)", //금색
"BMNS":"invert(0%) sepia(17%) saturate(3749%) hue-rotate(124deg) brightness(94%) contrast(93%)", //검정
"BMNX":"invert(81%) sepia(3%) saturate(7499%) hue-rotate(175deg) brightness(90%) contrast(104%)", //하늘
"BGOS":"invert(48%) sepia(26%) saturate(1059%) hue-rotate(92deg) brightness(94%) contrast(98%)", //초록
"BGOX":"invert(86%) sepia(43%) saturate(6089%) hue-rotate(5deg) brightness(111%) contrast(102%)", //노랑
"BGNS":"invert(72%) sepia(23%) saturate(3690%) hue-rotate(313deg) brightness(100%) contrast(96%)", //살구
"BGNX":"invert(18%) sepia(62%) saturate(5320%) hue-rotate(328deg) brightness(89%) contrast(90%)" //진달래
}; 

const weight = [2,3,2,1,2,  3,3,1,2,1, 3,2,2,2,1,  2,1,3,1,3];

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

function calculate(answers){
	var colorNameMap = {};
	colorNameMap["HMOS"] = "분홍";
	colorNameMap["HMOX"] = "빨강";
	colorNameMap["HMNS"] = "은";
	colorNameMap["HMNX"] = "물";
	colorNameMap["HGOS"] = "남";
	colorNameMap["HGOX"] = "주황";
	colorNameMap["HGNS"] = "보라";
	colorNameMap["HGNX"] = "고동";
	colorNameMap["BMOS"] = "회";
	colorNameMap["BMOX"] = "금";
	colorNameMap["BMNS"] = "검정";
	colorNameMap["BMNX"] = "하늘";
	colorNameMap["BGOS"] = "초록";
	colorNameMap["BGOX"] = "노랑";
	colorNameMap["BGNS"] = "살구";
	colorNameMap["BGNX"] = "진달래";

	let h = 0;
	let b = 0;
	let g = 0;
	let m = 0;
	let o = 0;
	let n = 0;
	let s = 0;
	let x = 0;

	for (let i = 0; i < 20; i++)
	{
		if (i < 5)
		{
			if (i == 5 || i ==4)
				h += 5 * weight[i];
			else if (i != 3)
				b += 5 * weight[i];
		}
		else if (i < 10)
		{
			if (i == 5 || i ==4)
				m += 5 * weight[i];
			else if (i != 3)
				g += 5 * weight[i];
		}
		else if (i < 12)
		{
			if (i == 5 || i ==4)
				o += 5 * weight[i];
			else if (i != 3)
				n += 5 * weight[i];
		}
		else if (i < 14)
		{
			if (i == 5 || i ==4)
				n += 5 * weight[i];
			else if (i != 3)
				o += 5 * weight[i];
		}
		else if (i == 14)
		{
			if (i == 5 || i ==4)
				o += 5 * weight[i];
			else if (i != 3)
				n += 5 * weight[i];
		}
		else if (i == 15 || i == 16 || i == 18)
		{
			if (i == 5 || i ==4)
				s += 5 * weight[i];
			else if (i != 3)
				x += 5 * weight[i];
		}
		else if (i == 17 || i == 19)
		{
			if (i == 5 || i ==4)
				x += 5 * weight[i];
			else if (i != 3)
				s += 5 * weight[i];
		}
	}

	let result = (h>b?"H":"B") + (m>g?"M":"G") + (o>n?"O":"N")  + (s>x?"S":"M");
	document.getElementById("result").innerText="당신은 "+colorNameMap[result]+"색을 닮았습니다.";
	document.getElementById("decription").innerText=
	(o>n?"여러모로 사람을 통해 기운이 차는 당신은 ":"혼자만의 사색을 즐기는 당신은 ")+
	(m>g?"목표를 성공시키기 위해 ":"깨달음과 경험을 얻기 위해 ") +
	(s>x?"자신만의 규칙을 세웁니다. ":"주변의 상황을 항상 파악하려고 합니다.")+
	(h>b?"이런 당신을 사람들은 편안하게 느낄 것입니다.":"이런 당신을 사람들은 조금 불편하지만 따를 것입니다.");
	document.getElementById("picture").style.filter = colorCode[result];
}

function onClickReturn(){
	window.location.href = "index.html";
}