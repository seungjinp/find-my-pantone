const colorNameMap = {}
colorNameMap['INFJ'] = '세룰리안'
colorNameMap['INFP'] = '로즈 쿼츠'
colorNameMap['INTJ'] = '세레니티'
colorNameMap['INTP'] = '아쿠아 스카이'
colorNameMap['ISFJ'] = '블루 아이리스'
colorNameMap['ISFP'] = '리빙 코랄'
colorNameMap['ISTJ'] = '래디언트 오키드'
colorNameMap['ISTP'] = '클래식 블루'
colorNameMap['ENFJ'] = '그리너리'
colorNameMap['ENFP'] = '코넬 레드'
colorNameMap['ENTJ'] = '마르살라'
colorNameMap['ENTP'] = '리빙 코랄'
colorNameMap['ESFJ'] = '에메랄드'
colorNameMap['ESFP'] = '미모사'
colorNameMap['ESTJ'] = '샌드 달러'
colorNameMap['ESTP'] = '허니서클'

const keywordMap = {}
keywordMap['INFJ'] = '15-4020'
keywordMap['INFP'] = '13-1520'
keywordMap['INTJ'] = '15-3919'
keywordMap['INTP'] = '14-4811'
keywordMap['ISFJ'] = '18-3943'
keywordMap['ISFP'] = '16-1546'
keywordMap['ISTJ'] = '18-3224'
keywordMap['ISTP'] = '19-4052'
keywordMap['ENFJ'] = '15-0343'
keywordMap['ENFP'] = '19-1664'
keywordMap['ENTJ'] = '18-1438'
keywordMap['ENTP'] = '16-1546'
keywordMap['ESFJ'] = '17-5641'
keywordMap['ESFP'] = '14-0848'
keywordMap['ESTJ'] = '13-1106'
keywordMap['ESTP'] = '18-2120'

const colorHexCode = {
  INFJ: '#8CA4CF',
  INFP: '#F7CACA',
  INTJ: '#93A9D1',
  INTP: '#7AC5C5',
  ISFJ: '#5B5EA6',
  ISFP: '#F7CAC9',
  ISTJ: '#B565A7',
  ISTP: '#0F4C81',
  ENFJ: '#88B04B',
  ENFP: '#B31B1B',
  ENTJ: '#955251',
  ENTP: '#FF6F61',
  ESFJ: '#169C78',
  ESFP: '#F0BF59',
  ESTJ: '#DECDBF',
  ESTP: '#D65076',
}

