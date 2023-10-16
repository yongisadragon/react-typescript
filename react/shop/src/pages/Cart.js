import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/useSlice";
import { increaseCount } from "../store";

export default function Cart() {
  // redux store 가져와줌.
  // let a = useSelector((state) => {
  //   return state;
  // });
  // 이렇게 뽑아서 따로 쓰는게 더 편하겠네요. 중괄호랑 return은 세트로 생략가능
  const user = useSelector((state) => state.user);
  const stock = useSelector((state) => state.stock);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(user, stock);

  // tr-행생성, th,td-열생성
  // 장바구니에 필요한 state(예를들어서 td에 들어갈 변하는 값들)들이 App,Detail,Cart 어디에서나 필요하다면? -> 원래는 최상위에 state보관 -> 상태관리 라이브러리 필요
  return (
    <>
      <div>
        <h5>
          {user.name}
          {user.age}의 장바구니
        </h5>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increaseCount(item.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
