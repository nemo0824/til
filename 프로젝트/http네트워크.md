IP 프로토콜
인터넷망에서 송신 수신을 할때 룰

IP패킷규칙 (출발지ip, 목적지ip, 기타 , 전송 데이터)
node 안에서 움직이면서 최종 목적지ip 주소까지 도달한다

IP프로토콜의 한계
1. 비연결성 
 - 패킷을 받을 대상이없거나 서비스 불능 상태여도 패킷 전송(즉 대상이 없어도 보내진다)
2. 비신뢰성
 - 패킷의 유실
 - 패킷의 순서대로 안옴
3. 프로그램 구분
 - 같은 IP사용하는 서버에서 통신하는 애플리케이션이 두개이상일시?


이러한 IP프로토콜 문제들을 개선하기 위해서 나온것들 

TCP/UDP

인터넷프로토콜 스택의 4계층
애플리케이션 -> 전송계층 -> 전송계층 -> 네트워크 인터페이스 계층

프로토콜 계층
애플리케이션(웹브라우저,채팅프로그램) -> os(tcp, ip, udp) -> 네트워크 인터페이스(lan카드)
 
 ip패킷 - tcp 세그먼트
 (출발지ip, 목적지ip   (출발지port, 목적지port, 전송제어, 순서 , 검증 정보    (전송 정보) ))

 

 TCP특징 
 전송제어 프로토콜
 연결지향 - TCP 3way handShake (가상 연결 개념적으로만 연결이된것 ) 연결후에 메시지를 보냄 (syn -> <- syn+ Ack  ACK->)
 데이터 전달 보증 (유실 방지)
 순서 보장

 신뢰할수있는 프로토콜
 현재 대부분 TCP 사용

 UDP 
 사용자 데이터 그램 프로토콜
 연결지향 x
 데이터 전달 보증 x
 순서 보장 x
 데이터 전달 및 순서 보장 x 속도 빠름 
 즉 == IP와 거의같음 

port 사용 이유 ===> 데이터 전송시 1개의 ip 즉 본인의ip로 전송을 받고 어떤 어플리케이션인지 구분하는용도
IP와 거의 같다 + Port + 체크썸 정도만 추가

최근에는 UDP가 뜨고있음 


PORT 
같은 IP 내에서 프로세스 구분
클라이언트가 여러개의 서버를 통신할떄 
즉 예를들면    대한민국 경기도  대한민국이 IP 경기도가 Port
            아파트 ip 호수 port


DNS
IP는 바뀔수 있다
전화번호부처러 DNS 도메인을 사용한다


URI 와 웹 브라우저 요청 흐름

URI 
웹 브라우저 요청 흐름 

Uniform Resource Indentfier

URI가 큰개념 자식들로 URL, URN

리소스의 위치
리소스의 이름 

URI 
Uniform 리소스를 식별하는 통일된 방식
Resource 자식, URI로 식별할수 있는 모든것 
Identifier 다른 항목과 구분하는데 필요한 정보

URN이름만으로 실제 리소스를 찾을수 있는 방법이 보편화 되지않음


URL
프로토콜 호스트명 포트번호 패스 쿼리 파라미터

스키마 
프로토콜: 어떤방식으로 자원을 접근할것인가 약속규칙
http, https , ftp 등등
http는 80 https 443 주로 사용 

쿼리파라미터, 쿼리스트링

fragment

prot 


웹브라우저 요청 흐름
https://www.google.com:443/search?q=hello&hl=ko

DNS 조회 IP 200.200.200.2
port는 443 생략
http요청 메시지 생성

http 메시지 전송
1. 웹 브라우저가 HTTP 메시지 생성
2. SOCKET 라이브러리를 통해 전달
 A: TCP/IP 연결(IP, PROT)
 B: 데이터 전달
3. TCP/IP 패킷 생성 HTTP 메시지 포함


