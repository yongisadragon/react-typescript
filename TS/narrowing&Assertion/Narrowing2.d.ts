type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare let 날짜: Date;
type Cars = {
    wheel: "4개";
    color: string;
};
type Bikes = {
    wheel: "2개";
    color: string;
};
declare function 함수3(x: Cars | Bikes): void;
