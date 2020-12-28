const colorNameMap = {};
colorNameMap["HMOS"] = "분홍";
colorNameMap["HMOX"] = "빨강";
colorNameMap["HMNS"] = "은";
colorNameMap["HMNX"] = "물";
colorNameMap["HGOS"] = "남";
colorNameMap["HGOX"] = "주황";
colorNameMap["HGNS"] = "보라";
colorNameMap["HGNX"] = "고동";
colorNameMap["BMOS"] = "연두";
colorNameMap["BMOX"] = "금";
colorNameMap["BMNS"] = "검정";
colorNameMap["BMNX"] = "하늘";
colorNameMap["BGOS"] = "초록";
colorNameMap["BGOX"] = "노랑";
colorNameMap["BGNS"] = "모래";
colorNameMap["BGNX"] = "진달래";

const keywordMap = {};
keywordMap["HMOS"] = "따뜻한";
keywordMap["HMOX"] = "열정적인";
keywordMap["HMNS"] = "이지적인";
keywordMap["HMNX"] = "물";
keywordMap["HGOS"] = "남";
keywordMap["HGOX"] = "다정한";
keywordMap["HGNS"] = "보라";
keywordMap["HGNX"] = "믿음직한";
keywordMap["BMOS"] = "자신만만";
keywordMap["BMOX"] = "진취적인";
keywordMap["BMNS"] = "압도하는";
keywordMap["BMNX"] = "근면성실";
keywordMap["BGOS"] = "초록";
keywordMap["BGOX"] = "노랑";
keywordMap["BGNS"] = "염세적인";
keywordMap["BGNX"] = "진달래";

const colorHexCode = {
    "HMOS" : "#F7CAC9",
    "HMOX" : "#C02034",
    "HMNS" : "#A7A9AC",
    "HMNX" : "#7AC5C5",
    "HGOS" : "#0F4C81",
    "HGOX" : "#FF6F61",
    "HGNS" : "#B565A7",
    "HGNX" : "#955251",
    "BMOS" : "#88B04B",
    "BMOX" : "#BB9F52",
    "BMNS" : "#000000",
    "BMNX" : "#8CA4CF",
    "BGOS" : "#169C78",
    "BGOX" : "#F0BF59",
    "BGNS" : "#DECDBF",
    "BGNX" : "#DA4F70",
};

