//11-20


//짝수와 홀수

function solution(num) {
    var answer = '';
    if (num % 2 == 0) {
        answer += 'Even'
    } else {
        answer += 'Odd'
    }
    return answer;
}


// 배열의 평균값

function solution(arr) {
    var answer = 0;
    let sum = 0;
    let sumMean = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }sumMean = sum / arr.length

    return sumMean
}


// 평균 구하기

function solution(arr) {
    var answer = 0;
    let sum = 0;
    let sumMean = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }sumMean = sum / arr.length

    return sumMean
}


// 자릿수 더하기

function solution(n) {
    let answer = 0
    n = n.toString();
    for (let i of n) {
        answer += Number(i);
        
    }return answer;
}


// 약수의 합

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            answer += i
        }
    }
    return answer;
}


// 나머지가 1이 되는 수 찾기

function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i == 1) {
            answer += i
            break;
        }
    }
    return answer;
}


// x만큼 간격이 있는 n개의 수

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}


// 문자열을 정수로 변환

function solution(s) {
    var answer = 0;
    answer += parseInt(s)
    return answer;
}


// 자연수 뒤집어 배열만들기

function solution(n) {
    var answer = [];
    let arr = String(n).split("").reverse().map(Number);
    answer = arr;
    return answer;
}


// 정수의 제곱근

function solution(n) {
    var answer = 0;
    let j = Math.sqrt(n)
    if (Number.isInteger(j)) {
        answer += (j + 1) ** 2
    } else {
        answer = -1
    }
    return answer
}
