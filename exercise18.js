function kaliTerusRekursif(angka) {
    
    if(angka<10){
        return angka
    }
    
    return kaliTerusRekursif(Math.floor(angka/10))*angka%10
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
//   console.log(kaliTerusRekursif(3)); // 3
//   console.log(kaliTerusRekursif(24)); // 8
//   console.log(kaliTerusRekursif(654)); // 0
//   console.log(kaliTerusRekursif(1231)); // 6