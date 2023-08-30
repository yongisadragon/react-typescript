// 클래스는 대문자 스타트가 관례
class Yong {
  //data = 0;
  //클래스 안에 값을 넣으면, 그 영역을 필드라고 하는데, 여기에서도 타입지정이 가능하다.

  // 타입스크립트 constructor()는 필드값(constructor 바깥쪽)에 '어쩌구'가 미리 위에 있어야 this.'어쩌구'가 가능함.(타입지정도 잘 해주시구요).
  // 뭔가 name과 파라미터a에 둘다 타입지정하면 중복같은 느낌이 들수도 있는데, 필드값은 디폴트값 이런 걸로 생각하셔도 괜찮습니다.
  // 참고로 constructor로 생성되는건 다 ojb자료이기 때문에 constructor 자체의 타입지정은 할 필요는 없음. 근데 파라미터는 해줘야 안 징징댐.
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  함수(a: string) {
    console.log("안녕" + a);
  }
}

let 사람1 = new Yong("kim");
let 사람2 = new Yong("park");
console.log(사람2);

// 연습문제
class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

// 문제2
// 파라미터가 아래와 들어가면 결과가 아래처럼 나오도록 class를 설계하시오.
// let obj = new Word("kim", 3, 5, "park");
// console.log(obj.num); //[3,5]
// console.log(obj.str); //['kim', 'park']

class Word {
  num;
  str;
  constructor(...params: (string | number)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    params.forEach((el) => {
      if (typeof el === "string") {
        문자들.push(el);
      } else {
        숫자들.push(el);
      }
    });
    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

// 스프레드 연산자와 rest 파라미터의 비교&차이점 함수의 파라미터로 쓰이면 rest 파라미터, 그외 객체나 배열 등에 사용되면 스프레드 연산자이다. 두가지 모두 사용 방법은 동일하다.
// 단, rest 파라미터의 경우 함수 매개변수의 가장 마지막에 작성되어야 한다. 스프레드 연산자는 위치 상관없이 사용할 수 있으며 여러번 사용도 가능하며 이터러블한 데이터에만 사용할 수 있다.
