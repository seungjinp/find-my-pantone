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
		/*if (i == 2){
			answer.setAttribute("checked", "checked");
		}*/
		answerbox.appendChild(answer);
		answerbox.appendChild(document.createTextNode(label[i]));
	}
	box.appendChild(answerbox);
	return box;
}