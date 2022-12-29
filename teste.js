function persa(arr) {
    return arr.findIndex(function (value, indx) {
        var first = arr.slice(0, indx + 1).reduce(function (prev, curr, currIdx) { return curr + prev; });
        var second = arr.slice(indx, arr.length).reduce(function (prev, curr, currIdx) { return curr + prev; });
        return first === second;
    });
}
console.log(persa([1,2,3,4,3,2,1]));//3
console.log(persa([1,100,50,-51,1,1]));//1
console.log(persa([1,2,3,4,5,6]));//-1
console.log(persa([20,10,30,10,10,15,35]));//3
