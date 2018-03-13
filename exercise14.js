function sorting(arrNumber) { 
    var sorting=arrNumber.sort(function(a,b){return b-a});
    return sorting
}

function getTotal(arrNumber) {
    var listSort = sorting(arrNumber);
    var listSortLargest=listSort[0]
    var count=0
    for(var i=0; i<listSort.length; i++){
        if(listSortLargest===listSort[i]){
            count+=1
        }
    }
    return "angka yang paling besar adalah "+listSortLargest+" dan jumlah kemuncululan adalah "+count+" kali"
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

//   console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))
//   console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]))
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  
'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''