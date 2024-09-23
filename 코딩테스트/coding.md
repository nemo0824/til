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


#09/23
#특이한 정렬

정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

numlist	n	result
[1, 2, 3, 4, 5, 6]	4	[4, 5, 3, 6, 2, 1]
[10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000]

내가 생각하는 쟁점
1. 정렬시 Math.abs 절대값사용, 
2. 같은 Math.abs 일떄 더 큰 수 생각하기

numlist.sort((a,b)=>{
  const sorted= Math.abs(n-a) - Math.abs(n-b) // 절대값으로 정렬 
  if(sorted ===0){return b-a} // 만약 두값이 같을떄 ex) n= 20 안에 배열요소 19 21  일때 더 큰 값인 21일을 넣어줘야함
  return sorted // 아닐경우 절대값으로 정렬한값 넣기
} )


#등수 매기기
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

score	result
[[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
[[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	[4, 4, 6, 2, 2, 1, 7]

내가 생각하는 쟁점 
1. score 값의 평균 점수를 구하기 
2. 정렬된값 구하기 --> 원본값 사용하면안되고 복사본으로 진행!!!! -> 내림차순으로
3. 평균값에서 indexOf 를 활용하여 정렬된값의 index+1 로 순위를 지정해주기 index가 0 ,1 ,2,3,4 이렇게 되기때문에 순위를 나타내주려고 +1
let avg = score.map(a => (a[0]+a[1])/2)
let sorted = avg.slice().sort((a,b)=> b-a)
return avg.map(v=> sorted.indexOf(v)+1)