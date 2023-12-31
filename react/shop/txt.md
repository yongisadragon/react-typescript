### 0810

리액트는 사이트발행 전에 html css 파일을 압축하는데, 이걸 bundling이라고 한다. (참고로) src안의 파일폴더들은 다 압축되고 변형되는 반면! public 폴더에 있는 사진 파일이라든지, 압축이 되지 않는다.
public폴더에 있는걸 쓸때에는 src경로에 /만 입력하고 찾으면된다.근데 퍼블릭 폴더 사용시 주의점이 있단다. 도메인이 있고 서브 경로에다가 리액트를 발행하고 싶을 수 있음. 그러면 img src가 도메인/파일명.jpg 등 도메인을 맨날 수정해야 하는 수가 있음. 그래서
퍼블릭 폴더 이미지 쓰는 권장방식은 src={process.env.PUBLIC_URL + '/logo192.png'} 이런식으로 작성하는 것. (process.env.PUBLIC_URL는 내 사이트 '현재 경로'를 뜻함.)

### 0906

오늘은 라우팅 나누는 법을 알아봅니다.. 일반적으로 리액트 없이 페이지를 나누는 법은

1. html 파일 만들어서 각각 대응하는 상세페이지 내용 채움
2. 누가 /??? 로 접속하면 ???에 해당하는 html파일 보내줌

하지만 리액트는 SPA이므로 index.html만 사용하므로,

1. 컴포넌트 만들어서 상세페이지 내용 채움
2. 누가 /detail 접속하면 그 컴포넌트를 보여준다.
3. 근데 어거지로 짜면 복잡하기 떄문에 react-router-dom 라이브러리를 사용하쟈!
4. 페이지 이동 버튼은 Link를 씁시다.

// useNavigate(hook)
useNavigate는 유용한 함수를 담고있다. navigate라는 임의의 변수에 담아서 함수로 활용하면, navigate(-1) 혹은 navigate('/detail') 등으로 url간의 이동을 할 수 있다.
뒤로가기 버튼 (-1) 만들기가 쉽고, 페이지간 이동이 쉽다는 장점.

// nested routes, Outlet
여러 유사한 페이지가 필요할 때 쓴다. (특히 중첩되는 하위 url) 예를 들어
/about/member
/about/location
등 중첩되는 url페이지를 만들고 싶을때 쓴다.
nested된 컴포넌트는 감싸고 있는 컴포넌트에서 <Oulet>의 자리에 들어가는 요소이다. 즉, nested되는 중첩된 하위 컴포넌트들이 '어디에'보여질지 Outlet으로 자리를 정해주는 것이다.

### 1006

컴포넌트도 사람처럼 태어나서 죽습니당 그걸 lifecycle이라고함.

컴포넌트는
페이지에 장착 mount
가끔 업데이트 update(리렌더링)
필요없으면 제거되고 unmount
등의 주기를 겪음.. 근데 우리 라이프도 신경쓰기 바쁜데 얘네 신경을 다 쓸 필요는 없고, '왜' 배우는지가 중요함. 우리가 그 **주기 중간중간에 간섭(특정코드실행)**을 할 수있음. 중간 단계마다 갈고리 코드를 달아서.

### useEffect 사용하는 이유?

-이것의 동작원리와 시점은 html을 다 그려주고나서 useEffect를 실행해준다. 이점은 매우 유용하게 활용될 수 있는데, 연산이 많은 코드가 있으면 그것을 실행하느라 html을 렌더(함수의 핵심기능)하는게 무한정 미뤄질 수도 있다. useEffect는 html을 먼저 보여주고 어려운 작업을 후처리하는 식으로 배치해서 사람들에게 조금더 빠르게 실행되는 '것처럼' 보여줄 수 있다. 어려운 연산이라고하면, 서버에서 데이터가져오는 작업, 타이머 장착하는 등의 작업. -왜 useEffect는 이름이 Effect임. 함수의 핵심기능과 상관없는 부가기능.. 위에서 말한 어려운 연산이나 타이머 등등 -> sideEffect에서 따온 이름인데, 그런 side effect코드들을 보관하는 곳이라고하여 useEffect라고한다는데..

(참고1) clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.
(참고2) 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다.

클린업 return ()=>{} 함수는 useEffect가 동작하기 '전'에 실행된다.
mount시에는 X, unmount시에는 O.

빡통식 정리

