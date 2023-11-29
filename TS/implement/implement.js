var Carr = /** @class */ (function () {
    function Carr(a) {
        this.price = 1000;
        this.model = a;
    }
    return Carr;
}());
var 붕붕이2 = new Carr("morning");
var Carr2 = /** @class */ (function () {
    function Carr2() {
    }
    Carr2.prototype.tax = function (a) {
        ///a 파라미터는 any 타입됨
        return a * 0.1;
    };
    return Carr2;
}());
var 붕붕이3 = new Carr2();
붕붕이3.tax("하이");
// 지금 CarType을 implements 했냐고 써봤습니다. 근데 CarType에 있던 model : string 이런게 반영되는건 아닙니다. class 안에서의 model은 any 타입임
// class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않습니다.결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심합시다. 즉, '단순 체크용'
