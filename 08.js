function solution(angle) {
    var answer = 0;
    let result
    if (0 < angle && angle < 90) {
        result = 1;
    } else if (angle == 90) {
        result = 2;
    } else if (90 < angle && angle < 180) {
        result = 3;
    } else {
        result = 4;
    }
    answer += result
    return answer;
}
console.log(solution(90))