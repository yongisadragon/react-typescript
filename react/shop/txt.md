### 0810

리액트는 사이트발행 전에 html css 파일을 압축하는데, 이걸 bundling이라고 한다. (참고로) public 폴더에 있는 사진 파일이라든지, 아직 압축이 되지 않았을 것이다.
public폴더에 있는걸 쓸때에는 src경로에 /만 입력하고 찾으면된다. (발행주소를 .com으로 마무리됐을때에만. 가능)
권장방식은 src={process.env.PUBLIC_URL + '/logo192.png'} 이런식으로 작성하는 것. (process.env.PUBLIC_URL는 내 사이트 현재 경로.)
