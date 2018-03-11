
function tukarBesarKecil(kalimat){
    var answer2=[]
    for(var i=0; i<kalimat.length; i++){
        //buat cek Kalo Upper case
        if (kalimat[i] === kalimat[i].toUpperCase()
        && kalimat[i] !== kalimat[i].toLowerCase()) {
        answer2.push(kalimat[i].toLowerCase())
    }
    //buat cek kalo Lowercase
    else if (kalimat[i] === kalimat[i].toLowerCase()
    && kalimat[i] !== kalimat[i].toUpperCase()) {
    answer2.push(kalimat[i].toUpperCase())
    
    }

    else if(kalimat[i]===' '){
        answer2.push(" ")
    }
    else{
        answer2.push(kalimat[i])
    }
    
}
var joinn= answer2.join("")
return joinn
}
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
