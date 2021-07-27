const questions = [
  '나는 주변의 의견을  잘 받아들이는 편이다.',
  '나는 조별과제를 할 때 최대한 편의를 맞추기 위해 노력한다.',
  '나는 어느 정도 타협이 있어야 이 세상이 살기 편하다고 생각한다.',
  '나는 친구를 위해 작은 배려를 하는 건 무리가 아니라고 생각한다.',
  '나는 종종 사회적 약자를 위해 할 수 있는 것을 생각해보고는 한다.',
  '나는 대를 위해서 소를 희생할 수밖에 없는 경우를 이해한다.',
  '나는 과정이 어떻게 되더라도 결과물을 완성하도록 노력한다.',
  '나는 줄곧 어떻게 하면 효율적으로 일할 수 있는지 고민하곤 한다.',
  '나는 항상 자신의 목표를 위해 만반의 준비를 해 둔다.',
  '나는 친구들과 여행을 갈 때 주로 사진을 남겨두는 편이다.',
  '나는 사람들과 어울림을 통해 에너지를 충전한다.',
  '나는 주변의 지지와 인정을 통해 자존감을 채울 때가 있다.',
  '나는 혼자서도 충분히 행복하다고 느끼며 내 자신이 가장 중요하다.',
  '나는 자유로운 사색을 통해 마음속 감정을 정리하고는 한다.',
  '나는 자주 세상에 안 될 것은 없다고 느낀다.',
  '나는 나 자신의 관념이 투철하다.',
  '나는 크게 심리가 흔들리는 경우는 몇 없다.',
  '나는 언제라도 의사결정을 되돌릴 수 있다.',
  '나는 미지의 영역에 대해서 두려움보다 기대감이 크다.',
  '나는 타인의 의견을 잘 경청한다.',
]

var domQuestionNumber
var domQuestionStep
var domQuestionContent
var currentQuestionStep = 0
var userAnswer = {}

window.addEventListener('DOMContentLoaded', function () {
  domQuestionNumber = document.getElementById('question-number')
  domQuestionStep = document.getElementById('question-step')
  domQuestionContent = document.getElementById('question-content')

  setQuestion(currentQuestionStep)
})

function setQuestion(step) {
  domQuestionNumber.innerText = 'Q' + (step + 1)
  domQuestionStep.innerText = step + 1 + '/' + questions.length
  domQuestionContent.innerText = questions[step]
  let el = document.querySelector(':focus')
  if (el) el.blur()
  document.getElementById('previous-question').style.display =
    currentQuestionStep == 0 ? 'none' : 'block'
}

function onClicktry() {
  window.location.href = 'quiz.html'
}

function onClickAnswer(num) {
  userAnswer[currentQuestionStep] = num

  if (currentQuestionStep < questions.length - 1) {
    setNextQuestion()
  } else {
    requestResult()
  }
}

function setNextQuestion() {
  ++currentQuestionStep
  setQuestion(currentQuestionStep)
}

function setPrevQuestion() {
  if (currentQuestionStep > 0) {
    --currentQuestionStep
    setQuestion(currentQuestionStep)
  }
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

  for (let i = 0; i < 20; i++) {
    var val = userAnswer[i]

    if (i < 5) {
      if (val == 2) e += val
      else if (val == 1) i += val
    } else if (i < 10) {
      if (val == 2) s += val
      else if (val == 1) n += val
    } else if (i < 15) {
      if (val == 2) f += val
      else if (val == 1) t += val
    } else if (i < 20) {
      if (val == 2) p += val
      else if (val == 1) j += val
    }
  }

  let result =
    (e > i ? 'H' : 'B') +
    (s > n ? 'M' : 'G') +
    (f > t ? 'O' : 'N') +
    (j > p ? 'S' : 'X')

  return result
}

function requestResult() {
  window.location.href = 'result.html?type=' + calculateColorType()
}
