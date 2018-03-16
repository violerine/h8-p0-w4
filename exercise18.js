function kaliTerusRekursif(angka) {
    
  
    if(angka<10){
        return angka
    }
  
  
  return kaliTerusRekursif(kaliTerusRekursif(parseInt(angka/10)) * kaliTerusRekursif(angka%10));
  
  //input 243
  //f=kaliTerusRekursif
  //f(f(24)xf(3)) 
  //f(f(2)xf(4)x3) 
  //f(2x4x3)
  //f(24) --> jalanin ulang functionnya 
  //f(f(2)x(f(4)) krn dua2nya kurang dr 10, langsung return angka masing2
  //f(2x4) =8 udah <10 lgsg return 8
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6