// 긴코드는 다른 js파일에 보관하쟈!
// 다른 파일에 있는 변수는 import / export로 공유 복사가 가능하다!
// 기본적으로는 단독 변수,함수는(컴포넌트 자체도 가능) export default 를 사용하고 (import도 단독변수) 여러개를 내보낼 때에는 export {1,2,...} 이런식으로 작성한다.
let data = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
  },
  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
  },
  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
  },
];

export { data };
