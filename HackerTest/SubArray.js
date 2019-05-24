var arr=[4,2,3,2,1,5];
arr.sort((a,b)=>{
  return b-a;
});

console.log("Sorted array :"+arr);
var sum=0, total=0, index=0;

arr.forEach((element)=>{
    total+=element;
});
console.log("array total is :"+total);
for(var i=0; i<arr.length; i++){
  sum+=arr[i];
  if(sum>total-sum){
      index=i;
      break;
  }                
}
console.log("required index value is :"+index);
var result=arr.slice(0,index+1);
console.log("Sliced array is :"+result);
result.sort((a,b)=>{
   return a-b;
})
console.log("Final Array is :"+result);
console.log("Expected output :"+result);