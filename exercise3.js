function cariMedian(arr){
    var median=0
    if(arr.length%2==0){
       var lengthhBagiDua= arr.length/2
       var bawah=(arr[lengthhBagiDua-1])
       var atas=(arr[lengthhBagiDua])
       median=(bawah+atas)/2
    }
    else{
        var medianOdd =(arr.length+1)/2
        median= arr[medianOdd-1]
        
    }
    return median
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
