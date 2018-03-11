function hitungHuruf(kata){
    var count =0
    var array=[]
    var jawaban=""
    var splitz= kata.split(" ")
    
    for(var i=0; i<splitz.length; i++){
    
        for(var j=0; j<splitz[i].length; j++){
            for(var k=0; k<splitz[i].length; k++){
                if(splitz[i].charAt(j)===splitz[i].charAt(k) && j!==k){
                    array.push(splitz[i])
                    jawaban=array[0]
                }
            }
        
        }
    }
    return jawaban
}
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau