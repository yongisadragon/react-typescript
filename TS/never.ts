// funtion return 값에 붙일 수 잇는 never type. void랑 유사하지만 뭔가를 리턴안할 때. 엄격한 몇가지 조건이 필요한데,
// 1. 함수가 절대 return 값이 있으면 안됨.
// 2. endpoint가 없어야함. 모든 함수는 return undefined를 몰래 가지고 있는데, 조건 2는 조건 1을 자동 포함함.
// 그렇다면 절대 끝나지 않는 함수를 만드는데에는 두가지 정도 방법이 있음. 강제를 에러를 내버리거나(코드 실행 중단) while을 넣어서 무한하게 돌도록 함. 듣고보면 어디에 쓸까 싶지만 실제 코딩에서 never 타입을 쓰는 방법은.. '사실' 대부분의 경우 void 쓰면 됨..

function 함수(): never {
  throw new Error();
  while (true) {}
}

// never가 등장하는 경우 1. 뭔가 이상한 narrowing
function 이상한함수(para: string) {
  if (typeof para == "string") {
    console.log(para);
  } else {
    console.log(para); //else를 추가하면 파라미터가 never 타입으로 변함..(그럴 일이 없다. 즉, never타입을 만난다면 본인 코드가 말이 안되게 짜여있나는 뜻이다.)
  }
}

let 함수표현식 = function () {
  throw new Error();
};
