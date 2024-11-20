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
