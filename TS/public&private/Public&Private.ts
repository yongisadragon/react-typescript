// ts 에서는 public private protected static 등 객체지향 같은 문법도 제공한답니다..

class 유저 {
  //constructor 없이 필드에서 name = 'kim' 으로도 지정할 수 있지만, constructor(a)를 통해 a등과 같이 파라미터를 지원할 수 있다는 점이 차이 점임.
  //class에서 쓰는 public 키워드.. 붙으면 모든 자식들이 이용 및 수정 가능. 사실 public 붙이든 안붙이든 똑같긴 합니다 . 필드값 같은걸 그냥 만들면 public이 몰래 왼쪽에 부여되기 때문입니다.
  //   public name = "kim";

  //private 붙으면 class 중괄호 안에서만 수정, 이용가능
  //    private name = "kim";

  // familyName과 같이 가문의 이름을 변경하면 안되기 때문에 실수로 변경을 하면 안되는 중요한 것들. 수정하는 것을 방지하고 싶으면 private을 붙여봐요. 갖다 쓰는것도 안될걸요. 절대 수정이 안되는게 아니라, class{} 안에서는 수정, 사용 가능.
  name: string;
  private familyName: string = "kim";

  constructor(a) {
    // 필드값 가져다 쓰고 싶을땐 this 붙이기.
    this.name = a + this.familyName;
  }

  긴급변경함수() {
    this.familyName = "park";
  }
}

//public 키워드는 사실 있으나 없으나 상관이 없다.
let 유저1 = new 유저("민수");
유저1.familyName;

유저1.긴급변경함수(); // 이런식으로 private를 변경할 수 있기는 함. 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴임.

// constructor 파라미터에 public 붙이면 this.name = name 이거 생략가능하다.!
class Person1 {
  constructor(public name: string) {}
}

let 자식 = new Person1("kim");
console.log(자식); // Person {name: 'kim'}
