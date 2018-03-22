function countProfit(shoppers){
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
     if(shoppers.length==0){
            return []
    }
    var array=[]
    for(var i=0; i<listBarang.length; i++){
        var obj={}
        obj.product=listBarang[i][0]
        array.push(obj)
        obj.shopper=[]
        obj.leftOver=listBarang[i][2]
        obj.totalProfit=0
        for(var j=0; j<shoppers.length; j++){
            if(array[i].product==shoppers[j].product && array[i].leftOver-shoppers[j].amount>=0){
                array[i]['shopper'].push(shoppers[j].name)
                array[i].leftOver-=shoppers[j].amount
            }
            
        }

        if(listBarang[i][2]-array[i].leftover==0){
            array[i].totalProfit=0
        }
        var kurang=listBarang[i][2]-array[i].leftOver
        var hasil=listBarang[i][1]*kurang
        array[i].totalProfit=hasil
        
       
    }
    
    return array
  
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]