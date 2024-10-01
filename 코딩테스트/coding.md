## 09/22 
### 프로그래머스 
### 겹치는 선분의 길이
lines	result
[[0, 1], [2, 5], [3, 9]]	2
 [[-1, 1], [1, 3], [3, 9]]	0
 [[0, 5], [3, 9], [1, 10]]	8

내가 생각한 쟁점 
1. 선분의 길이 범위 구하기 (최저값, 최고값)
2. 겹치는 선분의 범위 계산 +1 씩해주기
3. 2이상 인 값 추출  
```javascript 
function solution(lines) {

 let [[x1, x2],[x3,x4],[x5,x6]] = lines
 let maxLines = Math.max(x1,x2,x3,x4,x5,x6)
 let minLines = Math.min(x1,x2,x3,x4,x5,x6)
 
 let arr = new Array(maxLines - minLines + 1).fill(0);
 for(const[start, end] of lines){
     for(let i =start; i< end; i++){
         arr[i-minLines]++;
     }
 }
    
   let result = arr.filter((a)=> a>=2)
   return result.length
    
 
}
```

## 09/23
### 특이한 정렬

정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

numlist	n	result
[1, 2, 3, 4, 5, 6]	4	[4, 5, 3, 6, 2, 1]
[10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000]

내가 생각하는 쟁점
1. 정렬시 Math.abs 절대값사용, 
2. 같은 Math.abs 일떄 더 큰 수 생각하기
```javascript 
numlist.sort((a,b)=> {
  const sorted= Math.abs(n-a) - Math.abs(n-b) // 절대값으로 정렬 
  if(sorted ===0){return b-a} // 만약 두값이 같을떄 ex) n= 20 안에 배열요소 19 21  일때 더 큰 값인 21일을 넣어줘야함
  return sorted // 아닐경우 절대값으로 정렬한값 넣기
})
```
## 9/24
### 등수 매기기
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

score	result
[[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
[[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	[4, 4, 6, 2, 2, 1, 7]

내가 생각하는 쟁점 
1. score 값의 평균 점수를 구하기 
2. 정렬된값 구하기 --> 원본값 사용하면안되고 복사본으로 진행!!!! -> 내림차순으로
3. 평균값에서 indexOf 를 활용하여 정렬된값의 index+1 로 순위를 지정해주기 index가 0 ,1 ,2,3,4 이렇게 되기때문에 순위를 나타내주려고 +1
```javascript 
let avg = score.map(a => (a[0]+a[1])/2)
let sorted = avg.slice().sort((a,b)=> b-a)
return avg.map(v=> sorted.indexOf(v)+1)
```

## 9/25
### 유한 소수

소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

a	b	result
7	20	1
11	22	1
12	21	2

내가 생각하는 쟁점
1. 소수점을 잘라서 봤을때 랑 그냥 나눴을때 값이 같아야 유한소수 아니면 유한소수가 아니다.
toFixed로 소수점을 자른다 --> 문자열로바뀌니 숫자타입으로 바꿔주기 
```javascript 
return Number((a/b).toFixed(10)) === a/b ? 1 : 2
```

소스트리 테스트 커밋

테스트