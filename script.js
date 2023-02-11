/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
];

// 1
let ans = arr.map(PrintStudentswithMap)
function PrintStudentswithMap(x) {
    if (x.marks > 50) {
        return x
    }
}
console.log(ans)

// 2
arr.forEach(PrintStudentbyForEach)
function PrintStudentbyForEach(y) {
    if (y.marks > 50) {
        console.log(y)
    }
}

// 3 
function addData(z) {
    arr.push(z)
}
addData({ id: 4, name: "susan", age: "20", marks: 45 })
console.log(arr)

// 4
arr.forEach(removeFailedStudent)
function removeFailedStudent(j) {
    if (j.marks > 50) {
        let index = arr.indexOf(j)
        arr.splice(index, 1)
    }
}
console.log(arr)

// 5
let arr2 = [{ id: 5, name: "Sufiyan", age: "25", marks: 90 },
{ id: 6, name: "Hania", age: "5", marks: 30 },
{ id: 7, name: "Arjun", age: "15", marks: 65 }]
function concatenateArray(arr1, arr2) {
    return arr1.concat(arr2)
}
let newArr = concatenateArray(arr, arr2)
console.log(newArr)
