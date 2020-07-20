const questions = [
"나는 주변의 의견을 잘 받아들이는 편이다.",
"나는 조별과제를 할 때 최대한 편의를 맞추기 위해 노력한다.",
"나는 어느 정도 타협이 있어야 이 세상이 살기 편하다고 생각한다.",
"나는 친구를 위해 작은 배려를 하는 건 무리가 아니라고 생각한다.",
"나는 종종 사회적 약자를 위해 할 수 있는 것을 생각해보고는 한다.",
"나는 대를 위해서 소를 희생할 수 있는 경우를 이해한다.",
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
"나는 미지의 영역에 대해서 두려움보다 기대감이 크다.",
"나는 대부분의 결정들을 후회하지 않는다."];

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

const weight = [3,3,2,1,1,  3,3,2,1,1, 3,2,2,2,1,  2,1,3,1,3];

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
		answer.setAttribute("value", 5-i);
		answer.addEventListener("click", function(){onClickAnswer(index, 5-i);});
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
		window.location.href = "html/result.html?answer=" + JSON.stringify(confirmedAnswer);
	}
}

function onClickAnswer(index, radioValue){
	confirmedAnswer[index] = radioValue;
	let value = Object.keys(confirmedAnswer).length / 20;
	let percentage = Math.round(value * 100)+"%";
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
		var val = answers[i];
		if (i < 5)
		{
			if (val == 5 || val ==4)
				h += (val) * weight[i];
			else if(val != 3)
				b += (5-val) * weight[i];
		}
		else if (i < 10)
		{
			if (val == 5 || val ==4)
				m += (val) * weight[i];
			else if (val != 3)
				g += (5-val) * weight[i];
			else
				m += val * weight[i];
		}
		else if (i < 12)
		{
			if (val == 5 || val ==4)
				o += (val) * weight[i];
			else if (val != 3)
				n += (5-val) * weight[i];
		}
		else if (i < 14)
		{
			if (val == 5 || val ==4)
				n += (val) * weight[i];
			else if (val != 3)
				o += (5-val) * weight[i];
		}
		else if (i == 14)
		{
			if (val == 5 || val ==4)
				o += (val) * weight[i];
			else if (val != 3)
				n += (5-val) * weight[i];
		}
		else if (i == 15 || i == 16 || i == 18)
		{
			if (val == 5 || val ==4 || val ==3)
				s += (val) * weight[i];
			else if (val != 3)
				x += (5-val) * weight[i];
		}
		else if (i == 17 || i == 19)
		{
			if (val == 5 || val ==4 || val == 3)
				x += (val) * weight[i];
			else
				s += (5-val) * weight[i];
		}
	}

	let result = (h>b?"H":"B") + (m>g?"M":"G") + (o>n?"O":"N")  + (s>x?"S":"X");	
	document.getElementById("result").innerText="당신은 "+colorNameMap[result]+"색을 닮았습니다.";
	
	var desc = "작성 중";
	if(result == "BGNS")
	{
		desc = "살구색을 닮은 자신만의 신념을 가지고 있습니다.\n이런 신념을 통해 차근히 목표를 향해 다가가는 능력을 갖추었습니다.\n덕분에 주변 사람들은 이런 당신을 뭐든지 적당히 하는 사람이라고 생각하지 않을까 합니다.\n또한 대부분의 결정을 자신만의 기준을 통해 항상 관철하고는 합니다.\n<br/><br/>살구색과 잘 맞는 색상은 똑같이 신념을 가진 보라색이나 믿을 수 있는 남색이 잘 맞습니다.\n반면에 항상 목적을 위해 자신을 관철시키는 회색과 검정색은 의견이 부딪힐 수 있습니다.\n";
	}
	else if (result == "BMOX")
	{
		desc = "언제나 자신의 의견을 위해 대충 타협하지 않는 당신은 단단한 금색을 닮았습니다.\n그리고 목표를 위해서라면 기꺼이 열린 사고를 통해 이루어낼 것입니다.\n또한 외향적이지만 기준이 뚜렷한 당신은 많은 친구들이 따를 것으로 예상되네요.\n<br/><br/>금색과 잘 맞는 색상은 의외로 나와 닮은 회색이 있습니다. 만약 빨간색이 주변에 있다면 모 아니면 도로, 죽이 잘 맞을수도 철천지 원수일 수도 있습니다.";
	}
	else if (result == "HGNS")
	{
		desc = "신비로운 보라색은 유하고 주변에 잘 섞여들어가지만 독특한 당신을 나타냅니다.\n목적을 위해서 무리하는 모습없이 주변과 조화로운 모습을 보이고는 합니다.\n하지만 직관적이고 열린 사고를 갖추었기보다는 자신의 입장을 고수하고는 합니다.\n<br/><br/>당신에게는 살구색인 친구와 잘 어울리며, 검정색과는 잘 맞지 않을 수 있습니다.";
	}
	else if (result == "HMOX")
	{
		desc = "빨간색은 가장 열정적이고 외향적인 색상입니다. 항상 열린 사고를 통해 문제에 다가가며 좋은 결과를 내고는 합니다.\n또한 주변 친구들과 어울릴 줄 아는 당신은 많은 친구들이 좋아할 것입니다.\n이러한 당신이 경험을 많이 쌓고 인맥을 단단히 쌓아올리면 불가능한 것은 없을 것입니다.\n하지만 가끔은 한 가지 방향에 몰두하고 있는지 되돌아보세요.\n<br/><br/>당신은 금색과는 정말 죽이 잘 맞을 수도, 아니면 철천지 원수가 될 수 있습니다.\n혹은 검정색또는 회색과 비즈니스적으로 잘 맞을 수 있습니다.";
	}
	document.getElementById("decription").innerHTML=desc;
	
	document.getElementById("picture").style.filter = colorCode[result];
}

function onClickReturn(){
	window.location.href = "../index.html";
}