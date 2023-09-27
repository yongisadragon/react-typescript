import React from "react";
import { useParams } from "react-router-dom";

export default function Detail({ shoes }) {
  // let [shoes] = useState(data); 이런식으로 하면 상태값을 수정해야할 때, App.js에 있는 상태값과 두곳을 수정해야하는 번거로움이 있기때문에 데이터를 드릴링해주는게 좋다.(단계가 많지 않을때) 일반적으로 데이터는 한곳에서 관리하셈.
  // useParams라는 훅은 현재 유저가 URL 파라미터에 입력한 값을 가져온다. 예를들어 이 컴포넌트는 /detail/:id에 해당 하는 컴포넌트인데, 예를들어 유저가 detail/1 이라고 입력하면 useParams를 통해 1을 뿅 나오게 해준다. 이걸 어디에 쓰냐구? 데이터화 된 shoes에 순서를 매겨서 각각 다른 내용을 보여줄 때 활용하면 되지 않을까?
  let { id } = useParams();
  //shoes가 배열이므로 find()는 배열중 일치하는(params의 id와 shoes data 고유 id와 일치하는) 첫 요소를 반환(배열이니까 여기 data에선 각 순서에 해당하는 객체(상품)를 반환할듯), 즉 일치상품이란 id값이 일치할때에만 생기는 변수값. data상에서 없는 아이디값을 입력하면 find는 undefined를 뱉음.
  let 일치상품 = shoes.find((x) => x.id == id);
  console.log(일치상품);

  return (
    <>
      {!일치상품 ? (
        <p>해당 신발을 찾을 수 없습니다.</p>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`https://codingapple1.github.io/shop/shoes${
                  일치상품.id + 1
                }.jpg`}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{일치상품.title}</h4>
              <p>{일치상품.content}</p>
              <p>{일치상품.price}</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
