function elementsPlusPosition(arr) {
    return arr.map((num, idx) => {
        const sum = num + (idx+1);
        return sum > 9 ? sum % 10 : sum;
    });
}
const arr1 = [1, 2, 4];
const res1 = elementsPlusPosition(arr1);
console.log(res1);
const arr2 = [4, 6, 9, 1, 3];
const res2 = elementsPlusPosition(arr2);
console.log(res2);



function sumIntegers(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] + arr[1];
}
const arr = [19, 5, 42, 2, 77];
const res = sumIntegers(arr);
console.log(res);



function basicOperations(sign, value1, value2) {
    let res;
    switch(sign) {
        case '+':
            res = value1 + value2;
            break;
        case '-':
            res = value1 - value2;
            break;
        case '*':
            res = value1 * value2;
            break;
        case '/':
            res = value1 / value2;
            break;
        default:
            res = 'something wrong';
    }
    return res;
}
console.log(basicOperations('+', 4, 7));
console.log(basicOperations('-', 15, 18));
console.log(basicOperations('*', 5, 5));
console.log(basicOperations('/', 49, 7));