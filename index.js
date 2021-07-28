const questions = [
  '나는 모임에 참석하여 주로',
  '나는 스트레스를 받았을 때',
  '나는 남에게 질문을 들었을 때',
  '나는 어떤 모임에 참석했을 때',
  '나는 남들과 뮤지컬을 함께 만든다면', // I/E Questions

  '나 자신이 가치 있다고 느낄 때는',
  '나는 보고서를 쓸 때',
  '나는 남을 평가할 때',
  '내가 걱정을 하는 이유는 주로',
  '나는 과제나 업무에 대한 지시를 받을 때', // N/S Questions

  '남을 평가하려면',
  '남의 문제를 해결해 줄 때, 흥미를 느끼는 쪽은',
  '나는 대화를 할 때',
  '내가 더 능력을 발휘하는 분위기는',
  '피드백을 받을 때 더 듣고싶은 말은', //F/T Questions

  '정리가 안 된 방을 보면',
  '사회 내의 규칙과 제도는',
  '팀의 책임자를 맡게 될 경우',
  '나의 패션 스타일은',
  '새로운 프로젝트를 시작 할 때', //J/P Questions
]

const answers = [
  '', //dummy
  '적당한 시간이 지나면 그만 끝냈으면 한다',
  '점점 신이 나서 거의 끝까지 남는 편이다', // I / E Question 1

  '혼자서 좋아하는 것에 몰입한다',
  '친한 사람들과 만나 떠들며 놀고 싶어한다', // I / E Question 2

  '생각을 충분히 한 후 필요한 말만 하는 편이다',
  '바로 대답을 시작하고, 말을 하며 생각을 하는 편이다', // I/E Question 3

  '이미 알고 있는 사람들과 잘 어울린다',
  '처음 만나는 사람에게 호기심이 있다', // I/E Question 4

  '뮤지컬을 위한 대본, 음악, 안무를 준비하고 싶다',
  '주인공이 되어 노래하고 싶다', // I/E Question 5

  '상상력, 창의력과 감수성이 뛰어난 것을 확인할 때',
  '판단력과 업무 능력이 뛰어난 것을 확인할 때', // N/S Question 1

  '새로운 아이디어 위주로 보고하는 것을 선호한다',
  '구체적이고 명확한 수치를 보고하는 것을 선호한다', // N/S Question 2

  '그 사람이 세상을 바라보는 관점을 본다',
  '그 사람의 유능한 점을 본다', // N/S Question 3

  '미래에 어떤 문제가 나를 덮칠 지 몰라서',
  '눈 앞에 닥친 문제가 잘 해결되지 않아서', // N/S Question 4

  '내 자율성을 보장해주면 좋겠다',
  '최대한 구체적인 지시를 받고 싶다', // N/S Question 5

  '사람 보는 눈을 가진 몇몇 사람의 분석이 중요하다',
  '가능한 많은 사람의 의견을 종합하는 것이 중요하다', // F/T Question 1

  '어떤 선물을 고를까 하는 고민을 해결해 줄 때',
  '부당한 전기세 청구를 해결해 줄 때', // F/T Question 2

  '결론을 쉽게 내리지 않는다',
  '논리적이고 단정적으로 말한다', // F/T Question 3

  '서로 협력하여 무엇을 이루어 내려는 분위기',
  '서로 선의의 경쟁을 하는 분위기', // F/T Question 4

  '고생했어. 어려운 일인데 정말 열심히 하더라',
  '잘했어. 이 부분만 조금 더 수정하면 완벽하겠다', // F/T Question 5

  '물건을 찾기 어려워 불편하다',
  '무질서 속의 질서에 편안함을 느낀다', // J/P Question 1

  '조직이나 사회질서를 위해 존중되어야 한다',
  '사회를 억압하고 불편하게 느낄 때가 있다', // J/P Question 2

  '책임을 맡아 관리하며 판단을 잘 내린다',
  '적응력은 있으나 우유부단한 편이다', // J/P Question 3

  '단정하고 깔끔한 스타일을 선호한다',
  '개성있고 느슨한 스타일을 선호한다', // J/P Question 4

  '먼저 계획을 세워야 틀이 잡힌다',
  '관련 자료부터 조사해봐야 틀이 잡힌다', // J/P Question 5
]

var domQuestionNumber
var domQuestionStep
var domQuestionContent
var currentQuestionStep = 1
var userAnswer = {}
var domAnswerOne
var domAnswerTwo

window.addEventListener('DOMContentLoaded', function () {
  domQuestionNumber = document.getElementById('question-number')
  domQuestionStep = document.getElementById('question-step')
  domQuestionContent = document.getElementById('question-content')
  domAnswerOne = document.getElementById('answer-one')
  domAnswerTwo = document.getElementById('answer-two')

  setQuestion(currentQuestionStep)
  setAnswers(currentQuestionStep)
})

function setQuestion(step) {
  domQuestionNumber.innerText = 'Q' + step
  domQuestionStep.innerText = step + '/' + questions.length
  domQuestionContent.innerText = questions[step - 1]
  let el = document.querySelector(':focus')
  if (el) el.blur()
}

function setAnswers(step) {
  domAnswerTwo.innerText = answers[step * 2 - 1]
  domAnswerOne.innerText = answers[step * 2]
}

function onClicktry() {
  window.location.href = 'quiz.html'
}

function onClickAnswer(num) {
  userAnswer[currentQuestionStep] = num

  let e = 0
  let i = 0
  let s = 0
  let n = 0
  let f = 0
  let t = 0
  let p = 0
  let j = 0
  for (let x = 1; x < 21; x++) {
    var val = userAnswer[x]

    if (x < 6) {
      if (val == 2) i += 1
      else if (val == 1) e += 1
    } else if (x < 11) {
      if (val == 2) n += 1
      else if (val == 1) s += 1
    } else if (x < 16) {
      if (val == 2) f += 1
      else if (val == 1) t += 1
    } else if (x < 21) {
      if (val == 2) j += 1
      else if (val == 1) p += 1
    }
  }
  console.log(i)
  console.log(e)

  if (currentQuestionStep < questions.length) {
    setNextQuestion()
  } else {
    requestResult()
  }
}

function setNextQuestion() {
  ++currentQuestionStep
  setQuestion(currentQuestionStep)
  setAnswers(currentQuestionStep)
}

function calculateColorType() {
  let e = 0
  let i = 0
  let s = 0
  let n = 0
  let f = 0
  let t = 0
  let p = 0
  let j = 0
  for (let x = 1; x < 21; x++) {
    var val = userAnswer[x]

    if (x < 6) {
      if (val == 2) i += 1
      else if (val == 1) e += 1
    } else if (x < 11) {
      if (val == 2) n += 1
      else if (val == 1) s += 1
    } else if (x < 16) {
      if (val == 2) f += 1
      else if (val == 1) t += 1
    } else if (x < 21) {
      if (val == 2) j += 1
      else if (val == 1) p += 1
    }
  }

  let result =
    (i > e ? 'I' : 'E') +
    (n > s ? 'N' : 'S') +
    (f > t ? 'F' : 'T') +
    (j > p ? 'J' : 'P')

  return result
}

function requestResult() {
  window.location.href = 'result.html?type=' + calculateColorType()
}
