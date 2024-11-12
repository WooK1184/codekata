function solution(age) {
    var answer = 0;
    let year = 2022;
    if (0 <= age <= 120) {
        answer += year - age +1
    } else {
        console.log(Error)
    }
    return answer;
}
