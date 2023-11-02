### 1102

Progressive Web App이라는건데 이건 웹사이트를 안드로이드/iOS 모바일 앱처럼 사용할 수 있게 만드는 일종의 웹개발 기술입니다. 리액트로 모바일 App 처럼 동작하는 사이트 만들어놨죠? iOS, Android 앱으로 발행하는게 아니라 웹사이트 자체를 스마트폰 홈화면에 설치합니다. 그게 바로 PWA 입니다.

PWA는 일종의 사기.

1. 설치 마케팅 비용 적음 (웹사이트는 방문 유도하는 비용 엄청 저렴)
2. 아날로그 유저들 배려 가능 (40-50대들에게 쉽게 사기치기 가능)
3. h,c,j 로만 앱까지 가능
4. 푸시알림, 센더 등

단지 설치 과정이 이질적인 느낌이다.(앱스토어에 방문하지 않고 설치하기 떄문에)
그렇기 대문에 웹사이트를 간지나게 만들었따면 PWA로 앱처럼 쓸 수 있게 만들어보세요.

`npx create-react-app 프로젝트명 --template cra-template-pwa`

Q. 잉 그럼 프로젝트 다시만들어야해요?

A. 맞습니다.

1. 다른 폴더에 위 명령어를 이용해 프로젝트 새로 하나 만든 다음에
2. 기존 프로젝트의 App.js App.css index.js 이런 파일들을 새 프로젝트로 복붙하시면 됩니다. 내가 건드린 파일은 다 복붙하셈 (주로 src) 근데 index.js 파일은 많이 바뀐점이 좀 있어서 차이점만 잘 복붙하시면 될듯합니다.
3. router, redux 이런 라이브러리를 설치했다면 그것도 새프로젝트에서 다시 설치하시면 됩니다.

PWA는 manifest.js와 service-worker.js 가 필요한데 npx했으면 자동으로 깔려있습니다.
public/manifest 에 앱이름,,아이콘.. 시작 url(첫페이지) 등등 설정할 수 있는 파일임. (플랫폼마다 요구하는 사이즈가 다르게 때문에 여러가지로 준비돼있습니당.)
앱처럼 보이기위한
"display": "standalone", 설정은 상단 바 없어짐.

또한
index.js에 serviceWorkerRegistration.unregister(); 를 register로 바꿔야 빌드시 실제 service-worker.js (build 폴더안에) 가 생김. 기존에 있던것은 설정파일일 뿐임. service-worker.js 의 용도는 오프라인에서 사이트를 열 수 있게 도와줌. 모바일 앱들은 항상 오프라인에서도 동작이 됨. 비행기에서 앱이 열리는건 앱구동에 필요한 이미지, 파일들이 하드에 설치된 개념과 같음. (나는 hcj 파일을 미리 하드에 저장해두겠습니다~) -> 사이트 접속할때마다 다운받지말고 하드에 있는걸 쓰세요~ 가 serviceworkers 의 역할임.

asset-manifest.json 에 미리 캐싱할 파일들을 선언돼있음.(오프라인에서 사용 가능) 궁금하면 build 폴더만 따로 code . 로 열어서 라이브서버 띄워보시든가요 -> 그럼 아마 브라우저 상단에 설치버튼도 생겼을 거임. (그게 PWA임) 자주 바뀔수 있는 css파일..은 (의미가 없긴 하지만) node_modules/react-script/config/webpack.config.js 에서 InjectMenifest 에서 exclude에 내가 원하지 않는 파일을 정규식으로 등록하셈. .찎을땐 백슬래시 추가해서.

브라우저 도구에서 Application 탭에 들어가면 manifest / service 잘 동작 하는지 나와있음.
