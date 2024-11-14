function solution(numbers) {
    let sumMean = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    sumMean = (sum / numbers.length)
    return sumMean;
}