출발 IP PORT
목적지 IP PORT로 감싸기 
 GET/search ? qq = hello & hl =ko HTTP/1.1 Host: www.google.com


 HTTP
 HTTP메시지에 모든것을 전송
 HTML,Text, Image, JSON, xml 서버간의 데이터 주고받을떄 HTTP 사용
 
 
 HTTP/1.1 가장 많이사용 

TCP: HTTP/1.1, HTTP/2
UDP: HTTP/3 (성능최적화 udp 속도를 위해서)
현재 HTTP/1.1주로 사용

Http특징 
클라이언트 서버구조 
무상태 프로토코 ㄹ비연결성
HTTP 메시지 
단순함, 확장가능

-클라이언트 서버구조
Request Response 구조
클라이언트는 서버에 요청을 보내고 응답을 대기 
서버가 요청에대한 결과를 만들어서 응답 

예) 복잡한 비지니스 로직이랑 화면을 구분하여  즉 프론트엔드와 백엔드를 구별하여
앞단쪽에서는 백쪽의 비지니스 로직을 몰라도되고 
화면에만 더 집중할수있음

백쪽에서는 아키텍쳐나 대용량 트래픽을 어떻게 다룰지 더 고심할수있게됨

-무상태 프로토콜
서버가 클라이언트 상태를 보존x
장점 : 서버 확장성 높은 (스케일 아웃)
단점 : 클라이언트가 추가 데이터전손

상태를 유지하지않음 
ex) 점원이 바뀌어도 어떻게할지 알수있음 
한마디로 인수인계를 할필요가없슴
확장성이 높다 
즉 상태유지하지않을때 서버1에서 장애나면 중계서버에서 서버2로 넘겨줘서 작업을 진행할수있음



상태 유지를하면 
문맥이 없어지면 어떻게 할지 모름 
즉 상태유지하면 서버1에서 장애가나면 아예 작업이 진행이안됨


스케일아웃 - 수평확장에 유리 


무상태 단점

모든것을 무상태로 설계 할수 있는 경우도 있고 없는 경우도 있다
무상태 
로그인이 필요없는 ㄷ단순한 서비스 소개화면
상태유지
로그인
로그인한 사용자의 경우 로그인 했다는 상태를 서버에 유지
일반적으로 브라우저 쿠키와 서버 세션을 사용해서 상태 유지 
상태유지는 최소한으로만 사용
데이터량이 많다 

웹 애플리케이션 설계시 최대한 무상태로 설계 확장성에 따른 문제 


연결하는모델
TCP/IP는 기본적으로 연결을 유지하고있는상태임 요청 => 응답 -> 요청
즉 클라이언트1 클라이언트2 클라이언트3 이 서버1과 연결되어있는상태 
클라이언트 2 클라이언트3 아무것도안해도 연결되어있기때문에 자원소모

비연결하는모델
클라이언트1 클라이언트2 클라이언트3 이 서버1과 용무를 보고 바로 연결끊음
서버연결유지 x최소한 자원 유지

HTTP 지속 연결
연결유지해서 기존에 HTML , css, ///자바스크립트 ///이미지 이요청을 새로 계속 연결끊고 했다면
지속연결을 이용해서 한번만연결해서 속도를 줄일수있음 


최대한 스테이트리스하게 설계하는게 중요
하지만 뭐 이벤트 같은거 6시에 예약하는거 라던가 이런거는 소용은없긴함 왜냐면 그때 정확히 모든사용자가 들어와서 요청하는거기때문에
스테이트리스로하면 원래는 실제 사용자가 수천명이 한시간동안이용해도 검색 기능 쓸때 몇십명밖에안겹침 많아도 
하지만 저런 이벤트들이있을경우에는 소용없긴함


최대한 무상태로가면서 어쩔수없는경우만 상태유지로


HTTP 메시지
HTTP 메시지에 모든것을 전송한다 

HTTP 메시지는 요청메시지와 응답메시지로나뉜다

시작라인 - 헤더 - 공백라인 - 바디 

