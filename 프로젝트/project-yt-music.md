### 10/6
YT MUSIC 복습 
React(CSR)
- SPA 
- SEO 상관없는 인터렉션이 많은 모든 웹
- 결과물: JS 정적파일
- 장점 : 웹에서 앱처럼 UI상호작용이 가능 , view렌더링을 브라우저가 하기때문에 서버트래픽 감소시킴, 새로고침이 발생하지않는다
- 단점 : SEO 불리, 초기 렌더링 느림


Next.js(SSR)
- 클라이언트에서 요청이 들어올떄마다 매번 새로운 view를 만들어서 제공
- 결과물 : 서버 Application(+ html 정적파일) 
- 장점 : SEO 좋음, 첫 페이지 로딩속도가 클라이언트 사이드 렌더링에 비해 더 빠르다 
- 단점 : 페이지 이동시 마다 클라이언트가 서버에게 필요한 데이터를 요청하고 서버가 응답하는 방식, 초기 로딩이후 페이지 이동시 속도가 다소 느리다 