const resultDesc = {
    "HMOS" : "혹시… 당신은 다재 다능한 인기쟁이…?<br/><br/>분홍을 닮은 당신은 다른 사람들과 금세 친해지고 사람들을 잘 챙깁니다. 이런 면모 때문에 사람들은 당신을 유한 사람이라고 생각하지만, 당신의 내면은 주관이 뚜렷하고 강단이 있을 가능성이 높습니다. 원하는 목표가 있다면 어느 정도의 손해는 당연히 감수하여야 한다고 생각하겠네요. <br/><br/>개방적인 빨강색보다는 조금은 더 보수적인, 보라색이 일부 섞인 분홍색이 당신에게 어울립니다. 또한 자신의 의견을 관철하면서 뚜렷한 목표가 있는 분홍색은 어쩌면 스스로를 믿을 수 있는 원천이 하나씩 있을 것 같네요. 그러나 이런 점이 누군가에게는 ‘무얼 믿고 저렇게 나서지?’ 라는 느낌을 줄 수 있겠군요. 남들과 의견을 나눌 때 조금만 더 나의 원천을 보여주는 건 어떨까요?<br/><br/><br/>세상사에 염세적인 모래색을 닮은 사람들과는 부딪힐 수가 있어요~ 잘난 내가 더 노력해보죠. 그리고 목표를 이루고자 할 때 빨강색을 닮은 사람들과 잘 어울리겠네요. 또 의외로 내향적이지만 지적인 은색을 존중할 가능성이 높습니다.",
    "HMOX" : "만화에서 주인공은 항상 빨강이었죠. 빨강 하면 떠오르는 이미지, 당신도 알고 있어요. 타인을 위해 희생할 줄 알지만 목표를 위해서라면 그 누구보다 열정적으로 노력하는 당신은 빨강을 닮았군요! 그리고 빨강을 닮은 당신은 누구에게나 사랑받을 준비가 되어있습니다. 왜냐하면 타인에게 과감하게 자신의 감정을 솔직하게 말하니 따를 수밖에 없네요. <br/><br/>그런데 눈 앞의 목표를 위해 달려가고 노력하는 것이 지치지는 않나요? 많은 사람들이 좋아해주고 당신도 사람들에게 이타적이기 때문에 버틸 수야 있지만, 마치 경주마가 달릴 때 다른 것을 보지 못하도록 차안대로 가려진 것처럼 외향적인 나에 가려져 더 중요한 것을 놓칠 수 있어요. 조금만 혼자만의 시간을 가져보아요.<br/><br/>이런 당신에게는 새삼 비협조적이고 목표만을 위해 달리는 과묵한 검정색과는 맞지 않겠네요. 물론 이런 사람도 당신은 잘 지내는 척 지낼 수 있겠죠~ 하지만 다크 히어로와 히어로는 대척점인 것! 반면에 언제나 나와 비슷한 분홍색을 닮은 사람이나 언제나 누군가를 보듬어주는 고동색과 잘 맞겠네요. 그럼 오늘도 열심히!",
    "HMNS" : "차가운 금속을 닮은 당신은 은색을 닮았어요. 멋들어진 은색 안경을 쓴 사서 같은 사람이 떠올라요. 이성과 지혜를 통해 행동한다는 뜻인 ‘이지적이다’라는 말을 아시나요? 은색을 닮은 당신은 이 단어와 어울려요. 이런 당신을 어쩌면 다른 사람들이 굉장히 어려워할 수 있을 것 같아요.<br/><br/>어려운 이미지이지만 사회생활을 못한다는 뜻은 아니어요. 당신은 어려워 보이지만 타인을 위한 배려도 갖추었거든요. 지혜로 맞서기 때문에 언제나 두려울 것이 없어요. 무엇이든 효율적으로 척척 해내지 않나요? 그렇지만 불필요한 시간 낭비를 싫어해서 가끔은 차가운 모습을 내비칠 수 있겠네요. 가끔은 비효율적이라도 타인의 사담을 더 들어줘요. 카리스마 있지만 좀 더 부드럽고 따스한 사람이 되어보는 것이 어떨까요?<br/><br/>당신에게는 딱 따뜻한 분홍색을 닮은 사람과 어울립니다. 차가운 나를 따뜻하게 해주는 귀염둥이 분홍색을 닮은 사람과 잘 지내봐요. 하지만 오히려 자신의 의견이 중요한 연두색과는 맞지 않을 수 있어요. 그래도 사람을 무시해선 안돼요, 알았죠?",
    "HMNX" : "#7AC5C5",
    "HGOS" : "#0F4C81",
    "HGOX" : "#FF6F61",
    "HGNS" : "#B565A7",
    "HGNX" : "#955251",
    "BMOS" : "#88B04B",
    "BMOX" : "뭘 해도 잘 하겠다는 소리 들어봤죠?<br/><br/>항상 반짝이는 금처럼, 자신이 관심있는 분야에서 항상 황금기를 보이는 당신에게는 금색이 어울려요. 당신을 나타낼 만한 금색을 디지털로 표현할 수 없어서 슬퍼지네요. 그런데, 정말 뭘 해도 잘 하겠다는 소리 안 들어봤나요? 진취적인 당신은 어떤 분야에서도 마음먹으면 잘할 것처럼 보이거든요.<br/><br/>금색을 닮은 당신이 선택한 문항들을 보면 외향적이고, 효율적이고, 목표를 위해서 가감없이 의사결정을 할 수 있는 사람이군요. 이 정도로 타고나니 조직에서 리더를 한다면 더 멋진 사람이 되겠네요. 하지만 자신이 느끼기에 일을 못하는 사람이나 아무 생각 없어 보이는 사람을 너무 미워하진 마세요. 이 세상에서 완벽한 사람은 없어요~ 누구나 각자의 사정이 있고, 나와 달리 처리 속도가 느린 사람이 많아요. <br/><br/>제가 생각하기에 성과에 연연하지 않지만 인정이 많은 사람을 싫어할 것 같아요. 왜냐하면 당신이 느끼기엔 이런 사람은 영양가가 없는데 사람들이 좋아해서 일할 때 오히려 거슬릴 수 있어요. 그러니 조금 어수룩하지만 사람은 좋은 주황색을 닮은 사람과 잘 맞지 않고, 자기 자신과 비슷하거나 똑같이 일 잘하는 검정색과 닮은 사람과 친하게 지내겠네요.",
    "BMNS" : "무심함, 이성적의 결정체 검.정.색.<br/><br/>세상 사는 사람들에게 너무 무심해요. 큼큼 다른 색상과 닮은 사람들과 달리 비판적으로 설명을 시작했네요. 하지만 당신은 멋지고 전공분야에서 잘나갈 사람이에요. 인간에 대해 별 생각을 하지 않아서 이타적이지도 않고, 막상 엄청나게 이기적이지도 않은 무채색의 사람. 당신은 무채색인 검정색을 닮았습니다.<br/><br/>그러나 항상 자신의 전공분야에 있어서 효율적이고 자신의 주관이 뚜렷하기 때문에 잘해내는 편이에요. 어쩌면 연구직에 잘 맞는 사람이라고도 볼 수 있겠네요. 또한 합리적인 사고를 중시하기 때문에 뭐든지 근거에 기반하여 생각하는 습관이 있을지도 몰라요. 이런 글을 읽어도 신뢰하지 않을 당신은 좀 다채색인 사고를 할 필요가 있을 것 같아요.<br/><br/>당신은… 딱히 세상사에 무관심하기 때문에 딱히 잘 지내거나 못 지내는 사람이 없을 것 같네요. 어차피 별 관심이 없는데 왜 잘 지내고 못 지내고가 있을까요? 하지만 당신을 꽤 아낄 만한 금색과 더 잘 지낼 수 있겠다는 생각이 드네요.",
    "BMNX" : "#8CA4CF",
    "BGOS" : "#169C78",
    "BGOX" : "#F0BF59",
    "BGNS" : "#DECDBF",
    "BGNX" : "#DA4F70",
};

