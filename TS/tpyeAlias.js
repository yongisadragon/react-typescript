// type alias(별칭)를 작성할 때, 타입이 지정이 길어지면 type을 붙여서 변수처럼 작성해 사용 가능하다. 일반 변수와의 차별화를 위해서 대문자로 시작하는건 국룰
var 용팔이 = { name: "dog", age: 10 };
// 여기서 잠깐! object타입은 const에 의해 변수할당이 되어도, 내부 key에 붙은 value값은 변경이 가능하다. const 변수는 재할당만 막아줄 뿐이지 그 안에 있는 object 속성 바꾸는 것 까지 관여하지 않기 때문입니다. readonly 키워드는 속성 왼쪽에 붙일 수 있으며 특정 속성을 변경불가능하게 잠궈줍니다.
var 출생지역 = { region: "seoul" };
출생지역.region = "busan "; // 변경가능
var 여친 = { name: "엠버" };
여친.name = "유라";
var positon = { x: 10, y: 20 };
var firstName = { x: "kim", y: "kim" };
var 회원가입정보 = {
    name: "kim",
    phone: 1234,
    adult: false,
};