const resultDesc = {
  INFJ: '다재 다능한 인기쟁이, 로즈쿼츠 핑크!<br/><br/>아름다운 석영의 분홍빛을 닮은 당신은 다른 사람들과 금세 친해지고 사람들을 잘 챙깁니다. 이런 면모 때문에 사람들은 당신을 유한 사람이라고 생각하지만, 당신의 내면은 주관이 뚜렷하고 강단이 있을 가능성이 높습니다. 원하는 목표가 있다면 어느 정도의 손해는 당연히 감수하여야 한다고 생각하겠네요. <br/><br/>개방적인 빨강색보다는 조금은 더 보수적인, 보라색이 일부 섞인 분홍색이 당신에게 어울립니다. 또한 자신의 의견을 관철하면서 뚜렷한 목표가 있는 분홍색은 어쩌면 스스로를 믿을 수 있는 원천이 하나씩 있을 것 같네요. 그러나 이런 점이 누군가에게는 ‘무얼 믿고 저렇게 나서지?’ 라는 느낌을 줄 수 있겠군요. 남들과 의견을 나눌 때 조금만 더 나의 원천을 보여주는 건 어떨까요?<br/><br/><br/>세상사에 염세적인 모래색을 닮은 사람들과는 부딪힐 수가 있어요~ 잘난 내가 더 노력해보죠. 그리고 목표를 이루고자 할 때 열정적인 레드를 닮은 사람들과 잘 어울리겠네요. 또 의외로 내향적이지만 지적인 은색을 존중할 가능성이 높습니다.',
  INFP: '파워레인저 주인공은 항상 레드였죠. 이 테스트를 만든 사람의 학교 상징색도 빨간색이라서 이름을 저렇게 붙인건..맞아요..흠흠.. 아무튼, 빨강 하면 떠오르는 이미지, 당신도 알고 있어요. 타인을 위해 희생할 줄 알지만 목표를 위해서라면 그 누구보다 열정적으로 노력하는 당신은 빨강을 닮았군요! 그리고 빨강을 닮은 당신은 누구에게나 사랑받을 준비가 되어있습니다. 왜냐하면 타인에게 과감하게 자신의 감정을 솔직하게 말하니 따를 수밖에 없네요. <br/><br/>그런데 눈 앞의 목표를 위해 달려가고 노력하는 것이 지치지는 않나요? 많은 사람들이 좋아해주고 당신도 사람들에게 이타적이기 때문에 버틸 수야 있지만, 마치 경주마가 달릴 때 다른 것을 보지 못하도록 차안대로 가려진 것처럼 외향적인 나에 가려져 더 중요한 것을 놓칠 수 있어요. 조금만 혼자만의 시간을 가져보아요.<br/><br/>이런 당신에게는 새삼 비협조적이고 목표만을 위해 달리는 과묵한 미드나잇 블랙과는 맞지 않겠네요. 물론 이런 사람도 당신은 잘 지내는 척 지낼 수 있겠죠~ 하지만 다크 히어로와 히어로는 대척점인 것! 반면에 언제나 나와 비슷한 핑크를 닮은 사람이나 언제나 누군가를 보듬어주는 브라운과 잘 맞겠네요. 그럼 오늘도 열심히!',
  INTJ: '차가운 금속을 닮은 당신은 겨울의 은색을 닮았어요. 멋들어진 은색 안경을 쓴 사서 같은 사람이 떠올라요. 이성과 지혜를 통해 행동한다는 뜻인 ‘이지적이다’라는 말을 아시나요? 은색을 닮은 당신은 이 단어와 어울려요. 이런 당신을 어쩌면 다른 사람들이 굉장히 어려워할 수 있을 것 같아요.<br/><br/>어려운 이미지이지만 사회생활을 못한다는 뜻은 아니어요. 당신은 어려워 보이지만 타인을 위한 배려도 갖추었거든요. 지혜로 맞서기 때문에 언제나 두려울 것이 없어요. 무엇이든 효율적으로 척척 해내지 않나요? 그렇지만 불필요한 시간 낭비를 싫어해서 가끔은 차가운 모습을 내비칠 수 있겠네요. 가끔은 비효율적이라도 타인의 사담을 더 들어줘요. 카리스마 있지만 좀 더 부드럽고 따스한 사람이 되어보는 것이 어떨까요?<br/><br/>당신은 딱 따뜻한 분홍색을 닮은 사람과 어울립니다. 차가운 나를 따뜻하게 해주는 귀염둥이 분홍색을 닮은 사람과 잘 지내봐요. 자신의 말이 중요한 세이지 그리너리와는 맞지 않을 수 있어요. 그래도 사람을 무시해선 안돼요, 알았죠?',
  INTP: '흘러가는 물은 유하지만 거스를 수 없죠.<br/><br/>물색을 닮은 당신은 다소 내성적이지만 다른 사람들에게 굉장히 협조적입니다. 그러다 보니 사회적 약자나 소외되는 사람에게 관심을 가져주는 착한 사람이군요. 그렇지만 흘러가는 물은 유하지만 거슬러 흐를 수 없듯이 자신의 목표를 뚜렷하게 가지고 이루기 위해 노력하는 사람들일 가능성이 높습니다. 또한 굉장히 섬세한 편이어서, 자의가 아니게 눈치를 많이 볼 것 같네요.<br/><br/>물은 누구나 뛰어들 수 있고 잔잔한 수면위에 누군가 돌을 던져 파동을 일으킬 수 있습니다. 즉, 다른 사람들의 영향을 많이 받고 상처를 쉽게 받을 것이에요. 그러니 조심하세요. 누군가에게 반하면 크게 데어버려요. 이런 물색을 닮은 당신에게 제가 드릴 수 있는 말은 ‘너무 신경 쓰지 마. 너는 충분히 할 수 있어.’ 목표를 이루려고 노력하지만 외부 요인을 많이 받으니 괴롭겠지만 힘내세요~<br/><br/>유하고 노력하는 당신에게는 항상 근면성실하고 본받을 점이 있는 세룰리안 스카이를 닮은 사람이 어울립니다. 하늘색을 닮은 사람들과는 비슷한 면이 있고 같은 목표를 가지고 있는 가능성이 높거든요. 그러나 완전히 초록빛을 도는 에메랄드 그린을 닮은 사람들과는 잘 맞지 않을 것이에요. 타협이 잘 안 된다고 생각할 것이기 때문이에요.',
  ISFJ: '자발적 아웃사이더, 남에게 관심이 별로 없는 당신은 차가운 클래식 블루! 평소엔 조용하고 과묵하지만, 뭔가 해야 할 일이 있다면 당신의 논리적, 분석적 비평 능력으로 문제를 해결하기 좋아하는 편이에요. 개인적인 인간관계나 친목에는 큰 관심이 없기 때문에 먼저 대화를 시작하지 않는 편이지만, 관심이 있는 분야에 대해서는 말을 많이 하며, 자기가 좋아하는 일에 대해선 생각이 샘솟는 아이디어 뱅크! 본인을 알아주는 환경을 만나면 누구보다 독창적이면서 가능한 모든 경우의 수를 빠짐없이 고려한 해결책을 내놓을 수 있어요. 그러나 가끔씩 찾아오는 끝없는 추상적이고 비현실적인 생각들 때문에 계획을 짜 놓고도 즉흥적으로 행동하는 면은 조심! 상세한 계획을 늘어놓기보다는 큰 틀 하나를 설정한 뒤 그것을 벗어나지 않는 수준에서 즉흥적으로 행동할 수 있도록 하는 것이 오히려 효과적일 수 있어요. SNS를 왜 하는지 잘 모르겠고, 인스타는 그저 지인들 비상 연락용인 비공개 계정인 경우가 많아요. 그렇다고 지인들에게 연락을 먼저 하는것도 아니죠. 감정을 왜 꼭 표현해야 하는지 필요성을 잘 못 느끼지만, 풍부한 감수성과 뚜렷한 자기주관 덕분에 할 말이 있으면 끝까지 해요.  뚜렷한 논리와 객관성을 가지고 대화 하는 게 좋아서 감정적인 사람과의 대화는 어렵지만, 누구와도 잘 맞는 친근한 아쿠아 마린색과 잘 어울릴 수 있겠네요. 말하지 않아도 자신의 감정을 알아주길 바라는 옐로우와는 서로 피해주길 바라요.',
  ISFP: '많은 사랑을 받고 사는 산뜻한 코랄 오렌지! 인싸중의 인싸라서 사람들이 자연스럽게 당신을 좋아해요. 인류애가 가득해서 세상 사람들을 잘 배려해 주면서도, 너무 진지하지 않고 항상 재미있고 신나는 사람이라 어딜 가든 톡톡 튀는 사람이에요. 열정적인 빨강색보다 유하고 자애로워서 자유로운 영혼의 소유자처럼 보이네요. 인기가 너무 많다 보니 여기저기서 당신을 부르거나 많이 얘기하고 있어요.<br/><br/>정이 많고 배려심이 넘쳐흘러서 ‘사람좋다’는 얘기를 많이 들어보지 않았나요? 정말로 주황색을 닮은 당신은 친구가 되기 쉬워요. 하지만 너무 틀에 박히고 지루한 작업은 조금 힘들게 느껴져요. 또 즉흥적인 편이고 타인의 얘기를 잘 들어주는 편이라 자유롭지 않으면 너무 숨이 막혀요. 그렇지만 언제까지나 즐거울 수 없어요. 또 건설적인 작업이나 이야기에서 단점이 보이기 때문에 조금만 더 진지하게 고민해보거나 계획을 좀 더 세워보는 것이 어떨까 싶네요.<br/><br/>누구에게나 친근하고 잘 지낼 자신이 있는 당신이지만, 이런 당신을 못마땅하게 여기는 사람들이 있어요. 예를 들어 진취적인 발전을 원하는 금색을 닮은 사람들이 당신을 피할 가능성이 있어요. 하지만 그 외에는 정말로 당신을 좋아해주는 사람들이 많아요. 굳이 천생연분을 꼽을 수는 없을 정도로 사랑받는 사람이란 걸 잊지 마세요~',
  ISTJ: '인생은 아름다워~ 매사에 긍정적이고 사교적인 당신은 래디언트 오키드! 천성적으로 타고난 리더인 당신은 충만한 열정과 낙천적인 태도로 잔잔히 퍼져나가는 물길처럼 모두에게 영향을 줘요. 모임을 좋아하며 대화를 적극적으로 잘 이끌어 나가고, 다른 사람에게 어려움이 될 수 있는 말은 하지 않아서 주변 사람들에게 말을 부드럽게 잘 한다는 평가를 자주 받아요. 재치 있고 영리하고 개방적이면서 유행에 민감해서 가끔 충동적인 경향이 있고 성격이 급한 모습을 보여줘요. 연민과 동정, 이해심이 많지만 가끔 타인의 삶에 지나치게 관여하는 우주 최강 오지라퍼! 질서있고 평화로운 세계를 위해 내가 원하는 방향으로 모두를 움직여요. 당신은 경쟁적이고 긴장감이 있는 환경보단, 모두가 함께 일하며 더 밝은 미래를 꿈꾸는, 어떻게 보면 조금은 비현실적인 목표를 바라보며 같이 일하는 세계를 선호하죠. 가끔은 현실을 냉정하고 객관적으로 바라볼 필요도 있어요. 하지만 당신같은 사람이 존재하니 아직 세상이 따뜻하다고 느끼는 거겠죠? 평소엔 조용하지만 필요할때 누구보다 당신을 잘 따를 옐로우와 잘 지낼거에요. ',
  ISTP: '누구에게나 다정한 당신은 편안한 마살라 브라운을 떠올리게 해요. 동정심과 동료애가 많기 때문에 다른 사람의 감정을 잘 캐치하고 공감도 잘해줍니다. 따뜻한 마음을 가졌으며 호감을 사기 쉬운 타인과 함께 지내며 그들을 배려하는 것에 행복감을 느껴요! 사람들과의 기억을 소중히 간직하기 때문에 한번 썰파티가 시작되면 끝없는 TMI 분출...! 안 그런 척 하면서도 은근 다른 사람들이 자신의 친절함을 고마워하고 관심을 주길 바라기 때문에, 불친절이나 무관심에 쉽게 주눅들며 인류애가 떨어져요. 타인도 자신을 배려하고 존중해주는 마음을 가지길 원하기 때문에 가끔 상대방이 간섭이 많다고 느낄 수 있어요. 서로 존중하는 깊은 관계가 좋아요. 가벼운 연애할 거라면 다가오지 말아 주세요! 타인의 시선에 민감하게 반응하기 때문에 자존감이 변덕스러워요. 피드백과 갈등에 민감하기 때문에 자신과 비슷하지만 조금 더 외향적인 오키드색과 궁합이 잘 맞아요. !!',
  ENFJ: '입만 열면 무지개가 튀어나온다! 유혹에 약하고 흥미 위주의 놀이가 좋은 즉흥적인 당신, 싱그러운 세이지 그리너리가 떠오르네요. 단순하지만 그만큼 개방적이고 자유분방해요. 갑자기 하고싶은게 생겼다면 오늘 할 일을 내일로 미루고 마감 직전 처리할 수 있는 능력자! 항상 자신감이 넘치고 적극적이며 순발력이 뛰어나요. 하지만 생각 없이 살고있는건 아니랍니다? 은근히 성취욕과 경쟁심이 강해서 해야할 땐 누구보다 뛰어난 모습을 보여주죠. 남의 페이스에 맞춰 이야기를 들어주기 보단 자신이 흥미 있는 것에 대해 이야기하는게 더 재밌어요. 개방적이고 선입견이 없는 만큼 자신의 감정을 표현하는데 필터링이 없기 때문에, 상대에게 상처주는걸 조심해야해요. 남에게 큰 관심도 없을 뿐더러 자신의 기준이 확고한 클래식 블루와는 맞지 않아요. 이야기를 잘 들어주며 진솔한 인간관계를 만들어나가는 퍼플색과 함께하도록 해요. ',
  ENFP: '뭘 해도 잘 하겠다는 소리 들어봤죠?<br/><br/>항상 반짝이는 금처럼, 자신이 관심있는 분야에서 항상 황금기를 보이는 당신에게는 리치 골드가 어울려요. 당신을 나타낼 만한 금색을 디지털로 표현할 수 없어서 슬퍼지네요. 그런데, 정말 뭘 해도 잘 하겠다는 소리 안 들어봤나요? 진취적인 당신은 어떤 분야에서도 마음먹으면 잘할 것처럼 보이거든요.<br/><br/>금색을 닮은 당신이 선택한 문항들을 보면 외향적이고, 효율적이고, 목표를 위해서 과감하게 의사결정을 할 수 있는 사람이군요. 이 정도로 타고나니 조직에서 리더를 한다면 더 멋진 사람이 되겠네요. 하지만 자신이 느끼기에 일을 못하는 사람이나 아무 생각 없어 보이는 사람을 너무 미워하진 마세요. 이 세상에서 완벽한 사람은 없어요~ 누구나 각자의 사정이 있고, 나와 달리 처리 속도가 느린 사람이 많아요. <br/><br/>제가 생각하기에 성과에 연연하지 않지만 인정이 많은 사람을 싫어할 것 같아요. 왜냐하면 당신이 느끼기엔 이런 사람은 영양가가 없는데 사람들이 좋아해서 일할 때 오히려 거슬릴 수 있어요. 그러니 조금 어수룩하지만 사람은 좋은 주황색을 닮은 사람과 잘 맞지 않고, 자기 자신과 비슷하거나 똑같이 일 잘하는 검정색과 닮은 사람과 친하게 지내겠네요.',
  ENTJ: '무심함, 이성적의 결정체 미드나잇 블.랙.<br/><br/>세상 사는 사람들에게 너무 무심해요. 큼큼 다른 색상과 닮은 사람들과 달리 비판적으로 설명을 시작했네요. 하지만 당신은 멋지고 전공분야에서 잘나갈 사람이에요. 인간에 대해 별 생각을 하지 않아서 이타적이지도 않고, 막상 엄청나게 이기적이지도 않은 무채색의 사람. 당신은 무채색인 검정색을 닮았습니다.<br/><br/>그러나 항상 자신의 전공분야에 있어서 효율적이고 자신의 주관이 뚜렷하기 때문에 잘해내는 편이에요. 어쩌면 연구직에 잘 맞는 사람이라고도 볼 수 있겠네요. 또한 합리적인 사고를 중시하기 때문에 뭐든지 근거에 기반하여 생각하는 습관이 있을지도 몰라요. 이런 글을 읽어도 신뢰하지 않을 당신은 좀 다채색인 사고를 할 필요가 있을 것 같아요.<br/><br/>당신은… 딱히 세상사에 무관심하기 때문에 딱히 잘 지내거나 못 지내는 사람이 없을 것 같네요. 어차피 별 관심이 없는데 왜 잘 지내고 못 지내고가 있을까요? 하지만 당신을 꽤 아낄 만한 금색과 더 잘 지낼 수 있겠다는 생각이 드네요.',
  ENTP: '세상을 이루는 하늘색처럼 세룰리안 스카이를 닮은 사람들이 사회를 많이 이루고 있어요.<br/><br/>흐음... 이 유형의 사람들은 사실 저의 평가에 대해서 어떤 쪽이든 별로 상관 안 하는 분들일 것 같네요. 애초부터 별 생각이 없었고 해보라고 해서 해보는 경우가 많아요. 그럼에도 불구하고 감히 말씀을 드리자면, 하늘색을 닮은 당신은 사회를 이루는 존재인만큼 근면성실한 장점이 있어요. 과정이 어떻게 되든 목표를 이루려 하는 모습 또한 일 잘하는 사람으로 비쳐질 것이에요. 천상 회사원이라고 할까요?<br/><br/>근면성실한 당신은 많은 사람들이 항상 존재하는 하늘처럼 미워하지 않을 것이에요. 그러나 남들이 나를 어떻게 생각하든 마냥 남들에게 쉽게 마음속 자리를 내어주지 않아요. 또 하늘색을 닮은 당신은 스스로를 너무 평범한 사람이라고 여기고 있는 것 같아요. 이 세상에서 나는 단 하나뿐인 개체이며 특별한 존재입니다. 조금만 더 자신감을 키워보세요!<br/><br/>하늘색을 닮은 분들에게는 똑같이 세상을 이루는 물을 닮은 사람들이 잘 어울리겠네요. 마냥 나서지 않으면서도 목표의식이 뚜렷한 물을 닮은 사람들이 나와 같은 뜻을 가지고 있을 가능성이 높아요. 반면에 오히려 나에게 협조를 잘 하지 않을 사람으로는 자신의 색이 뚜렷한 오키드색을 닮은 사람들이 있겠네요. 이만 오늘하루도 힘내세요!',
  ESFJ: '전체적으로 차분한 성격. 말이 느린 편이고 늘 신중해요. 차가워 보이는 이미지인데 막상 친해지면 의외로 능글! 겉으로는 무덤덤해 보여도 속으로는 혼자 생각이 너무 많아요. 한결같이 진지한 사람.. 책임감이 너무 많아서.. 장남 장녀같은 느낌. 규칙에 엄격한 사람이라 살짝 꼰대 같은...? 보수적인...?',
  ESFP: '숨겨진 내적 관종인 당신에게는 수줍게 고개를 내미는 미모사꽃의 옐로우가 어울려요. 남의 시선을 엄청나게 의식하기 때문에 평소엔 최대한 조용히 지내는데, 막상 다 같이 놀러가거나 무대가 마련해 진다면 관심을 받고싶어요! 대놓고 다른사람의 관심을 좋아하지만, 낯가림과 눈치보는 능력때문에 평소엔 티가 잘 나지 않죠. 무의미하게 단체로써 보내야 하는 시간을 싫어하고, 감수성이 풍부해서 혼자 생각할 시간이 꼭 필요해요. 혹시 다같이 놀다가 갑자기 현자타임이 찾아오진 않나요..? 계획을 짜는 행위를 귀찮아 할 수 있지만, 정작 확고한 계획 없이는 마음이 불편해서 꼭 스케줄을 미리 짜 놔야 해요. 인간관계는 좁고 깊게, 친하고 마음 맞는 사람이랑만 유지하는걸 좋아해요. 감수성이 풍부하고 공감을 잘해서 상담하는걸 참 좋아하는데, 문제는 상담해 주다가 상대의 기분에 너무 심하게 이입해서 해답이 나오지 않아요... 내가 말하지 않아도 내 기분을 알아줄 인류애 넘치는 사람들과 가까이 지내기 때문에, 논리적이고 객관적인 클래식 블루와는 맞지 않아요. 자신의 숨은 관종끼를 발굴해줄 세이지 그리너리와는 최고의 친구!',
  ESTJ: '인생에서 제습기가 너무 많이 돌았네요. 건조한 모래와 같은 당신은 염세적인 사람일 가능성이 높아 보여요. 그렇지만 세상을 혼자 살아가기엔 모자람이 없는 사람이죠. 왜냐하면 맡은 바의 일은 잘하는 사람이고, 정해진 규율을 잘 따르거든요. 진취적인 사람과는 다르게 뭐든지 정해진 대로 세상사 그냥 정해진대로 흘러가는 것이 맞을 것이에요.<br/><br/>건조한 삶을 보내는 당신은 어찌 보면 조용하고 의젓해 보여서 의지가 많이 되는 사람이기도 하지만 사람이 마냥 덤덤할 수는 없지요. 무덤덤해 보여도 새로운 환경이나 익숙하지 않은 것에는 속으로는 불편함을 꽤나 느끼고 있죠? 속으로만 불편해하고 노력하는 것보다 조금 더 드러내어 보세요. 내가 생각했던 것보다 사람들은 더 많이 자신을 내비쳐요. 참다가 말하는 것보다 좀 더 나를 드러내는 것이 속이 편해질 것이에요.<br/><br/>당신에게는 항상 밝고 이유없이 주목받는 것처럼 보이는 분홍색을 닮은 사람과 잘 안 맞을 수 있어요. 반면에 항상 사람 좋은 주황색을 닮은 사람들은 건조한 당신도 잘 보듬어줄 것이에요.',
  ESTP: '나는 사람들이랑 친해지는 데 오래 걸려요. 하지만 관계 정리는 칼 같이! 남 일에 눈치 안보고 늘 무신경한 나지만 하나 꽂히면 깊게 빠져들어요! 혼자 있는 것을 제일 좋아합니다! 완전한 개인주의자! 약간의 관종끼가 있지만 내성적이라 표출 하지 않아요! 표현을 하지 않아도 츤데레의 느낌과 의외로 허당의 모습이 보여요! 항상 완벽을 추구하는 스타일이라 세세한 계획 세우는 것을 좋아해요. 어떤 것에 대해 다양한 각도로 해석하는 걸 좋아하고 수다 떠는 것을 좋아해요! 사실과 원리원칙을 중요시 하고, 돈 관리를 매우 잘합니다!',
}