1. 리렌더링마다 실행하고 싶으면 useEffect
2. mount시 1회 코드실행하고 싶으면 useEffect 마지막에 의존성 배열 []
3. 특정 state 변경시에만 실행하려면 [state명]
4. unmount시 1회 코드실행하고 싶으면 useEffect안에다가 return ()=>{} + [] 의존배열과 함께 실행
5. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{}

### 1009 데이터 요청.

서버란? 부탁하면 부탁 들어주는 프로그램. 쉽게 설명하면 유튜브 프로그램, 네이버 웹툰 프로그램 -> 영상, 웹툰 달라고 때쓰면 보내주는 프로그램(서버)들입니다! 대신 '정확한 규격'에 맞춰 데이터를 요청해야 줍니다~
그 규격이란 이것입니다.

1. 방법(GET/POST/..)
2. 어쩐자료?(URL) - url은 서버개발자한테 문의해주세요..

예를 들어서 쇼미더럭키짱이라는 네이버웹툰을 보고싶으면
https://comic.naver.com/webtoon/list?titleId=783054 여기 URL로 GET요청하면 보내줍니다.

예를 들어서 독립일기라는 네이버웹툰을 보고싶으면
https://comic.naver.com/webtoon/list?titleId=748105 여기 URL로 GET요청하면 보내줍니다.

그렇다면 어떻게 서버요청을 할까요? 가장 기본적으로는 요청 url을 url입력창에 입력하면 됩니다.. 하지만 누가 그렇게 요청을 할까요?! 우리는 js코드로 ajax사용해서 GET요청을 해봅시다. ajax는 새로고침이 되는게(get post는 새로고침 됨) 싫으면 사용하면 됩니다.

ajax(비동기적으로 서버와 데이터를 교환)
장점은 요종도

- 새로 고치지 않고도 정보를 업데이트할 수 있게 합니다.
- JavaScript를 사용하여 서버에 HTTP 요청을 보내고, 서버는 데이터를 처리한 후 응답을 반환하므로 사용자 경험을 향상시키고 웹 애플리케이션을 동적으로 만들 수 있습니다.

AJAX로 GET/POST요청하려면 방법 3개 중 택1 하면 됩니다.

1. XMLHttpRequest라는 옛날 문법 쓰기
2. fetch() 라는 최신 문법 쓰기
3. axios 같은 외부 라이브러리 쓰기

3번이 가장 편하니 3번을 써봅시다. axios는 기존 fetch의 중간단계에서 res.json() 이런거 필요없어서 더 좋네요!

### 1010

원래 서버와 문자만 주고 받을 수 있다. 그래서
"{"name":"kim"}" 과 같은 모양의
JSON 데이터는 문자 취급을 받을 수 있어서 api요청에서 주고 받을 수 있다.
axios는 실은 JSON으로 데이터를 받지만, .json()이 생략 가능하다는 것에서 유추할 수 있겠지만 axios가 array로 자동으로 변환해주기 때문에 가능한 일이다.

참고로 axios POST요청은.. axios.post('URL', {name : 'kim'}) 이런식으로 날리면 됩니다.

-탭만들기
모달창이 여러개 있다고 생각해보면 좋다.

1. html css로 탭 디자인 미리 완성하기
2. UI의 현재 상태를 저장할 state 하나 만들기(숫자, 문자, 불린 상관없지만 탭 같은 경우는 숫자가 간편할 것 같군요)
3. state에 따라서 UI가 어떻게 보일지 작성

스위치와 기계..를 만들자.. 중요! 스위치는 useState의 상태값, 스위치는 버튼을 '누르면'의 행위가 되겠네요..
단독 컴포넌트는 return문이 필요하다.

### 1012

전환 애니메이션 주는 법

1. 애니메이션 동작 전 className 만들기
2. 애니메이션 동작 후 className 만들기
3. transition 추가
4. 원하는 곳에 className 추가

리액트의 automatic batching

state 변경함수들이 연달아서 여러개 처리되어야한다면 여러번 재렌더링 하지 않고,
state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링됩니다.
그래서 Detail.jsx의 useEffect안에 'end' 로 변경하는거랑 ' ' 이걸로 변경하는거랑 약간 시간차를 뒀습니다.

### 1012

이런 SPA\*html이 하나인 사이트 라이브러리의 단점이 뭘까요?
가장 큰건, 부모자식간에는 괜찮으나, 더 중첩되거나 멀어지면 컴포넌트 간에 state 공유가 어렵다..(props drilling 짜증이나요!)

