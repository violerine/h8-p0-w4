function shoppingTime(memberId,money){
    const objList={
        sepatuStacattu:1500000,
        bajuZoro:500000,
        bajuHn:250000,
        sweaterUniklooh:175000,
        casingHp:50000,
    }
   
    var obj={}
    var array=[]
    if(memberId===undefined || money===undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }

    if(memberId===""){
        return "ga kenal lu"
    }
    else if(money<50000){
        return "Mohon maaf, uang tidak cukup"
    }

    obj.Id=memberId
    obj.money=money
    var answer=[]
//cara akses object value kalo dalem for in objList[i], kalo akses object propertiesnya tinggal panggil
//i nya aja
    for(var i in objList){
        if(money-objList[i]<0){
            duitUtuh=money
        }
    else if(money-objList[i]>=0){
        money-=objList[i]
        answer.push(i)
        var sisa =money
        }
    }
    obj.listPurchased=answer
    obj.changeMoney=sisa
    return obj
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja