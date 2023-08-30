//ts를 이용해서 html을 조작해보자!
// 처음부터 '제목'이라는 변수로 inner를 해주면 오류가 뜨는데 확인해보면, Element | null 이라는 오류가 뜬다. (유니온 타입이라서 에러를 띄워줌. 실행에는 지장x)
// 그것은 querySelector로 잘못된 요소가 탐색 되는것을 방지하기 위해 Element 요소가 아니라면 null이 남도록 설정이 돼있기 때문이다. (제대로 찾으면 html object자료 남음)그렇다면 narrowing을 통해 'null이 아니라면'의 조건을 추가해줘야한다.
let 제목 = document.querySelector("#title");
if (제목 !== null) {
  제목.innerHTML = "반가워요";
}

//근데 narrowing에는 5가지정도 방법이 더있어요
// 2.instanceof (instanceof도 내로잉의 일종으로 쓸 수 있고, 앞으로도 제일 많이 씀)
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

// 3.as로 사기치기(100%확신 / 비상시)
let 제목사기 = document.querySelector("#title") as Element;

// 4. ?. 문법 (optional chaining) -> 앞에 요소가 있으면 통과, 없으면 그 자리에 undefined 뱉어줌
let 제목2 = document.querySelector("#title");
if (제목2?.innerHTML != undefined) {
  제목2.innerHTML = "반가워요";
}

// 5. html조작시 config.json에서 stric모드 끄기.. 이건 의미가 거의 없다!

let link = document.querySelector(".link");
// HTMLAnchorElement는 Element에서 파생돼 나온 상세한 타입들. Heading.. Button 등
if (link instanceof HTMLAnchorElement) {
  link.href = "http://kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {
  // ?.는 내로잉으로 인정해준다.
  // 연습문제1. 이미지 이름바꾸기
  let 이미지 = document.querySelector("#image");
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
});

let 링크 = document.querySelectorAll(".naver");
console.log(링크);
//'링크'는 querySelectorAll로 탐색했기 때문에 NodeList라는 배열로 정의됨.
링크.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
