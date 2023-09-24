//숙제1. 다음 x,y 속성의 특징을 설명해보십시오.
class 특징 {
  private static x = 10;
  public static y = 20;
}
/**
1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.

2. private static x는 class 내부에서만 수정가능합니다. 

3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 

4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 
 */

//숙제2
// x 속성에 숫자를 더해주는 함수가 필요합니다.
// static 멤버를 가져다 쓰는 함수에도 static이 필요.
class User1 {
  private static x = 10;
  public static y = 20;

  //메서드에서 static 필드값 x를 쓰기 위해 함수에도 static을 붙여줌.
  static addOne(a: number) {
    User1.x += a;
  }
  static printX() {
    console.log(User1.x);
  }
}
User1.addOne(31); //이렇게 하면 x가 3 더해져야함
User1.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let random = Math.random();
    let square = `<div
    style='
    position: relative;
    top: ${random * 400}px;
    left: ${random * 400}px;
    width:${this.width}px;
    height:${this.height}px;
    background-color:${this.color}
    '
    ></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

// insertAdjacentHTML 이런거 이용하면 원하는 곳에 html 추가가 가능. 요소 아래의 돔 트리를 싹 갈아엎는 innerHTML과 달리 돔 프라그먼트를 삽입하기만 하는 insertAdjacentHTML 메소드를 사용하면 이미 추가된 요소들을 다시 파싱하고 돔 트리에 넣지 않아도 된다는 큰 이점을 보여준다.

let 네모입니다 = new Square(30, 30, "red");
네모입니다.draw();
네모입니다.draw();
네모입니다.draw();
네모입니다.draw();
