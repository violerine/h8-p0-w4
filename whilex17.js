
function totalDigitRekursif(angka) {
    var count=0
    while(angka>0){
        count+=angka%10 
        console.log("angka1==> "+angka)
        angka=parseInt(angka/10)
        console.log("angka2==> "+angka)
    }
    
    count+=angka
    
    return count

  }
  console.log(totalDigitRekursif(512)); //  