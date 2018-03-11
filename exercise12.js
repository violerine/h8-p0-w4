function shoppingTime(memberId,money){
    var objList={
        sepatuStacattu:1500000,
        bajuZoro:500000,
        bajuHn:250000,
        sweaterUniklooh:175000,
        casingHp:50000,
    }
   
    var obj={}
    var array=[]
if(memberId===""){
    return "ga kenal lu"
}
else if(money<50000){
    return "ga pnya duit lu"
}

obj.Id=memberId
obj.money=money
var sisaUang
var duitUtuh=money
console.log(obj)
for(var property in objList){
   sisaUang-=objList[property]
   console.log("loop sisaUang= "+sisaUang)
   if(sisaUang<0){
       sisaUang=duitUtuh
       console.log("sisaUang"+sisaUang)
   }
   
  
//    if(money>0){
//     //    obj.blanjaan=[Object.getOwnPropertyNames(objList).forEach(function(val){
         
//     //    }) +objList[property]]
//         console.log("tes")
//        obj.change=money
//    }
   
   console.log(obj)
}

    
}

console.log(shoppingTime('82Ku8Ma742', 400000))