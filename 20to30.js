// 20. 내림차순 정렬

function solution(n) {
    let answer = 0;
    j = n.toString().split("")
    for (k = 0; k <= j.length; k++) {
        for (let i = 0; i <= j.length - k - 1; i++) {
            if (j[i] < j[i + 1]) {
                const temp = j[i];
                j[i] =  j[i + 1];
                j[i + 1] = temp;
            }
        }
    } answer = Number(j.join(''))
    return answer;
}


// 21. 하샤드 수

function solution(x) {
    let k = x.toString().split("");
    let sum = 0;
    for (i = 0; i < k.length; i++) {
        sum += Number(k[i]);
    } if (x % sum == 0) {
        return true
    } else {
        return false
    }
}


// 22. 두 정수 사이의 합

function solution(a, b) {
    var answer = 0;
    let sum = 0;
    const start = Math.min(a, b)
    const end = Math.max(a, b)
    for (let i = start; i <= end; i++) {
        sum += i;
    }answer = sum;
    return answer;
}


// 23 콜라츠 추측

function solution(num) {
    var answer = 0;
    let count = 0;
    for (let i = 0; i < 500; i++ ) {
        if (num === 1) {
            return count;
        }
        if (num % 2 == 0) {
            num = num / 2;
            count += 1
        } else {
            num = (num * 3) + 1
            count += 1
        }
    }return -1;
}
