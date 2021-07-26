const colorNameMap = {}
colorNameMap['HMOS'] = '핑크'
colorNameMap['HMOX'] = '레드'
colorNameMap['HMNS'] = '실버'
colorNameMap['HMNX'] = '마린'
colorNameMap['HGOS'] = '블루'
colorNameMap['HGOX'] = '오렌지'
colorNameMap['HGNS'] = '오키드'
colorNameMap['HGNX'] = '브라운'
colorNameMap['BMOS'] = '그리너리'
colorNameMap['BMOX'] = '골드'
colorNameMap['BMNS'] = '블랙'
colorNameMap['BMNX'] = '스카이'
colorNameMap['BGOS'] = '그린'
colorNameMap['BGOX'] = '옐로우'
colorNameMap['BGNS'] = '베이지'
colorNameMap['BGNX'] = '퍼플'

const keywordMap = {}
keywordMap['HMOS'] = '로즈쿼츠'
keywordMap['HMOX'] = '코넬'
keywordMap['HMNS'] = '윈터'
keywordMap['HMNX'] = '아쿠아'
keywordMap['HGOS'] = '클래식'
keywordMap['HGOX'] = '코랄'
keywordMap['HGNS'] = '래디언트'
keywordMap['HGNX'] = '마살라'
keywordMap['BMOS'] = '세이지'
keywordMap['BMOX'] = '리치'
keywordMap['BMNS'] = '미드나잇'
keywordMap['BMNX'] = '세룰리안'
keywordMap['BGOS'] = '에메랄드'
keywordMap['BGOX'] = '미모사'
keywordMap['BGNS'] = '샌드'
keywordMap['BGNX'] = '허니서클'

const colorHexCode = {
  HMOS: '#F7CAC9',
  HMOX: '#B31B1B',
  HMNS: '#D1CED7',
  HMNX: '#7AC5C5',
  HGOS: '#0F4C81',
  HGOX: '#FF6F61',
  HGNS: '#B565A7',
  HGNX: '#955251',
  BMOS: '#88B04B',
  BMOX: '#BB9F52',
  BMNS: '#000000',
  BMNX: '#8CA4CF',
  BGOS: '#169C78',
  BGOX: '#F0BF59',
  BGNS: '#DECDBF',
  BGNX: '#EAE86F',
}

