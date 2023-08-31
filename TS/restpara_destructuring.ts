// 파라미터에도 타입지정을 할 수 있는데, ...rest parameter란 뭔가?
// 이딴식으로 쓰면 무제한으로 파라미터 받겠다는 뜻임. * 주의점은 다른 파라미터와 함께 작성할 예정이라면, 맨 뒤에 위치 시켜야한답니다.
// rest parameter에 타입지정을 할때에 중요한 점이 있는데, rest자체는 모든 파라미터를 포함하는 형태로써, '배열'의 형태로 들어오는 것을 기억하자.(콘솔에 rest만 입력하면 배열로 들어오는 것을 확인) 타입지정도 어레이로 해줘야 오류를 피할 수 있다.
function 함수(x, y, ...rest: number[]) {
  console.log(rest); // [3,4,5]
  console.log(...rest); // 3,4,5
}
함수(1, 2, 3, 4, 5);

// 또 다른 .. 의 용도는 ..spread operator로, array나 object에 붙여주면  괄호를 벗겨내는 것이라고 생각하면 됨.
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3); // [1,2,3,4,5]

// destructuring 개념
// array, object 안에 있는 데이터가 너무 유용한 나머지.. 변수로 따로 빼서 만들고 싶을 때 쓰는 문법이 Destructuring인데요,
// 이렇게 쓰면 되긴 하는데 개발자들이 귀찮아서 새로운 문법을 만들어냈습니다.
let 사람 = { student: true, age: 20 };
let student = 사람.student;
let age = 사람.age;

// Destructuring 이라는 것인데 변수로 빠르고 쉽게 뺄 수 있도록 도와주는 문법입니다.
// 이렇게 쓰면 똑같이 변수로 뺄 수 있습니다.
let { student, age } = { student: true, age: 20 };

// 다만 유념할 것은 obj일떄에는 변수 이름을 키값과 맞춰주는게 편리하고, array일때에는 맘대로 짓든가 하세요.
let [a, b] = ["안녕", 100];

// 함수에도 적용가능 합니다!

let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age); // true, 20
}
// 이렇게 하면 될걸요?
함수(person);
