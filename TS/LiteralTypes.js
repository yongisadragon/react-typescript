// 타입지정에는 타입만 지정할 수 있는게 아니라, 글자 그자체를 지정해서, 그 글자만 받을수도 있다. 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type이라고한다.
var 이름지정;
이름지정 = 123; // 'kim' 이외에는 오류
// 접니다 라는 literal type을 지정하고, 접니다에 할당을 하려고하면, 지정했던 타입에서 자동완성까지 잘 해준다.
var 접니다;
접니다 = "대머리";
// 함수 인자값이나 리턴값을 받을 때에도 유용할 것 같군요.
function 함수즈(a) {
    return 1;
}
함수즈("hello");
// 연습문제
function 가위바위보(x) {
    if (x === "가위")
        return ["가위"];
}
가위바위보("가위");
// const변수의 한계: 변경이나 재할당이 안되기 때문에 확장성이 부족하다.
// 그러므로, literal type은 자료를 여러개 저장할 수 있는 const 변수의 업그레이드 버전이라고 생각하면 좋다.
var 자료 = {
    name: "kim",
};
function 이런함수(a) { } //이 함수의 의미는 kim이라는 자료만 들어올 수 있습니다가 아니라, kim이라는 타입만 들어올 수 있습니다. 의 의미이다. (kim이라는 타입)
// 즉, 아래 함수에서 인자 '자료.name'의 타입은 'string'이며, 인자 a 로 들어올 수 있는 '타입'은 'kim'이라는 'string' 이어야 한다. 자료.name은 오류를 뿜는다. (*obj에 as const가 없을 경우)
이런함수(자료.name);
// 그럼 솔루션으로, 자료 라는 변수를 선언할 때,
// 1. obj의 타입지정을 확실히 하든가,
// 2. as문법으로 타입을 거짓말 쳐야한다.
// 3. as const 문법을 사용한다.!! 그 효과는
// a. obj value 값으 그대로 타입으로써 지정해준다. (name에 호버해보면 원랜 name:'string'이었지만, as const를 해주면 name:'kim'으로 지정해준다.) obj 자료를 완전히 잠가놓고 싶으면 as const를 사용해보자.
자료.name = 123;
// b. obj안의 속성들을 readonly로 바꿔준다. (변경불가)