const resultDesc = {
  HMOS: '혹시… 당신은 다재 다능한 인기쟁이…?<br/><br/>분홍을 닮은 당신은 다른 사람들과 금세 친해지고 사람들을 잘 챙깁니다. 이런 면모 때문에 사람들은 당신을 유한 사람이라고 생각하지만, 당신의 내면은 주관이 뚜렷하고 강단이 있을 가능성이 높습니다. 원하는 목표가 있다면 어느 정도의 손해는 당연히 감수하여야 한다고 생각하겠네요. <br/><br/>개방적인 빨강색보다는 조금은 더 보수적인, 보라색이 일부 섞인 분홍색이 당신에게 어울립니다. 또한 자신의 의견을 관철하면서 뚜렷한 목표가 있는 분홍색은 어쩌면 스스로를 믿을 수 있는 원천이 하나씩 있을 것 같네요. 그러나 이런 점이 누군가에게는 ‘무얼 믿고 저렇게 나서지?’ 라는 느낌을 줄 수 있겠군요. 남들과 의견을 나눌 때 조금만 더 나의 원천을 보여주는 건 어떨까요?<br/><br/><br/>세상사에 염세적인 모래색을 닮은 사람들과는 부딪힐 수가 있어요~ 잘난 내가 더 노력해보죠. 그리고 목표를 이루고자 할 때 빨강색을 닮은 사람들과 잘 어울리겠네요. 또 의외로 내향적이지만 지적인 은색을 존중할 가능성이 높습니다.',
  HMOX: '만화에서 주인공은 항상 빨강이었죠. 빨강 하면 떠오르는 이미지, 당신도 알고 있어요. 타인을 위해 희생할 줄 알지만 목표를 위해서라면 그 누구보다 열정적으로 노력하는 당신은 빨강을 닮았군요! 그리고 빨강을 닮은 당신은 누구에게나 사랑받을 준비가 되어있습니다. 왜냐하면 타인에게 과감하게 자신의 감정을 솔직하게 말하니 따를 수밖에 없네요. <br/><br/>그런데 눈 앞의 목표를 위해 달려가고 노력하는 것이 지치지는 않나요? 많은 사람들이 좋아해주고 당신도 사람들에게 이타적이기 때문에 버틸 수야 있지만, 마치 경주마가 달릴 때 다른 것을 보지 못하도록 차안대로 가려진 것처럼 외향적인 나에 가려져 더 중요한 것을 놓칠 수 있어요. 조금만 혼자만의 시간을 가져보아요.<br/><br/>이런 당신에게는 새삼 비협조적이고 목표만을 위해 달리는 과묵한 검정색과는 맞지 않겠네요. 물론 이런 사람도 당신은 잘 지내는 척 지낼 수 있겠죠~ 하지만 다크 히어로와 히어로는 대척점인 것! 반면에 언제나 나와 비슷한 분홍색을 닮은 사람이나 언제나 누군가를 보듬어주는 고동색과 잘 맞겠네요. 그럼 오늘도 열심히!',
  HMNS: '차가운 금속을 닮은 당신은 은색을 닮았어요. 멋들어진 은색 안경을 쓴 사서 같은 사람이 떠올라요. 이성과 지혜를 통해 행동한다는 뜻인 ‘이지적이다’라는 말을 아시나요? 은색을 닮은 당신은 이 단어와 어울려요. 이런 당신을 어쩌면 다른 사람들이 굉장히 어려워할 수 있을 것 같아요.<br/><br/>어려운 이미지이지만 사회생활을 못한다는 뜻은 아니어요. 당신은 어려워 보이지만 타인을 위한 배려도 갖추었거든요. 지혜로 맞서기 때문에 언제나 두려울 것이 없어요. 무엇이든 효율적으로 척척 해내지 않나요? 그렇지만 불필요한 시간 낭비를 싫어해서 가끔은 차가운 모습을 내비칠 수 있겠네요. 가끔은 비효율적이라도 타인의 사담을 더 들어줘요. 카리스마 있지만 좀 더 부드럽고 따스한 사람이 되어보는 것이 어떨까요?<br/><br/>당신에게는 딱 따뜻한 분홍색을 닮은 사람과 어울립니다. 차가운 나를 따뜻하게 해주는 귀염둥이 분홍색을 닮은 사람과 잘 지내봐요. 하지만 오히려 자신의 의견이 중요한 연두색과는 맞지 않을 수 있어요. 그래도 사람을 무시해선 안돼요, 알았죠?',
  HMNX: '흘러가는 물은 유하지만 거스를 수 없죠.<br/><br/>물색을 닮은 당신은 다소 내성적이지만 다른 사람들에게 굉장히 협조적입니다. 그러다 보니 사회적 약자나 소외되는 사람에게 관심을 가져주는 착한 사람이군요. 그렇지만 흘러가는 물은 유하지만 거슬러 흐를 수 없듯이 자신의 목표를 뚜렷하게 가지고 이루기 위해 노력하는 사람들일 가능성이 높습니다. 또한 굉장히 섬세한 편이어서, 자의가 아니게 눈치를 많이 볼 것 같네요.<br/><br/>물은 누구나 뛰어들 수 있고 잔잔한 수면위에 누군가 돌을 던져 파동을 일으킬 수 있습니다. 즉, 다른 사람들의 영향을 많이 받고 상처를 쉽게 받을 것이에요. 그러니 조심하세요. 누군가에게 반하면 크게 데어버려요. 이런 물색을 닮은 당신에게 제가 드릴 수 있는 말은 ‘너무 신경 쓰지 마. 너는 충분히 할 수 있어.’ 목표를 이루려고 노력하지만 외부 요인을 많이 받으니 괴롭겠지만 힘내세요~<br/><br/>유하고 노력하는 당신에게는 항상 근면성실하고 본받을 점이 있는 하늘색을 닮은 사람이 어울립니다. 하늘색을 닮은 사람들과는 비슷한 면이 있고 같은 목표를 가지고 있는 가능성이 높거든요. 그러나 완전히 초록빛을 도는 초록색을 닮은 사람들과는 잘 맞지 않을 것이에요. 타협이 잘 안 된다고 생각할 것이기 때문이에요.',
  HGOS: '남에게 관심이 별로 없어요! 그래서인지 선 긋기의 달인! 그리고 인스타는 비공개 계정인 경우가 많아요! 연락도 먼저 잘 안 하죠. 말투는 조근조근하고 간결한 말투를 사용해요. 약간 기계 느낌..? 손재주가 뛰어나고 기계 조작을 매우 잘하는 공대생 스타일! 근데 은근 활동적인 것을 좋아해요(이다만 하기까지의 과정이 귀찮아) 꽂히는 건 무조건 해야 해요! 즉흥/충동적인 성격이라 프로 소비러! 아는 분야의 얘기에 신나서 말하고 관심 없으면 쳐다보지도 않는... 남 일에 간섭 안 해요. 그래서 나에게 간섭하면 진심으로 욕이 나와요. 피해 주는 것도 피해 받는 것도 너무 싫어요. 공감 능력이 조금.. 떨어지는.. 그래서 누군가 나에게 찡찡거리면 싫어요! 시끄러운 거 질색! 서론 본론- 결론 으로 대화 하는 게 좋아서 감정적인 사람과의 대화는 어려워요 (그래서 결론이 뭐야? 뭘 말하고 싶은데?) 내가 좋아하는 사람은 분석하고 모르는 건 알아내려고 해요. 그래서 호감이 있는 상대에게는 물음표로 끝나죠. 솔직한 사람! 내숭 없는 사람! 부담스럽지 않은 사람! 친구든 이성이든 내가 먼저 좋아하면 호기심 가득! 관심 밖인 사람은 안중에도 없어요!',
  HGOX: '많은 사람들이 당신을 좋아해요. 인싸중의 인싸라고 할까요?<br/><br/>세상 사람들에게 배려하는 면모가 많이 보이고 항상 재미있고 신나는 사람이라 많은 사람들이 당신을 좋아해요. 당신은 톡톡 튀는 주황색을 닮았어요. 열정적인 빨강색보다 유하고 자애로워서 자유로운 영혼의 소유자처럼 보이네요. 인기가 너무 많다 보니 여기저기서 당신을 부르거나 많이 얘기하고 있어요.<br/><br/>정이 많고 배려심이 넘쳐흘러서 ‘사람좋다’는 얘기를 많이 들어보지 않았나요? 정말로 주황색을 닮은 당신은 친구가 되기 쉬워요. 하지만 너무 틀에 박히고 지루한 작업은 조금 힘들게 느껴져요. 또 즉흥적인 편이고 타인의 얘기를 잘 들어주는 편이라 자유롭지 않으면 너무 숨이 막혀요. 그렇지만 언제까지나 즐거울 수 없어요. 또 건설적인 작업이나 이야기에서 단점이 보이기 때문에 조금만 더 진지하게 고민해보거나 계획을 좀 더 세워보는 것이 어떨까 싶네요.<br/><br/>누구에게나 친근하고 잘 지낼 자신이 있는 당신이지만, 이런 당신을 못마땅하게 여기는 사람들이 있어요. 예를 들어 진취적인 발전을 원하는 금색을 닮은 사람들이 당신을 피할 가능성이 있어요. 하지만 그 외에는 정말로 당신을 좋아해주는 사람들이 많아요. 굳이 천생연분을 꼽을 수는 없을 정도로 사랑받는 사람이란 걸 잊지 마세요~',
  HGNS: '사교적 긍정적 낙천적 이라는 단어가 너무 잘 어울려요! 재치 있고 영리하고 개방적이면서 유행에 민감한 편이죠! 귀가 얇아서.. 충동적인 경향이 있고 성격이 급한 고집쟁이랍니다. 거절 못 하는 우주 최강 오지라퍼! 하고 싶은 건 다하는 성격이라 소액결제하고 미리에 나에게 맡기는~~~ 술자리는 무조건 참석! 겉으로는 순종적인 척 하지만 내가 즐길 수 있는 방향으로 모두를 움직여요. 일은 최대한 미루다가 온 우주의 집중력을 발휘해 한 번에 끝내버려요!',
  HGNX: '내성적인데 상황에 따라 변하는 나의 모습, 나도 날 잘 몰라.. 나서는 거 싫어해요! 하지만 관심은 좋아요! 다른 사람의 감정을 잘 캐치하고 공감도 잘해줍니다! 나는 배려왕! 인간관계가 좁지만 깊어요! 게으른 완벽주의자!! 계획 세우는 거 좋아! 계획 대로 해야 마음이 편해요! 늘 기억해 둘 것은 메모하는 습관. 전화가 오면 엄청 고민 후에 받아요! 무슨 재미로 사니?라고 모두들 말하지만 현재 난 매우 재밌어요! 쓸데없는 감정 소모가 제일 싫어요! 가벼운 연애할 거라면 다가오지 말아 주세요! 내 기준에서 벗어난 행동을 한다면 다시 보지 않아! 남 부탁 거절 못 하고 나도 부탁 잘 못해요. 남 들을 위하는 마음이 큰 만큼 잔소리도 많아요! 대놓고 말 못 하고 속앓이만 하니까 주의해 주세요! 아! 저에게 지나친 집중은 하지 말아 주세요!!',
  BMOS: '연술자리, 내기, 노는 거, 스릴, 등 흥미 위주의 놀이가 좋아요! 유혹에 약한 나! 즉흥적이고 자유분방해요! 생각이 단순하죠! 오늘 할 일을 내일로 미루고 마지막에 폭발적으로 처리해 버리는 나! 자신감이 넘치고, 성취욕이 강해요. 쉽게 욱하고 금방 까먹어버리는 뒤끝 없는 다혈질입니다! 흥미 있는 것에 적극적이고, 즉흥적이지만 순발력과 임기응변의 능력이 뛰어나요! 눈치가 빠르고 감정을 잘 캐치해요! 그리고 감정을 표현하는데 필터링이 없어요! 타인에 대한 선입견이 없고 개방적인 스타일입니다.',
  BMOX: '뭘 해도 잘 하겠다는 소리 들어봤죠?<br/><br/>항상 반짝이는 금처럼, 자신이 관심있는 분야에서 항상 황금기를 보이는 당신에게는 금색이 어울려요. 당신을 나타낼 만한 금색을 디지털로 표현할 수 없어서 슬퍼지네요. 그런데, 정말 뭘 해도 잘 하겠다는 소리 안 들어봤나요? 진취적인 당신은 어떤 분야에서도 마음먹으면 잘할 것처럼 보이거든요.<br/><br/>금색을 닮은 당신이 선택한 문항들을 보면 외향적이고, 효율적이고, 목표를 위해서 과감하게 의사결정을 할 수 있는 사람이군요. 이 정도로 타고나니 조직에서 리더를 한다면 더 멋진 사람이 되겠네요. 하지만 자신이 느끼기에 일을 못하는 사람이나 아무 생각 없어 보이는 사람을 너무 미워하진 마세요. 이 세상에서 완벽한 사람은 없어요~ 누구나 각자의 사정이 있고, 나와 달리 처리 속도가 느린 사람이 많아요. <br/><br/>제가 생각하기에 성과에 연연하지 않지만 인정이 많은 사람을 싫어할 것 같아요. 왜냐하면 당신이 느끼기엔 이런 사람은 영양가가 없는데 사람들이 좋아해서 일할 때 오히려 거슬릴 수 있어요. 그러니 조금 어수룩하지만 사람은 좋은 주황색을 닮은 사람과 잘 맞지 않고, 자기 자신과 비슷하거나 똑같이 일 잘하는 검정색과 닮은 사람과 친하게 지내겠네요.',
  BMNS: '무심함, 이성적의 결정체 검.정.색.<br/><br/>세상 사는 사람들에게 너무 무심해요. 큼큼 다른 색상과 닮은 사람들과 달리 비판적으로 설명을 시작했네요. 하지만 당신은 멋지고 전공분야에서 잘나갈 사람이에요. 인간에 대해 별 생각을 하지 않아서 이타적이지도 않고, 막상 엄청나게 이기적이지도 않은 무채색의 사람. 당신은 무채색인 검정색을 닮았습니다.<br/><br/>그러나 항상 자신의 전공분야에 있어서 효율적이고 자신의 주관이 뚜렷하기 때문에 잘해내는 편이에요. 어쩌면 연구직에 잘 맞는 사람이라고도 볼 수 있겠네요. 또한 합리적인 사고를 중시하기 때문에 뭐든지 근거에 기반하여 생각하는 습관이 있을지도 몰라요. 이런 글을 읽어도 신뢰하지 않을 당신은 좀 다채색인 사고를 할 필요가 있을 것 같아요.<br/><br/>당신은… 딱히 세상사에 무관심하기 때문에 딱히 잘 지내거나 못 지내는 사람이 없을 것 같네요. 어차피 별 관심이 없는데 왜 잘 지내고 못 지내고가 있을까요? 하지만 당신을 꽤 아낄 만한 금색과 더 잘 지낼 수 있겠다는 생각이 드네요.',
  BMNX: '세상을 이루는 하늘색처럼 하늘색을 닮은 사람들이 사회를 많이 이루고 있어요.<br/><br/>흐음 이 유형의 사람들은 사실 저의 평가에 대해서 어떤 쪽이든 별로 상관 안 하는 분들일 것 같네요. 애초부터 별 생각이 없었고 해보라고 해서 해보는 경우가 많아요. 그럼에도 불구하고 감히 말씀을 드리자면, 하늘색을 닮은 당신은 사회를 이루는 존재인만큼 근면성실한 장점이 있어요. 과정이 어떻게 되든 목표를 이루려 하는 모습 또한 일 잘하는 사람으로 비쳐질 것이에요. 천상 회사원이라고 할까요?<br/><br/>근면성실한 당신은 많은 사람들이 항상 존재하는 하늘처럼 미워하지 않을 것이에요. 그러나 남들이 나를 어떻게 생각하든 마냥 남들에게 쉽게 마음속 자리를 내어주지 않아요. 또 하늘색을 닮은 당신은 스스로를 너무 평범한 사람이라고 여기고 있는 것 같아요. 이 세상에서 나는 단 하나뿐인 개체이며 특별한 존재입니다. 조금만 더 자신감을 키워보세요!<br/><br/>하늘색을 닮은 분들에게는 똑같이 세상을 이루는 물을 닮은 사람들이 잘 어울리겠네요. 마냥 나서지 않으면서도 목표의식이 뚜렷한 물을 닮은 사람들이 나와 같은 뜻을 가지고 있을 가능성이 높아요. 반면에 오히려 나에게 협조를 잘 하지 않을 사람으로는 보라색을 닮은 사람들이 있겠네요. 이만 오늘하루도 힘내세요!',
  BGOS: '전체적으로 차분한 성격. 말이 느린 편이고 늘 신중해요. 차가워 보이는 이미지인데 막상 친해지면 의외로 능글! 겉으로는 무덤덤해 보여도 속으로는 혼자 생각이 너무 많아요. 한결같이 진지한 사람.. 책임감이 너무 많아서.. 장남 장녀같은 느낌. 규칙에 엄격한 사람이라 살짝 꼰대 같은...? 보수적인...?',
  BGOX: '엄청 조용한데 엠티나 다 같이 놀러 가면 춤추고 노래하고 싶어요!! 관종이지만 내성적이라 평소엔 티가 나지 않죠! 감수성이 풍부해서 혼자 생각할 시간이 꼭 필요해요.. 계획적인 거 좋아요! 일기도 안 밀리고 꾸준히 쓰는 나! 할 일은 미리미리! 모든 사람에게 다정하고 친절한 인간 겉바속촉! 친하고 마음 맞는 사람이랑만 노는 거 좋아해요! 섬세하고 예리하지만 가끔씩 나오는 허당미! 공감을 잘해서 상담 잘 해주는 데 문제는 상담해 주다가 상대의 기분에 너무 심하게 이입해요.. 나는 남들보다 좀 더 성숙하고 조용한 사람입니다!!',
  BGNS: '인생에서 제습기가 너무 많이 돌았네요. 건조한 모래와 같은 당신은 염세적인 사람일 가능성이 높아 보여요. 그렇지만 세상을 혼자 살아가기엔 모자람이 없는 사람이죠. 왜냐하면 맡은 바의 일은 잘하는 사람이고, 정해진 규율을 잘 따르거든요. 진취적인 사람과는 다르게 뭐든지 정해진 대로 세상사 그냥 정해진대로 흘러가는 것이 맞을 것이에요.<br/><br/>건조한 삶을 보내는 당신은 어찌 보면 조용하고 의젓해 보여서 의지가 많이 되는 사람이기도 하지만 사람이 마냥 덤덤할 수는 없지요. 무덤덤해 보여도 새로운 환경이나 익숙하지 않은 것에는 속으로는 불편함을 꽤나 느끼고 있죠? 속으로만 불편해하고 노력하는 것보다 조금 더 드러내어 보세요. 내가 생각했던 것보다 사람들은 더 많이 자신을 내비쳐요. 참다가 말하는 것보다 좀 더 나를 드러내는 것이 속이 편해질 것이에요.<br/><br/>당신에게는 항상 밝고 이유없이 주목받는 것처럼 보이는 분홍색을 닮은 사람과 잘 안 맞을 수 있어요. 반면에 항상 사람 좋은 주황색을 닮은 사람들은 건조한 당신도 잘 보듬어줄 것이에요.',
  BGNX: '나는 사람들이랑 친해지는 데 오래 걸려요. 하지만 관계 정리는 칼 같이! 남 일에 눈치 안보고 늘 무신경한 나지만 하나 꽂히면 깊게 빠져들어요! 혼자 있는 것을 제일 좋아합니다! 완전한 개인주의자! 약간의 관종끼가 있지만 내성적이라 표출 하지 않아요! 표현을 하지 않아도 츤데레의 느낌과 의외로 허당의 모습이 보여요! 항상 완벽을 추구하는 스타일이라 세세한 계획 세우는 것을 좋아해요. 어떤 것에 대해 다양한 각도로 해석하는 걸 좋아하고 수다 떠는 것을 좋아해요! 사실과 원리원칙을 중요시 하고, 돈 관리를 매우 잘합니다!',
}

