const interSection = (arr1, arr2) => {
    let res = []
    let sum = 0
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr1.length; j++) {
            if (arr1[i] == arr2[j]) {
                sum++
                res[sum - 1] = arr1[i]
            }
        }
    }
    return res
}
console.log(interSection([10, 20, 40], [15, 30, 40]));

function findSmallest(a, b, c) {
    if(a<b && a<c){
        return `${a} is the smallest number`
    }
    else if(b<a && b<c)
    {
        return `${b} is the smallest number`
    }
    else{
        return `${c} is the smallest number`
    }
    }
    console.log(findSmallest(3, 7, 5)); // Output: 3
    console.log(findSmallest(10, -1, 0)); // Output: -1



function reverseString(str) {
    var temp = ''
    for (i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


function multiply(a, b) {
    let sum = 0
    for (i = 1; i <= b; i++) {
        sum += a
    }
    return sum
}
console.log(multiply(3, 4)); // Output: 12
console.log(multiply(-2, 6)); // Output: -12