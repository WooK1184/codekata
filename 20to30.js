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
    let n = Number(k[0]) + Number(k[1])
    if ( x % n === 0) {
        return true
    } else {
        return false
    }
} 
