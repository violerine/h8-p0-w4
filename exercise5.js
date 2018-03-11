
function ubahHuruf(kata){
    var huruf=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var stringBaru=""
    for(var i=0; i<kata.length; i++){
        for(var j=0; j<huruf.length; j++)
        if(kata.charAt(i)===huruf[j]){
            stringBaru+=huruf[j+1]
        }
    }
    return stringBaru
}

console.log(ubahHuruf('abcde'))
console.log(ubahHuruf('sergei'))