const intimacyMap = {
  HMOS: 'HMNS', // silver
  HMOX: 'HGNX', // brown
  HMNS: 'HMOS', // pink
  HMNX: 'BMNX',
  HGOS: 'HMNX',
  HGOX: 'HMOX', // O
  HGNS: 'HGNX',
  HGNX: 'HMOS',
  BMOS: 'HGOX',
  BMOX: 'BMNS',
  BMNS: 'BMOX',
  BMNX: 'HMNX',
  BGOS: 'HMNX',
  BGOX: 'BMOS',
  BGNS: 'HGOX',
  BGNX: 'BMOX',
}

const rivalMap = {
  HMOS: 'BGNS', // sand
  HMOX: 'BMNS', // black
  HMNS: 'BMOS', // lightgreen
  HMNX: 'BGOS',
  HGOS: 'BGOX',
  HGOX: 'BMOX',
  HGNS: 'BMNX',
  HGNX: 'BMNS',
  BMOS: 'HMNS',
  BMOX: 'HGOX',
  BMNS: 'HMOX', // O
  BMNX: 'HGNS',
  BGOS: 'HMNX',
  BGOX: 'HGOX',
  BGNS: 'HMOS', // pink
  BGNX: 'HMOX',
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

  let domCmykText = document.getElementById('cmyk-code')
  let domRgbText = document.getElementById('rgb-code')
  let domHexText = document.getElementById('hex-code')
  let rgb = hexToRgb(colorHexCode[type])
  let cmyk = rgb2cmyk(rgb.r, rgb.g, rgb.b, false)
  domCmykText.innerText = cmyk.c + ' ' + cmyk.m + ' ' + cmyk.y + ' ' + cmyk.k
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
