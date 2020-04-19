const numList1 = [1, 3, 4, 5, 7, 97, 5, 64, 54];
const numList2 = [27, 6588, 1568, 56, 686, 75];
const numList3 = [5, 35, 898, 486, 456, 87];
const numList4 = [3554, 897, 78, 5, 3, 1, 10];
const numList5 = [107, 569, 89, 156, 475];

const sumFunc = function(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}

sumFunc(numList1);
sumFunc(numList2);
sumFunc(numList3);
sumFunc(numList4);
sumFunc(numList5);
