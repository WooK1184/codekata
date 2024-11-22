// 21. 내림차순 정렬

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