const intimacyMap = {
  INFJ: 'INTJ', // silver
  INFP: 'ISTP', // brown
  INTJ: 'INFJ', // pink
  INTP: 'ENTP',
  ISFJ: 'ESFJ',
  ISFP: 'INFP', // O
  ISTJ: 'ESFP',
  ISTP: 'ISTJ',
  ENFJ: 'ESTP',
  ENFP: 'ENTJ',
  ENTJ: 'ENFP',
  ENTP: 'INTP',
  ESFJ: 'INTP',
  ESFP: 'ENFJ',
  ESTJ: 'ISFP',
  ESTP: 'ENFP',
}

const rivalMap = {
  INFJ: 'ESTJ', // sand
  INFP: 'ENTJ', // black
  INTJ: 'ENFJ', // lightgreen
  INTP: 'ESFJ',
  ISFJ: 'ESFP',
  ISFP: 'ENFP',
  ISTJ: 'ENTP',
  ISTP: 'ESTP',
  ENFJ: 'ISFJ',
  ENFP: 'ISFP',
  ENTJ: 'INFP', // O
  ENTP: 'ISTJ',
  ESFJ: 'INTP',
  ESFP: 'ISFJ',
  ESTJ: 'INFJ', // pink
  ESTP: 'INFP',
}

var type

