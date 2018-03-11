function angkaPrima (x){ if(x==1){
    return false
}
if(x===2){
    return true
}
if(x===1){
    return false
}

//inget cara kerja loop. kondisinya di duluin ya, kalo kondisinya dah terpenuhi, baru dia return itu 
//kondisi if duluan, baru kondisi di for loopnya 

for(var i=2; i<x; i++){
        if(x%i===0){ 
            return false
        }
    }
return true
}

// for(var i=2; i<x; i++){
//     if(x%i!==0){ 
//         return true
//     }
// }
// return false
// }

console.log(angkaPrima(33))