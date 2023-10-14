import { Table } from "react-bootstrap";

export default function Cart() {
  // tr-행생성, th,td-열생성
  // 장바구니에 필요한 state(예를들어서 td에 들어갈 변하는 값들)들이 App,Detail,Cart 어디에서나 필요하다면? -> 원래는 최상위에 state보관 -> 상태관리 라이브러리 필요
  return (
    <>
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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
