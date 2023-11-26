declare class 유저2 {
    protected x: number;
}
declare class 뉴유저2 extends 유저2 {
    doThis(): void;
}
declare let 뉴사람: 뉴유저2;
declare class 스태틱 {
    static x: number;
    y: number;
}
declare let 스태틱자식: 스태틱;
declare class 전문가 {
    static skill: string;
    intro: string;
}
declare let 상용: 전문가;
declare let 상용2: 전문가;
