function fpb(angka1, angka2) {
    var nampung=0
    for(var i=1; i<=angka2; i++){
        if(angka1%i===0 && angka2%i===0){
            nampung=i
            
        }
    }
    return nampung
  }

  console.log(fpb(30,10))