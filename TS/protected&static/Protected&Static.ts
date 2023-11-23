class 유저2 {
  //현재 class 안에서 + extends 된 class {} 안에서 사용가능
  protected x = 10;
}

// class를 복사하고 싶네? 라면 extends
class 뉴유저2 extends 유저2 {
  doThis() {
    this.x = 20;
  }
}
let 뉴사람 = new 뉴유저2();

// protected: extends된 class는 사용가능, 자식들 사용불가능
// private: extends, 자식들 모두 사용불가능

// static 키워드 붙이면 부모 class에 직접 부여됨. 부모 고유 값. 자식에게는 물려주지 않는다. does not exist라고 오류내어줌. extends 하면 잘 따라옴.
class 스태틱 {
  static x = 10; // static은 부모만 사용가능
  y = 10; // 자식은 y만 사용가능
}

let 스태틱자식 = new 스태틱();
스태틱자식.x;
스태틱자식.y;

// static 응용. 부모만 가지고 있고 자식에겐 의도적으로 물려주고 싶지 않을때에 이런식으로 변수화 해서 사용. 자식들에겐 skill이라는 필드값이 물려지지 않음.
class 전문가 {
  static skill = "js";
  // this.skill 처럼 쓰는건 불가함.
  intro = 전문가.skill + "전문가입니다.";
}

let 상용 = new 전문가();
console.log(상용); // 전문가 {intro: 'js 전문가입니다.'}

// 이렇게 직접 변경도 가능.
전문가.skill = "ts";

let 상용2 = new 전문가();
console.log(상용2); // // 전문가 {intro: 'ts 전문가입니다.'}
