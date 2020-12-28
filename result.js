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
keywordMap["HGOX"] = "주황";
keywordMap["HGNS"] = "보라";
keywordMap["HGNX"] = "믿음직한";
keywordMap["BMOS"] = "진달래";
keywordMap["BMOX"] = "진취적인";
keywordMap["BMNS"] = "압도하는";
keywordMap["BMNX"] = "하늘";
keywordMap["BGOS"] = "초록";
keywordMap["BGOX"] = "노랑";
keywordMap["BGNS"] = "염세적인";
keywordMap["BGNX"] = "연두";

const colorHexCode = {
    "HMOS" : "#F7CAC9",
    "HMOX" : "#C02034",
    "HMNS" : "#A7A9AC",
    "HMNX" : "#7AC5C5",
    "HGOS" : "#0F4C81",
    "HGOX" : "#FF6F61",
    "HGNS" : "#B565A7",
    "HGNX" : "#955251",
    "BMOS" : "#DA4F70",
    "BMOX" : "#BB9F52",
    "BMNS" : "#2F3438",
    "BMNX" : "#8CA4CF",
    "BGOS" : "#169C78",
    "BGOX" : "#F0BF59",
    "BGNS" : "#DECDBF",
    "BGNX" : "#88B04B",
};

const resultDesc = {
    "HMOS" : "혹시… 당신은 다재 다능한 인기쟁이…?<br/><br/>분홍을 닮은 당신은 다른 사람들과 금세 친해지고 사람들을 잘 챙깁니다. 이런 면모 때문에 사람들은 당신을 유한 사람이라고 생각하지만, 당신의 내면은 주관이 뚜렷하고 강단이 있을 가능성이 높습니다. 원하는 목표가 있다면 어느 정도의 손해는 당연히 감수하여야 한다고 생각하겠네요. <br/><br/>개방적인 빨강색보다는 조금은 더 보수적인, 보라색이 일부 섞인 분홍색이 당신에게 어울립니다. 또한 자신의 의견을 관철하면서 뚜렷한 목표가 있는 분홍색은 어쩌면 스스로를 믿을 수 있는 원천이 하나씩 있을 것 같네요. 그러나 이런 점이 누군가에게는 ‘무얼 믿고 저렇게 나서지?’ 라는 느낌을 줄 수 있겠군요. 남들과 의견을 나눌 때 조금만 더 나의 원천을 보여주는 건 어떨까요?<br/><br/><br/>세상사에 염세적인 모래색을 닮은 사람들과는 부딪힐 수가 있어요~ 잘난 내가 더 노력해보죠. 그리고 목표를 이루고자 할 때 빨강색을 닮은 사람들과 잘 어울리겠네요. 또 의외로 내향적이지만 지적인 은색을 존중할 가능성이 높습니다.",
    "HMOX" : "만화에서 주인공은 항상 빨강이었죠. 빨강 하면 떠오르는 이미지, 당신도 알고 있어요. 타인을 위해 희생할 줄 알지만 목표를 위해서라면 그 누구보다 열정적으로 노력하는 당신은 빨강을 닮았군요! 그리고 빨강을 닮은 당신은 누구에게나 사랑받을 준비가 되어있습니다. 왜냐하면 타인에게 과감하게 자신의 감정을 솔직하게 말하니 따를 수밖에 없네요. <br/><br/>그런데 눈 앞의 목표를 위해 달려가고 노력하는 것이 지치지는 않나요? 많은 사람들이 좋아해주고 당신도 사람들에게 이타적이기 때문에 버틸 수야 있지만, 마치 경주마가 달릴 때 다른 것을 보지 못하도록 차안대로 가려진 것처럼 외향적인 나에 가려져 더 중요한 것을 놓칠 수 있어요. 조금만 혼자만의 시간을 가져보아요.<br/><br/>이런 당신에게는 새삼 비협조적이고 목표만을 위해 달리는 과묵한 검정색과는 맞지 않겠네요. 물론 이런 사람도 당신은 잘 지내는 척 지낼 수 있겠죠~ 하지만 다크 히어로와 히어로는 대척점인 것! 반면에 언제나 나와 비슷한 분홍색을 닮은 사람이나 언제나 누군가를 보듬어주는 고동색과 잘 맞겠네요. 그럼 오늘도 열심히!"
};

const intimacyMap = {
    "HMOS" : "HMNS", // red
    "HMOX" : "HGNX", //brown
    "HMNS" : "",
    "HMNX" : "",
    "HGOS" : "",
    "HGOX" : "",
    "HGNS" : "",
    "HGNX" : "",
    "BMOS" : "",
    "BMOX" : "",
    "BMNS" : "",
    "BMNX" : "",
    "BGOS" : "",
    "BGOX" : "",
    "BGNS" : "",
    "BGNX" : "",
};

const rivalMap = {
    "HMOS" : "BGNS", // sand
    "HMOX" : "BMNS",
    "HMNS" : "",
    "HMNX" : "",
    "HGOS" : "",
    "HGOX" : "",
    "HGNS" : "",
    "HGNX" : "",
    "BMOS" : "",
    "BMOX" : "",
    "BMNS" : "",
    "BMNX" : "",
    "BGOS" : "",
    "BGOX" : "",
    "BGNS" : "",
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

    let domRivalName = document.getElementById("rival-name");
    domRivalName.innerHTML = keywordMap[rivalMap[type]] + "&nbsp" + colorNameMap[rivalMap[type]];
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