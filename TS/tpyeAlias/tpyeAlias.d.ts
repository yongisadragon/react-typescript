type Animal = {
    name: string;
    age: number;
};
declare let 용팔이: Animal;
declare const 출생지역: {
    region: string;
};
type Girlfriend = {
    readonly name: string;
};
declare const 여친: Girlfriend;
type Job = string;
type Age = number;
type Person = Job | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY;
declare let positon: NewType;
type PositionZ = {
    x: number;
};
type PositionZ = number;
type Lee = {
    x: string;
};
type Kim = {
    y: string;
};
type FristName = Lee & Kim;
declare let firstName: FristName;
type ThisOne = {
    color?: string;
    size: number;
    readonly position: number[];
};
type They = {
    name: string;
    phone: number;
    email?: string;
};
type Teenager = {
    adult: boolean;
};
type NewUser = They & Teenager;
declare let 회원가입정보: NewUser;
