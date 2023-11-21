// arr타입 지정할때 tuple type이란? tuple type은 array에 붙일 수 있는 타입인데 자료의 위치까지 정확히 지정할 수 있는 타입입니다. '?'를 붙여서 optional하게 표현가능하다. [string, boolean?, number] 이딴식으로하면 안되고, ?는 맨뒤에 와야함.

let 멍멍: [string, boolean?] = ["dog", true];

//rest파라미터 타입지정?! 이런식으로 tuple을 쓰면 1번째 넘버, 2번째 스트링이 확정되어야함.
function 햄수(...x: [number, string]) {
  console.log(x);
}

햄수(1, "야야");

//array합칠때. rest파라미터 타입지정
let arrr = [1, 2, 3];
let arrr2: [number, number, ...number[]] = [4, 5, ...arrr];

console.log(arrr2);

// 숙제1
let delicious: [string, number, boolean] = ["맥도날드", 5700, true];

// 숙제2
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. tuple 타입과 spread 연산자를 써보도록 합시다.
let arrr3: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// 숙제3 (X)
function 숙제3(...rest: [string, boolean, ...(string | number)[]]) {
  console.log(rest);
}

숙제3("숙제", true, 123, "문자", 4, 5);

// 숙제4
function 햄수2(...rest: (string | number)[]) {
  //return 되는 값도 변수 설정.
  let result: [string[], number[]] = [[], []];

  rest.forEach((e) => {
    if (typeof e === "string") {
      result[0].push(e);
    } else if (typeof e === "number") {
      result[1].push(e);
    }
  });

  console.log(result);
  return result;
}

햄수2("b", 5, 6, 8, "a");
