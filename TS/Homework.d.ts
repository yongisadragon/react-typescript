declare class 특징 {
    private static x;
    static y: number;
}
/**
1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.

2. private static x는 class 내부에서만 수정가능합니다.

3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯

4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
 */
declare class User1 {
    private static x;
    static y: number;
    static addOne(a: number): void;
    static printX(): void;
}
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let 네모입니다: Square;
