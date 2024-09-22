# 09/22 
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

function solution(lines) {

 let [[x1, x2],[x3,x4],[x5,x6]] = lines
 let maxLines = Math.max(x1,x2,x3,x4,x5,x6)
 let minLines = Math.min(x1,x2,x3,x4,x5,x6)
 
 let arr = new Array(maxLines - minLines + 1).fill(0);
 for(const[start, end] of lines){
     for(let i =start; i<end; i++){
         arr[i-minLines]++;
     }
 }
    
   let result = arr.filter((a)=> a>=2)
   return result.length
    
 
}