window.addEventListener('DOMContentLoaded', function () {
  let params = new URL(document.location).searchParams
  type = params.get('type')

  let domKeywordLabel = document.getElementById('result-keyword')
  domKeywordLabel.innerHTML = keywordMap[type] + '&nbsp'

  let domColorNameText = document.getElementById('result-color-text')
  domColorNameText.innerText = colorNameMap[type]
  domColorNameText.style.color = colorHexCode[type]

  let domColorImage = document.getElementById('result-image-color')
  domColorImage.style.backgroundColor = colorHexCode[type]

  // let domCmykText = document.getElementById('cmyk-code')
  let domRgbText = document.getElementById('rgb-code')
  let domHexText = document.getElementById('hex-code')
  let rgb = hexToRgb(colorHexCode[type])
  // let cmyk = rgb2cmyk(rgb.r, rgb.g, rgb.b, false)
  // domCmykText.innerText = cmyk.c + ' ' + cmyk.m + ' ' + cmyk.y + ' ' + cmyk.k
  domRgbText.innerText = rgb.r + ' ' + rgb.g + ' ' + rgb.b
  domHexText.innerText = colorHexCode[type]

  let domDescLabel = document.getElementById('result-desc')
  domDescLabel.innerHTML = resultDesc[type]

  let domIntimacyColorImage = document.getElementById('intimacy-image-color')
  domIntimacyColorImage.style.backgroundColor = colorHexCode[intimacyMap[type]]

  let domRivalColorImage = document.getElementById('rival-image-color')
  domRivalColorImage.style.backgroundColor = colorHexCode[rivalMap[type]]

  if (intimacyMap[type]) {
    let domIntimacyName = document.getElementById('intimacy-name')
    domIntimacyName.innerHTML =
      keywordMap[intimacyMap[type]] + '&nbsp' + colorNameMap[intimacyMap[type]]
  } else {
    let domIntimacyImage = document.getElementById('intimacy-image')
    domIntimacyImage.style.display = 'none'
  }

  if (rivalMap[type]) {
    let domRivalName = document.getElementById('rival-name')
    domRivalName.innerHTML =
      keywordMap[rivalMap[type]] + '&nbsp' + colorNameMap[rivalMap[type]]
  } else {
    let domRivalImage = document.getElementById('rival-image')
    domRivalImage.style.display = 'none'
  }

  let imageKeyWord = keywordMap[type] + ' ' + colorNameMap[type]
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', imageKeyWord)
  let imageUrl =
    'resources/300x150-' +
    colorHexCode[type].substr(1, colorHexCode[type].length - 1).toLowerCase() +
    '.png'
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', imageUrl)

  Kakao.Link.createDefaultButton({
    container: '#share-color',
    objectType: 'feed',
    content: {
      title: 'Discover Color',
      description: imageKeyWord,
      imageUrl: 'https://seungjinp.github.io/personality-test/' + imageUrl,
      link: {
        mobileWebUrl: location.href,
        webUrl: location.href,
      },
    },
    buttons: [
      {
        title: '나랑 닮은 색상 찾기',
        link: {
          mobileWebUrl: location.href,
          webUrl: location.href,
        },
      },
    ],
  })
})

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

var rgb2cmyk = function (r, g, b, normalized) {
  var c = 1 - r / 255
  var m = 1 - g / 255
  var y = 1 - b / 255
  var k = Math.min(c, Math.min(m, y))

  c = (c - k) / (1 - k)
  m = (m - k) / (1 - k)
  y = (y - k) / (1 - k)

  if (!normalized) {
    c = Math.round(c * 10000) / 100
    m = Math.round(m * 10000) / 100
    y = Math.round(y * 10000) / 100
    k = Math.round(k * 10000) / 100
  }

  c = isNaN(c) ? 0 : c
  m = isNaN(m) ? 0 : m
  y = isNaN(y) ? 0 : y
  k = isNaN(k) ? 0 : k

  return {
    c: c,
    m: m,
    y: y,
    k: k,
  }
}

function onClickRetry() {
  window.location.href = 'index.html'
}