const intimacyMap = {
    "HMOS" : "HMNS", // silver
    "HMOX" : "HGNX", // brown
    "HMNS" : "HMOS", // pink
    "HMNX" : "",
    "HGOS" : "",
    "HGOX" : "",
    "HGNS" : "",
    "HGNX" : "",
    "BMOS" : "",
    "BMOX" : "BMNS",
    "BMNS" : "BMOX",
    "BMNX" : "",
    "BGOS" : "",
    "BGOX" : "",
    "BGNS" : "",
    "BGNX" : "",
};

const rivalMap = {
    "HMOS" : "BGNS", // sand
    "HMOX" : "BMNS", // black
    "HMNS" : "BMOS", // lightgreen
    "HMNX" : "",
    "HGOS" : "",
    "HGOX" : "",
    "HGNS" : "",
    "HGNX" : "",
    "BMOS" : "HMNS",
    "BMOX" : "HGOX",
    "BMNS" : "",
    "BMNX" : "",
    "BGOS" : "",
    "BGOX" : "",
    "BGNS" : "HMOS", // pink
    "BGNX" : "",
};

var type;

window.addEventListener('DOMContentLoaded', function() {
    let params = (new URL(document.location)).searchParams;
    type = params.get('type');

    let domKeywordLabel = document.getElementById("result-keyword");
    domKeywordLabel.innerHTML = keywordMap[type] + "&nbsp";

    let domColorNameText = document.getElementById("result-color-text");
    domColorNameText.innerText = colorNameMap[type] + "색";
    domColorNameText.style.color = colorHexCode[type];

    let domColorImage = document.getElementById("result-image-color");
    domColorImage.style.backgroundColor = colorHexCode[type];

    let domCmykText = document.getElementById("cmyk-code");
    let domRgbText = document.getElementById("rgb-code");
    let domHexText = document.getElementById("hex-code");
    let rgb = hexToRgb(colorHexCode[type]);
    let cmyk = rgb2cmyk(rgb.r, rgb.g, rgb.b, false)
    domCmykText.innerText = cmyk.c + " " + cmyk.m + " " + cmyk.y + " " + cmyk.k;
    domRgbText.innerText = rgb.r + " " + rgb.g + " " + rgb.b;
    domHexText.innerText = colorHexCode[type];

    let domDescLabel = document.getElementById("result-desc");
    domDescLabel.innerHTML = resultDesc[type];

    let domIntimacyColorImage = document.getElementById("intimacy-image-color");
    domIntimacyColorImage.style.backgroundColor = colorHexCode[intimacyMap[type]];

    let domRivalColorImage = document.getElementById("rival-image-color");
    domRivalColorImage.style.backgroundColor = colorHexCode[rivalMap[type]];

    let domIntimacyName = document.getElementById("intimacy-name");
    domIntimacyName.innerHTML = keywordMap[intimacyMap[type]] + "&nbsp" + colorNameMap[intimacyMap[type]];

    if (rivalMap[type]){
        let domRivalName = document.getElementById("rival-name");
        domRivalName.innerHTML = keywordMap[rivalMap[type]] + "&nbsp" + colorNameMap[rivalMap[type]];
    }
    else {
        let domRivalImage = document.getElementById("rival-image");
        domRivalImage.style.display = "none";
    }
});

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

var rgb2cmyk = function(r, g, b, normalized){
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    
    return {
        c: c,
        m: m,
        y: y,
        k: k
    }
}

function onClickRetry() {
    window.location.href = "index.html";
}