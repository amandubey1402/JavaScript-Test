// let a = 13
// let b = 14

// function swap1(){
//     let a=b
//     return a
// }
// function swap2(){
//     let b=a
//     return b
// }
// console.log(swap1(),swap2())



// const LargestNum=(a,b,c)=>{
//     if(a>b && a>c){
//         return `${a} is the greates number`
//     }
//     else if(b>a && b>c){
//         return `${b} is the greates number`
//     }
//     else{
//         return `${c} is the greates number`
//     }
// }

// console.log(LargestNum(3,5,7))

// var prime=true
// const IsPrime=(num)=>{
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }
// console.log(IsPrime(7))
// console.log(IsPrime(10))

// const reverse=(array)=>{
//     let arr=[];
//     for (let i = array.length-1; i>=0 ; i--) {
//         arr[array.length-i-1]=array[i]
//     }
//     return arr
// }
// console.log(reverse([1,2,3,4]))

// const sumOfEven=(array)=>{
//     let count=0
//     for(i=0;i<array.length;i++){
//         if(array[i]%2==0){
//             count+=array[i]
//         }
//     }
//     return count
// }
// console.log(sumOfEven([1,2,3,4,5,6]))


// const vowels = (str) => {
//     let count = 0
//     for (i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "A"){
//             count++
//         }
//         if (str[i] == "e" || str[i] == "E"){
//             count++
//         }
//         if (str[i] == "i" || str[i] == "I"){
//             count++
//         }
//         if (str[i] == "o" || str[i] == "O"){
//             count++
//         }
//         if (str[i] == "u" || str[i] == "U"){
//             count++
//         }
//     }
//     return count
// }

// console.log(vowels("Hello world"))


// const factorial=(num)=>{
//     let nums=1
//     for(i=num;i>0;i--){
//         nums*=i
//     }
//     return nums
// }
// console.log(factorial(5))
// const duplicate=(arr)=>{
//     let arr1=[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]!=arr[i+1]){
//             arr1.push(arr[i])
//         }

//     }
//     return arr1
// }
// console.log(duplicate([1,2,2,2,3,4,4,5]))
// const secondlargest = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr[arr.length-2]

// }
// console.log(secondlargest([10, 45,79, 4, 20, 99]))
