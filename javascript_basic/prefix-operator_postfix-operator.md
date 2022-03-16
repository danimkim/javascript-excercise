### 전위/후위 증감연산자 연산 이해

전위 연산자(`++변수`,`--변수`) : 먼저 증감 후에 해당 문장 실행\
후위 연산자(`변수++`, `변수--`) : 해당 문장을 실행하고 증감
<br><br>
```js
let num = 10;

console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num);
```
10을 할당한 변수 num을 증감하여 출력하는 예시이다.\
한 문장씩 차례대로 살펴보자.
<br><br>
```js
let num = 10;

// 후위 연산
console.log(num++); // 10
// console.log(num)를 먼저 실행한다.
// 10 출력
// num을 1 증가시킨다.
// num = 11

// 전위 연산
console.log(++num); // 12
// num을 먼저 1 증가시킨다
// num = 12
// console.log(num)를 실행한다
// 12 출력

// 후위 연산
console.log(num--); // 12
// console.log(num)를 실행한다
// 12 출력
// num을 1 감소시킨다
// num = 11

// 전위 연산
console.log(--num); // 10
// num을 먼저 1 감소시킨다
// num = 10
// console.log(num)를 실행한다
// 10 출력
```
<br>

후위 연산의 경우, for문을 생각하면 쉽게 이해할 수 있다.
```js
let i;
for (i = 1; i < 4; i++) {
  if(i>1){ // 첫번째 반복 이후 실행
    console.log(`for문 내 문장 실행 후 i 값 :${i}`)
  } 
  console.log(`${i}번째 반복`);
}
console.log(`for문 반복이 모두 끝난 후 최종 i의 값: ${i}`)
```

```
// 결과
> 1번째 반복 
> for문 내 문장 실행 후 i 값 :2 
> 2번째 반복 
> for문 내 문장 실행 후 i 값 :3 
> 3번째 반복 
> for문 반복이 모두 끝난 후 최종 i의 값: 4
```
총 3번을 반복하는 for문이다.\
for문 블록 안의 문장들을 모두 실행한 후 i를 증가시킨다.\
최종 i값이 4인 것은 for문 반복을 모두 마친 후(마지막 3번째 반복 후) i를 증가시킨 후에 최종 종료되기 때문이다.

