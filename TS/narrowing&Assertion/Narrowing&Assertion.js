function 내함수(x) {
    return x + 1;
}
내함수(123);
//x는 넘버 혹은 스트링이 될 수 있는 유니온이기 때문에, 애매한 타입으로 간주되어 산술해주지 않는다. 이렇게 애매한 상황에서는 Type Narrowing(타입을 거른다. 정한다.)을 써야한다. 아래처럼 동작하게 해야한다.
// function 내함수(x: number | string) {
// if(x의 타입이 string이면~? -> typeof ~~)
//     return x + 1;
//   } ...
// 대표적인 내로잉 방법은 typeof 연산자
function 내함수2(x) {
    //typeof 로 검사할때에는 문자열로 체크하는것을 잊지말자.
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내함수2(1);
// 이를테면 이럴때에도 내로잉 할 수 있다.
// 그 밖에 내로잉 판정해주는 문법들은 '속성명 in 오브젝트자료' , '인스턴스 instanceof 부모' 등이 있다.
function 내함수3(x) {
    var arr = [];
    if (typeof x === "number") {
        arr[0] = x;
    }
    else {
        //if문을 썼으면 웬만하면 else, else if로 마무리 지어주는게 가급적 좋다.
    }
}
내함수3(3);
// 또는 if문 없이 타입을 덮어쓰는 assertion 문법이 있다.
// 겉보기에는 매우 간결하고 쉬워서 as로 때우려고 할 수 있다. as문법의 정확한 용도는..
// 1. 일단 내로잉 할때 쓸수는 있음. 다만 변수를 확정된 타입으로 확정짓고, 그것을 변경하려고 하면 안됨. 해당 예제처럼 유니온 타입과 같이 '애매한 타입'을 내로잉 할 때나 쓰는 거임.
// 2. 무슨 타입이 들어올지 확신이 있을때 씀. as number라고 해놓고 변수는 유니온으로, 그런다음 함수 인자로 '123'이렇게 문자열 넣어도 as number해놔도 버그 캐치못함. 즉, 정말 필요할때 버그 추적 못함. 비상용 혹은 디버깅용임. 웬만하면 if문을 쓰셈. as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니기 때문임.
function 내함수4(x) {
    var arr = [];
    arr[0] = x; //이딴식으로 하면 ts가 x를 number로 인식해줌
}
내함수4(3);
// 그니까 어설션 이런식으로 쓰지말라구요.
var 금지 = "no";
금지;
// quiz1. 숫자와 문자가 섞인 array를 입력하면 [num,num,num] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수
function cleaning(x) {
    var cleaned = [];
    x.forEach(function (y) {
        if (typeof y === "string") {
            cleaned.push(parseFloat(y));
        }
        else {
            cleaned.push(y);
        }
    });
    return cleaned;
}
console.log(cleaning([1, "2", 3]));
// quiz2. 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// array는 object에 포함되므로 배열인지 판별부터.
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function lastSbuject(x) {
    if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else if (typeof x.subject === "string") {
        return x.subject;
    }
    else {
        return "없져";
    }
}
