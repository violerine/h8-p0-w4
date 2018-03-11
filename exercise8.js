function urutkanAbjad(str){
    var answer=""
    var array=[]
    var sortt
    for(var i=0; i<str.length; i++){
       array.push(str.charAt(i))
   
        
    }
    sortt=array.sort()
    var join=sortt.join("")

    return join
    
}
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
