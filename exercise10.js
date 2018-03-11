function checkAB(num) {
    var arrayA=[]
    var arrayB=[]
   for(var i=0; i<num.length; i++){
       if(num[i]==="b"){
        arrayB.push(i)
       }
       if(num[i]==="a"){
        arrayA.push(i)
       }
       
   }

   for(var j=0; j<arrayA.length; j++){
       for(var k=0; k<arrayB.length; k++){
           if(arrayA[j]-arrayB[k]===4 || arrayB[k]-arrayA[j]===4){
               return true
           }
       }
   }
   return false
 
  }

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
