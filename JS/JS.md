## 9/25
### 쓰로틀링, 디바운싱 에 대해서 알아보자

#### 쓰로틀링 (일정 시간 동안)
 이벤트가 많이 발생하더라도 일정시간 동안 이벤트가 1번만 발생하도록 처리하는것

```javascript
let timer = 0;

const handleLogin = () =>{
    console.log('클릭')

    if(timer){
        return;
    }

    timer = setTimeout(()=>{
        console.log('로그인')
        timer =0;
    }, 3000)
}
```

코드설명
timer = 0  // 타이머를 0초로설정

click 했을시에 handleLogin 함수가 호출된다 가정하고

--첫번째 클릭시--
1. time의 초기값이 0 임으로 if(time) 조건이 거짓으로 되면서 밑으로 내려감
2. 바로 setTimeout이 실행이 됨
3. 3초후에 setTimeout 내부에서 '로그인" 이 출력되면서 time이 0 으로 설정

--두번째 클릭시--
1. time이 아직 0 이아니기때문에 
2. if문 조건이 참이되면서 아무일도 일어나지않고 함수가 종료됨

--세번째 클릭시(3초 지난상황이라고 가정)--
1. time이 0이되었기때문에
2. 첫번째 클릭과 동일하게 진행 





### 디바운싱  (마지막 이벤트 기준으로 시간이지나면)
 이벤트가 많이 발생하더라도 마지막 이벤트 기준으로 일정시간이 지나면 이벤트를 1번만 발생하도록 처리하는것

```javascript    
let timer = 0;

const handleLogin = () =>{
    console.log('클릭')

    if(timer){
        return;
    }

    timer = setTimeout(()=>{
        console.log('로그인')
        timer =0;
    }, 3000)
}
```