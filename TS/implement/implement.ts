class Carr {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}

let 붕붕이2 = new Carr("morning");

//class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 어떻게합니까. 그럴 경우 interface + implements 키워드로 확인하면 됩니다...

interface CarType {
  model: number;
  tax: (price: number) => number;
}

class Carr2 implements CarType {
  model; // any 뜸
  tax(a) {
    ///a 파라미터는 any 타입됨
    return a * 0.1;
  }
}
let 붕붕이3 = new Carr2();
붕붕이3.tax("하이");

// 지금 CarType을 implements 했냐고 써봤습니다. 근데 CarType에 있던 model : string 이런게 반영되는건 아닙니다. class 안에서의 model은 any 타입임

// class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않습니다.결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심합시다. 즉, '단순 체크용'
