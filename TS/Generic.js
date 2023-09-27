//함수의 파라미터도 역시 변수로 생각하면 된다.
function 햄수(x) {
    return x[0]; //얘가 number가 나온다고해도 타입변화 그딴거 안해줌.
}
var aa = 햄수([4, 2]);
console.log(aa + 1); //4, 하지만 aa는 unknown이라고 뜸
//그렇다면, aa에다가 +1 과 같이 임의로 조작을 하면 aa는 unknown이기 때문에 에러가 나온다. 그럴때에는 내로잉 또는 as 처리 해주면 되지만, Generic 함수(파라미터로 타입을 입력하는 함수)를 만들 수 있따. 위와 같이 작성하면, 함수타입, 파라미터타입, 리턴타입 모두 number로 지정되는 결과가 나온다.
//제너릭 함수 장점: 확장성이 있다.
//이런식으로 extends를 하면 키워드로 넣을 수 있는 타입 제한이 가능하다. 내로잉으로 인정해줘서 MyType2(왼쪽)에  number(오른쪽)의 속성을 가지고 있는지 체크해준다. (일종의 if문 내로잉)
function 햄수2(x) {
    return x - 1;
}
var bb = 햄수2(100);
function 햄수3(x) {
    return x.length;
}
var cc = 햄수3("hello"); //가능
var cc2 = 햄수3(1234); //에러남
/**
 * 정리
 * 1. 함수에 타입파라미터 넣을 수 있음.
 * 2. extends 키워드로 넣을 수 있는 타입 제한가능
 */
//숙제1.문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
//extends를 이용해서
function 제너릭1(a) {
    return a.length; // extedns전: Property 'length' does not exist on type 'MyType4'. extends를 통해 string이나 []의 특성이 있는지 체크해보도록 함.
}
제너릭1("hello");
제너릭1(["kim", "park"]);
