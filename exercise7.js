function digitPerkalianMinimum(angka) {
var nampung=[]
var answer=0


   for(var i=0; i<=angka; i++){
       if(angka%i==0){
        var pembagian=angka/i
        nampung.push(pembagian+"x"+i)
       }
   }
   nampung.sort(function(a,b){return(a.length-b.length)})
  
   return nampung[0].length-1
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2