이런 중첩을 방지하기위해서,

1. Context API 쓰거나
2. 외부 상태관리라이브러리 쓰던가요..

Context API는 사용이 간편하나, 컴포넌트 재활용과 성능 등의 문제 때문에 잘 쓰진 않지만 간단한 상태관리에는 자주 사용한다.

createContext를 export 하고 사용할 컴포넌트에서 import를 하면, 오브젝트 형식으로 남는다. 그 다음은 destructuring 해서 사용하면 된다.

Context API의 단점은,
상위에서 사용한 state가 변경되면 하위에서 Context로 state를 사용하지 않아도 전부 재렌더링이 된다. (쓸데없는 것까지 재렌더링) 큰 사이즈에선 성능이슈, 다른 페이지에서 import등을 마구잡이로 하다보면 재사용이 힘들다..

### 1014

Route + Redux toolkit 복습
리덕스 왜씀? -컴포너늩간 state 공유를 편하게 하기 위해, props 전송 필요가 없어짐.

Redux 편하니까 맨날 쓰면 되겠네요?
간단한거 만들 때
컴포넌트가 몇개 없을 때
이럴 땐 그냥 props 쓰는게 더 코드가 짧습니다.

-Redux store에 state 보관하는 법

step 1. createSlice( ) 로 state 만들고
step 2. configureStore( ) 안에 등록하면 됩니다.
configureStore에 등록한 state는 모든 컴포넌트가 자유롭게 사용가능합니다.

-Redux store에 있던 state 가져다쓰는 법
useSelector((state) => { return state } ) 쓰면 store에 있던 모든 state가 그 자리에 남습니다. useSelector((state) => state.user ) 이런 식으로 쓰면 좀 더 편리할 수도 있습니다.

-Redux state 변경하는법
state를 수정하는 함수(reducers)를 slice내부에 만들고, 원할때 그 함수를 실행해달라고 store.js에 요청해야한다. 함수는 기존 state를 파라미터로 받음, 여러개의 함수 추가 가능.
함수를 만들고, export를 해야한다. 스테이트 보관함(변수이름)의 이름.actions로 저장하면 객체형태로 남는다. 구조분해 할당으로 사용하자.
필요한 곳에서 useDispatch(변경함수)형태로 사용하자.

이런 방식이 어려워 보일 수 있으나, 크기가 큰 프로젝트에선 버그 방지 목적의 측면에서는 우수하다. state가 매우 많다고 가정할 때에, 수정함수를 dispatch를 통해서 요청하는데, 요청하는 애들 추적할 수 있기 때문에(모든 컴포넌트에서 직접 state를 수정하면 범인 찾기 불가능, 중간에 dispatch에게 부탁해서 함수를 호출해서 state를 변경해야 하기 때문. dispatch가 있기때문에 중간에서 범인 색출 가능), 범인을 찾기 수월하다.

-state가 arr/obj인 경우 변경함수 작성법
직접 접근해서 state를 직접 변경해도 가능하지만,

1. 수정함수만들기
2. export/import하기
3. dispatch(수정함수()) 에 담아서 사용하기. 수정함수()의 파라미터는 store의 수정함수의 2번째 파라미터(action)의 action.payload 로 들어온다.

### 1017

-왜 브라우저 새로고침하면 state 초기값으로 돌아가요?
원래 그렇답니다. 원래 브라우저를 새로고침이 일어나면 html,js 파일을 처음부터 다시 읽기 때문에 state도 처음으로 돌아가기 때문에 원래 그렇다구요!
그게 싫으면 서버로 보내서 DB에 영구저장 하십시오!

그것도 모르겠고 DB도 모른다라고하면 localStorage로 반영구적으로 저장가능합니다. localStorage는 브라우저에서 제공하는 데이터 저장소. ls는 key: value 형태로 저장가능. 문자만 저장가능.. 최대 5MB까지 저장 가능.
유저가 의도적으로 삭제하거나 청소하지 않는 이상 반영구적으로 저장가능.
참고로 local storage는 재접속해도 남아있음.
session storage는 휘발성. 브라우저 끄면 날라감.
localStorage.setItem('key','vlaue') 저장하는 행위
localStorage.getItem('key','value') 출력하는 행위
localStorage.removeItem('key') 삭제하는 행위
안타깝게도 수정하는 행위 없음. 꺼내서 '수정'하고 다시 넣어야함.

