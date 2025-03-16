<!-- 정적 타입 언어  -->

타입스크립트
변수 타입이 런타임 이전 컴파일시에 결정됨

<!-- 동적 타입 언어 -->

자바스크립트
변수의 타입이 런타임에 결정됨

<!-- 타입추론 -->

타입스크립트에서 개발자가 직접 타입을 명시하지않아도 ts가 변수나 함수의 타입을 자동으로 추론하는것
타입스크립트에서는 변수의 초기값, 연산결과, 함수의 반환값등을 분석해서 타입을 자동으로 결정

타입추론시 const, let으로선언한것들이 다르게 추론하게됨

const로 선언했을때 더 정확한 리터럴타입으로 추론함

let으로 선언했을때 더 넓은타입 즉 기존타입으로추론하게됨 ==> 타입넓히기
(null, undefined는 let으로 선언했을때 any로 추론하게됨)

<!-- 타입넓히기 -->

<!-- 리터럴타입 -->

<!-- 타입 단언 -->

타입스크립트 추론한타입을 개발자가 강제로 제한하는것
as const 로사용
잘못된 타입을 강제할시 런타입오류를 발생시킴

<!-- as const -->

as const 사용하면 타입이 좁아진다
값들이 readOnly가되면서 변경불가능해진다

<!-- 함수 선언 방식(함수와 함수타입을 같이명시), 함수 리터럴 타입(함수의 타입만명시) -->

함수 선언 방식: 함수와 함수타입을 같이명시할때는 return 쪽에 : 사용
function add(x:number, y:number):number{
return x+y
}

함수 리터럴방식 : 함수의 타입만으 명시할때 =>
let add : (x:number, y:number) => number

<!-- 타입스크립트가 자바스크립트로 어떻게바뀌는건지? 실제 사용할떄? -->

<!-- 튜플 -->

튜플: 각 자리에 고정된 타입이들어가있는 배열을 튜플이라고함
그런데 따로 push, pop같은건막지않음 자체저긍로 readonly로 마강줘야함

<!-- 리털럴 값은 타입으로 이용가능 -->

타입은 값이 될수없다.
타입으로 사용할수있는값과 타입으로 사용할수없는값 구분

타입은 값이될수없다
은 타입이될수있다

<!-- unknown -->

any와 비슷함 선언하게되면 그이후동작은 불가능
any는 이후 동작 가능

따라서 unknown으로 하게되면 타입검사가 되지않는상황은 발생하지않음
try,catch문에서 (e)여기에 unknown 발생함
const error = e as Error

<!-- {} -->

null과 Undefined를 제외한 모든 타입
{}타입인 변수를 실제로사용하려고하면 에러가발생

<!-- never -->

never타입은 어떠한타입도 대입할수없다
절대 실행이 끝나지 않는 함수 ex) 무한루프
오류를발생시키는 함수 ex) throw Error

<!-- 타입 별칭(type)과 interface  -->

type 에서함수 타입 지정 (a:number, b:number)=>number

interface에서 함수 타입지정
(a:number, b:number):number

interface에서 메서드 타입지정
interface Person {
name: string;
greet(): string;
}

<!-- inteface -->

인터페이스는 같은이름으로만들면 합쳐진다

<!-- 네임스페이스 -->

인터페이스 병합할때 단점 의도치않게 합쳐질수있음
export해서사용

nameSpace Example{
export inteface Inner{
test: string;
}
export type test2 = number
}

Example.Inner
Example.test

<!-- 인덱스 시그니처 -->

inteface Arr{
length: number;
key[number]: string;
}
<!-- 구조적 타이핑 -->
둘의 타입이같으면 결국 같은것으로인식
interface Money{
  a:number
  b: string
}
interface Money2{
  a:number
  b:string
}
둘이같은거임 같은객체로인식함
