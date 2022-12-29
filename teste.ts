function persa(arr: Array<number>){

  return arr.findIndex((value, indx, ar)=>{
    var first = arr.slice(0,indx+1).reduce((prev,curr,currIdx)=>curr+prev);
    var second = arr.slice(indx, arr.length).reduce((prev,curr,currIdx)=>curr+prev);
  
    return first === second;
  })
}
console.log(persa([1,2,3,4,3,2,1])==3)