-문자는 저장가능하다 쳐도, arr/obj는?
JSON으로 바꿔서 문자취급한 뒤 넣어주면 됩니다!

### 1018

코딩 한줄 못짜겠는 사람 -> 컴퓨터한테 명령을 내리십시오. -> 컴퓨터는 지능0의 빡통입니다. 아주 상세하게 설명해야합니다. 그렇다면
코드부터 짜지말구 -> 한글먼저 쓰고 코드로 옮기십시오.

그렇다면 '최근 본 상품 목록'을 구현하기 위해선.?

1. 누가 Detail 페이지 접속하면
2. 상품번호ID 가져와서 (대충 '찾은상품' 이라는 변수가 이미 존재하는듯)
3. localStorage에 우선 array 형식으로 보관(배웠던 setItem을 이용)하고..
   (로컬스토리지에서 꺼내고 넣을때에는 JSON같은 것만 잘 생각하면서 변환시키면 됨.)

이런 식으로 하나하나 상세히 설명해야 명령을 수행합니다. 컴퓨터는 빡통이라그럼

\*redux-persist 이런거 쓰면 모든 state를 localStorage에 자동저장해줍니다.

### 1019

이런경우들이 생깁니다.
-ajax 성공/실패시 특정 html을 보여주려면? -몇초마다 자동으로 ajax 요청? -실패시 몇초 후 요청재시도?

실시간 sns/ 코인거래소등 실시간 데이터를 다룰때 유용한 react-query를 쓰면 좋습니다.

장점

// 장점1. 성공/실패/로딩중 쉽게 파악가능 (result 변수로) result.data, result.isLoading, result.error 등을 가진 객체를 반환.
// 장점2. result에 들어있는 ajax요청을 틈만 나면 refetch 해줌니다! (신선하게) refetch 간격도 역시 임의로 조정하거나 끌 수 있음.
// 장점3. 실패해도 retry해줌.
// 장점4. state공유 안해도 됨. 예를 들어 자식컴포넌트에서도 ajax로 똑같은 요청을 2번해도 한번만 요청함. 불안하면 props 전송하세요.
// 장점 5. ajax 결과 캐싱가능. 5분전에 했던 요청이 있으면 우선적으로 기존 값을 사용하고, 새로운 성공결과는 나중에 반영, 더 빠르게 반영된다는 느낌을 줄수있음. redux-toolkit 설치하면 RTK Query도 깔린다는데.. 조금 더럽다는데요..

-성능개선 1 : 개발자도구 & lazy import
props 보냈는데 왜 출력 안돼?
이미지가 왜 안나와?
=> 이런건 개발자 도구에서 확인해보자.
크롬 확장프로그램 : React Developer Tools 을 이용해서 디버깅을 효율적으로 할 수도 있다.

그 안에서 Profiler 으로 성능저하되는 컴포넌트 범인찾기.
사실 컴포넌트에서 이상하게 코드를 짜지 않는 이상 컴포넌트 렌더를 걱정할 필요는 없다. 대부분의 지연시간은 서버에서 데이터가 늦게오기 때문이다.

또 하나의 성능개선 테크닉. 리액트는 SPA인데, 특징은 사이트를 발행하면 npm run build등으로.. 발행해보면, 하나의 큰 js,html,css.. SPA의 특징은 하나의 js파일에 모든 코드를 다 쑤셔넣음.. 그래서 js,html,css..를 다운받느라 초기 로딩속도가 조금 느리다는 특징이 있는데, 이 js파일을 잘게 분할하기 위한 방안을 생각해보자..

단적인 예로, App.js 에 있는 Detail.js, Cart.js와 같은 컴포넌트는 메인페이지에서 미리 로드될 필요가 없다. =>\* lazy하게 로드되도록 코딩할수있음. 필요해질때 import 해주세요~
lazy 문법으로도 똑같이 import가 가능한데 이 경우엔
"Detail 컴포넌트가 필요해지면 import 해주세요" 라는 뜻이 됩니다.
그리고 이렇게 해놓으면 Detail 컴포넌트 내용을 다른 js 파일로 쪼개줍니다.
그래서 첫 페이지 로딩속도를 향상시킬 수 있습니다.
필요할 것 같으면 씁시다.

단점으로는, lazy 사용하면 당연히 Detail 컴포넌트 로드까지 지연시간이 발생할 수 있습니다. 그럴 땐

