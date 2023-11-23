// ts 에서는 public private protected static 등 객체지향 같은 문법도 제공한답니다..
var 유저 = /** @class */ (function () {
    function 유저(a) {
        this.familyName = "kim";
        // 필드값 가져다 쓰고 싶을땐 this 붙이기.
        this.name = a + this.familyName;
    }
    유저.prototype.긴급변경함수 = function () {
        this.familyName = "park";
    };
    return 유저;
}());
//public 키워드는 사실 있으나 없으나 상관이 없다.
var 유저1 = new 유저("민수");
유저1.familyName;
유저1.긴급변경함수(); // 이런식으로 private를 변경할 수 있기는 함. 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴임.
// constructor 파라미터에 public 붙이면 this.name = name 이거 생략가능하다.!
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var 자식 = new Person1("kim");
console.log(자식); // Person {name: 'kim'}