요청 메시지 시작라인 (HTTP 메서드 , 요청대상(절대경로), HTTP version)
응답 메시지 시작라인 (HTTP 버전, 상태코드(200,400,500) 이유문구)


HTTP 헤더 
HTTP 전송에 필요한 모든 부가정보

HTTP 메시지 바디
실제 전송할 데이터
HTML, 문서, 이미지 영상 ,JSON등 바이트로 표현할수 있는 모든 데이터 전송가능


HTTP 요약 
HTTP 메시지에 모든것을 전송한다 
HTTP1.1 버전을 가장 많이사용한다
클라이언트와 서버구조 이다 
무상태 프로토콜이다
HTTP 메시지
단순함, 확장가능 


HTTP 메서드 
GET, POST, PUT, PATCH, DELETE
API URL 의 설계 
보통 resouce 회원 이라고 하면 회원 하나만 입력을 하는것을 권장하고 가장 이상적으로 사용한다 
get 조회 
put 대체, 생성 수정 (예) 파일 처럼 있으면 덮어씌우고 없으면 생성한다)
post 등록 post는 모든 기능 다됨
patch 수정(요소의 하나만 수정가능 예를들면 객체로 name, age 가있을때 age만 수정해도 잘됨 반면 put을 사용해서 age만 수정하기되면 name기존에있던건 없어지게됨)


get 리소스조회용
서버에 전달하고싶은 데이터는 쿼리 쿼리스트링을 통해서 절달
메시지 바디 사용해서 데이터를 전송할수도 있지만 지원하는곳이 많지않아서 권장하지않는다

post 요청 데이터 처리 
메시지 바디를 통해 서버로 요청 데이터 전달
서버는 요청 데이틀 처리
메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행한다 
새 리소스생성, 요청 데이터처리, 다른 메서드로 처리하기 애매한것들 모두 post로 사용


put 
리소스를 대체 
로스스가 없으면 생성 
클라이언트가 리소스를 식별한다 즉 --> 클라이언트가 리소스 위치알아야함 ex) memebers/100
여기서 100위치알아야함


http 메서드의 속성 
1.안전
2.멱등
3.캐시기능


멱등 ==> 한번 호출하던 100번 호출하던 똑같아야함 결과가 
get, put, delete 최종결과같음

post는 멱등이아님 두번 호출하면 중복결제와같은 문제가 발생할수있음 결제시같은 상황


캐시 
get, head, post, patch 캐시가능
보통, get, head정도로만 캐시사용


클라이언트 ===> 서버로 요청 하는방법 두가지
1. 쿼리파라미터를 사용한 요청 get에서사용 url에 노출  ?name=임재원&age=29 key value 로전달
2. 메시지 바디를 통한 데이터 전송 (post, put, patch) 보안성 좋음 


클라이언트에서 서버로 데이터 전송 4가지상황
1. 정적 데이터조회
2. 동적 데이터 조회
3. html form을 통한 데이터 전송
4. http api를 통한 데이터 전송 (서버 to 서버  웹클라이언트(react, ajax))


get은 조회에만 사용 리소스변경이 발생하는곳엣서는 사용하면안됨  ==> 검색같은건 사용가능 리소스 변경  x


http api 설계 예시 
1. http api - 컬렉션
- post
회원관리 api 제공

2. http api - 스토어
-put 기반 등록
정적건텐츠 , 원격파일관리

3. html from 사용
get, post만 지원

http 상태코드
1xx  요청 수신되어 처리중
2xx 요청 정상 처리 성공
3xx 요청완료 하려면 추가행동필요
4xx 클라이언트
5xx 서버


200 ok
201 created
202 accepted - 요청이 접수되었으나 처리가 완료되지않음
204 no content -서버가 요청으 럿ㅇ공적으로 수행했ㅈ2ㅣ만 응답 페이로드 본문에 보낼 데이터가없슴


300 muliple choices
301 moved permanently
302 found
303 see other
304 not modified
307 temporary redicred
308 permanent redircet

3xx 응답 결과에 location 헤더가있으면 그 location 위치로 자동 이동 