1. Suspense 라는거 import 해오고
2. Detail 컴포넌트를 감싸면
   Detail 컴포넌트가 로딩중일 때 대신 보여줄 html 작성도 가능합니다.
   귀찮으면 <Suspense> 이걸로 <Routes> 전부 감싸도 됩니다.

기능구현을 다했다 ? => 어떤코드를 짜든간에 성능개선임.

### 1020

재렌더링 막는 memo, useMemo

이론상 부모컴포넌트에서 state의 변화가 있따면 자식컴포넌트들도 재렌더링이 일어난다. memo는 만약 자식 컴포넌트가 계산이 많이 필요한 컴포넌트라면, 꼭 필요할 때만 재렌더링 하라고 부탁할 수 있습니다.

그렇다면 특정상황이란 언제인가? => '자식 컴포넌트로 전송되는 props가 변화할때만 '재렌더링이됨. 그렇게 되면 기존 props === 신규 props를 항상 비교하는데 시간이 더 오래걸린다면, (props가 길고 복잡하다면)더 손해일 수도 있음. 꼭필요한 곳에만 써야함.

useMemo? 컴포넌트 렌더링시 1회만 실행해줌. 생긴것은 useEffect와 유사하지만 차이점이라면 useEffect는 html이 렌더링 다 되고나서 실행되며, useMemo는 렌더링 됨과 동시에 실행됨. (실행시점의 차이) useEffect 처럼 dependency도 넣을 수 있어서 특정 state, props가 변할 때만 실행할 수도 있습니다. 그럼 재렌더링마다 동작안하니까 좀 효율적으로 동작하겠죠?

### 1026-27

성능 개선 3: useTransition, useDeferredValue

1. 일관된 batching

```
setCount(1)
setName(2)
setValue(3)   //여기서 1번만 재렌더링됨
```

state변경함수를 연달아서 3개 사용하면 재렌더링도 원래 3번 되어야하지만
리액트는 똑똑하게도 재렌더링을 마지막에 1회만 처리해줍니다.
일종의 쓸데없는 재렌더링 방지기능이고 batching이라고 합니다.

리액트 17버전까진 ajax요청, setTimeout안에 state변경함수가 있는 경우 batching이 일어나지 않았지만 18버전 이후 부터는 어디 있든 간에 재렌더링은 마지막에 1번만 됩니다.

2. useTransition
   리액트18버전 이후부터 렌더링 성능이 저하되는 컴포넌트에서 쓸 수 있는 혁신적인 기능. useTransition 이건데 이걸로 오래걸리는 부분을 감싸면 렌더링시 버벅이지 않게 해줍니다. 사실 카드빚 돌려막기 같은 것입니다.

- useTransition() 쓰면 그 자리에 [변수, 함수]가 남습니다.
  let [isPending, startTransition] 보통 이렇게 씁니다.
- 그 중 우측에 있는 startTransition() 함수로 state변경함수 같은걸 묶으면
  그걸 다른 코드들보다 나중에 처리해줍니다.

기본적인 동작원리는
브라우저는 싱글스레드라서 1개씩의 일밖에 못한다. 그래서 만약 인풋에 state변경 함수가 있고, 그에 따라 html 태그 만개가 생성되는 무거운 업무가 있따면

브라우저가 할일이

1. 문자를 <input>에 보여주기
2. <div> 만개 생성하기라면

startTransition()으로 감싸면(콜백으로 업무를 보내버리면)

1. 먼저 문자를 <input>에 보여주기
2. 한가할때 <div> 만개 생성하기
   물론 근본적인 성능개선이라기보단 특정코드의 실행시점을 뒤로 옮겨주는 것일 뿐입니다. html이 많으면 여러페이지로 쪼개십시오.

그렇다면 첫번째 변수 isPending 은 무엇인가요.
startTrasition이 처리 중일때에 true 상태가 되는 변수입니다!.

useDeferredValue(state) 를 변수에 담아써도 해당 state를 나중에 처리해줌.

### 1103

Node+Express 서버와 React 연동
서버란, 유저가 ??데이터를 요청하면 그 데이터를 보내주는 간단한 프로그램. 웹서버란, 웹문서를 요청하면 진짜 웹문서를 보내주는 서버프로그램.(웹문서 = html파일)

어떤 서버의 언어를 쓰든간에 리액트 적용하는 법은 똑같음. 왜냐하면 리액트도 일종의 html을 이쁘게 만들어주는 툴일 뿐임. 즉, 서버와 react를 연동한다는 의미는 유저가 html요청하면 서버는 리액트만든 html 보내주는거임.