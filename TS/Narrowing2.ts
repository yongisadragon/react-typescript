// 1. typeof 연산자로는 내로잉에 한계가 있다.

// undefined타입을 처리할 경우
// 아래의 if문 안에서는 &&연산자를 이용하여 undefiend라면 undefiend가 남아 if문이 실행이 안되고, 아니라면 string이 남게 되어 true가 성립되므로 실행된다.
function 함수(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}

// 2. in키워드로 object narrowing 가능
// 서로 다른 속성(베타적인 속성)을 가진(swim, fly) obj를 구분하고 싶을 때 '속성명' in '오브젝트자료' 이런식으로 작성 해주면 됨.
type Fish = { swim: string };
type Bird = { fly: string };

function 함수2(animal: Fish | Bird) {
  // "swim" in animal은 Fish타입인지 아닌지를 검사하는 내로잉 문법
  if ("swim" in animal) {
    animal.swim;
  }
}

// 3. isntanceof 연산자로 ojb narrowing 가능
// obj 두개가 비슷하면 부모class 누군지 물어봐서 narrowing 가능
// 여기에선 Date가 class
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("참이에요");
}

// 둘다 해당하지 않는 경우
// 4. 비슷한 obj타입이 많다고 하면 literal type넣자!
// 베타적인 속성명(wheel, color 둘다 같음)이 없어서 in은 안됨. 부모class가 없으니 instanceof도 안됨.
// 아래에서는 바퀴갯수를 literal type(유니크한 값)으로 강제해놨음. obj타입마다 literal type만들어두면 narrowing이 편해짐.
type Cars = {
  wheel: "4개";
  color: string;
};

type Bikes = {
  wheel: "2개";
  color: string;
};

function 함수3(x: Cars | Bikes) {
  //그럼 어떻게 x가 Car타입인가? 를 물어보나
  //이경우 x변수는 Car타입임
  if (x.wheel === "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}

// 해당하는 type으로 '특정' 지을 수 있다고하면 narrowing으로 인정해주기 때문에
