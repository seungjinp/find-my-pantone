const questions = [
"���� �ֺ��� �ǰ��� �޾Ƶ��̴� ���̴�.",
"���� ���������� �� �� �ִ��� ���Ǹ� ���߱� ���� ����Ѵ�.",
"���� ��� ���� Ÿ���� �־�� �� ������ ��� ���ϴٰ� �����Ѵ�.",
"���� ģ���鿡�� �־ ����� �����̴�.",
"���� ���� ��ȸ�� ���ڸ� ���� �� �� �ִ� ���� �����غ���� �Ѵ�.",
"���� �븦 ���ؼ� �Ҹ� ����� �� ���� ��츦 �����Ѵ�.",
"���� ������ ��� �Ǵ��� ������� �ϼ��ϵ��� ����Ѵ�.",
"���� �ٰ� ��� �ϸ� ȿ�������� ���� �� �ִ��� ����ϰ� �Ѵ�.",
"���� �׻� �ڽ��� ��ǥ�� ���� ������ �غ� �� �д�.",
"���� ģ����� ������ �� �� �ַ� ������ ���ܵδ� ���̴�.",
"���� ������ ��︲�� ���� �������� �����Ѵ�.",
"���� �ֺ��� ������ ������ ���� �������� ä�� ���� �ִ�.",
"���� ȥ�ڼ��� ����� �ູ�ϴٰ� ������ �� �ڽ��� ���� �߿��ϴ�.",
"���� �����ο� ����� ���� ������ ������ �����ϰ�� �Ѵ�.",
"���� ���� ���� �� �� ���� ���ٰ� ������.",
"���� �� �ڽ��� ������ ��ö�ϴ�.",
"���� ũ�� �ɸ��� ��鸮�� ���� �� ����.",
"���� ��ȹ�� Ž������ ����� ������ ��ġ �ְ� �����.",
"���� ��ҿ� ���� �����⸦ �˸�, �׿� �ɸ°� �ൿ�Ѵ�.",
"���� ���ο� ����� ������ ��� ����� �� �ִ�."];

const colorCode = {
"HMOS":"invert(76%) sepia(34%) saturate(264%) hue-rotate(291deg) brightness(100%) contrast(94%)", //��ȫ
"HMOX":"invert(17%) sepia(92%) saturate(6740%) hue-rotate(358deg) brightness(102%) contrast(116%)", //����
"HMNS":"invert(70%) sepia(13%) saturate(162%) hue-rotate(168deg) brightness(101%) contrast(85%)", //����
"HMNX":"invert(74%) sepia(17%) saturate(647%) hue-rotate(125deg) brightness(97%) contrast(96%)", //����
"HGOS":"invert(24%) sepia(40%) saturate(1138%) hue-rotate(163deg) brightness(96%) contrast(88%)", //����
"HGOX":"invert(36%) sepia(99%) saturate(1057%) hue-rotate(340deg) brightness(102%) contrast(100%)", //��Ȳ
"HGNS":"invert(26%) sepia(53%) saturate(1154%) hue-rotate(246deg) brightness(98%) contrast(91%)", //����
"HGNX":"invert(29%) sepia(17%) saturate(986%) hue-rotate(329deg) brightness(96%) contrast(86%)", //��
"BMOS":"invert(84%) sepia(1%) saturate(1996%) hue-rotate(136deg) brightness(97%) contrast(88%)", //ȸ��
"BMOX":"invert(89%) sepia(12%) saturate(4550%) hue-rotate(332deg) brightness(85%) contrast(86%)", //�ݻ�
"BMNS":"invert(0%) sepia(17%) saturate(3749%) hue-rotate(124deg) brightness(94%) contrast(93%)", //����
"BMNX":"invert(81%) sepia(3%) saturate(7499%) hue-rotate(175deg) brightness(90%) contrast(104%)", //�ϴ�
"BGOS":"invert(48%) sepia(26%) saturate(1059%) hue-rotate(92deg) brightness(94%) contrast(98%)", //�ʷ�
"BGOX":"invert(86%) sepia(43%) saturate(6089%) hue-rotate(5deg) brightness(111%) contrast(102%)", //���
"BGNS":"invert(72%) sepia(23%) saturate(3690%) hue-rotate(313deg) brightness(100%) contrast(96%)", //�챸
"BGNX":"invert(18%) sepia(62%) saturate(5320%) hue-rotate(328deg) brightness(89%) contrast(90%)" //���޷�
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
	const label = ["�ſ� �׷���", "�׷���", "�����̴�", "�ƴϴ�", "�ſ� �ƴϴ�"];
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
		document.getElementById("fail-console").innerText=str.substring(0, str.length - 1) + "������ ���õ��� �ʾҽ��ϴ�!";
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
	colorNameMap["HMOS"] = "��ȫ";
	colorNameMap["HMOX"] = "����";
	colorNameMap["HMNS"] = "��";
	colorNameMap["HMNX"] = "��";
	colorNameMap["HGOS"] = "��";
	colorNameMap["HGOX"] = "��Ȳ";
	colorNameMap["HGNS"] = "����";
	colorNameMap["HGNX"] = "��";
	colorNameMap["BMOS"] = "ȸ";
	colorNameMap["BMOX"] = "��";
	colorNameMap["BMNS"] = "����";
	colorNameMap["BMNX"] = "�ϴ�";
	colorNameMap["BGOS"] = "�ʷ�";
	colorNameMap["BGOX"] = "���";
	colorNameMap["BGNS"] = "�챸";
	colorNameMap["BGNX"] = "���޷�";

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
	document.getElementById("result").innerText="����� "+colorNameMap[result]+"���� ��ҽ��ϴ�.";
	document.getElementById("decription").innerText=
	(o>n?"������� ����� ���� ����� ���� ����� ":"ȥ�ڸ��� ����� ���� ����� ")+
	(m>g?"��ǥ�� ������Ű�� ���� ":"�������� ������ ��� ���� ") +
	(s>x?"�ڽŸ��� ��Ģ�� ����ϴ�. ":"�ֺ��� ��Ȳ�� �׻� �ľ��Ϸ��� �մϴ�.")+
	(h>b?"�̷� ����� ������� ����ϰ� ���� ���Դϴ�.":"�̷� ����� ������� ���� ���������� ���� ���Դϴ�.");
	document.getElementById("picture").style.filter = colorCode[result];
}

function onClickReturn(){
	window.location.href = "index.html";
}