function changeVocals (str) {
   var vocal=['a','i','u','e','o','A','I','U','E','O']
   var vocalChange=['b','j','v','f','p','B','J','V','F','P']
    var strr=""
    for(i=0; i<str.length; i++){
        //str.charAt(i)= huruf apa yang ada di index i. misal 0, hurufnya S (tergantung input)
        //vocal.indexOf(S), jadi tinggal nyari huruf S indexnya 
        //kenapa lebih gede dr 0kondisinya, krn ketika hurufnya input ga ketemu dalem vocal,
        //dia return -1 
        
        //kalo vocalChange[vocal.indexOf(str.charAt(i))] dia kan cari huruf apa di str, terus di
        //cari di index apa di vocal , lalu di index yang sama ngambil dari yg vocal change
            if(vocal.indexOf(str.charAt(i))>=0){
                strr+=vocalChange[vocal.indexOf(str.charAt(i))]
        }
        else{
            strr+=str[i]
        }
    }
    return strr
  }
  
  function reverseWord (str) {
    var reverse=""
    for(var i=str.length-1; i>=0; i--){
        reverse+=str[i]
    }
    return reverse
  }
  
  function setLowerUpperCase (str) {
      var answer =[]
    for(var i=0; i<str.length; i++){
        if(str[i]===str[i].toUpperCase() && str[i]!==str[i].toLowerCase()){
            answer.push(str[i].toLowerCase()) 
        }
        else if(str[i]===str[i].toLowerCase()&& str[i]!==str[i].toUpperCase()){
           answer.push(str[i].toUpperCase())
        }
        else if(str[i]===' '){
            answer.push(" ")
        }
        else{
            answer.push(str[i])
        }
    }
    var joinn =answer.join("")
    return joinn
  }
  
  function removeSpaces (str) {
    var removeSpc =""
    for(i=0; i<str.length; i++){
        if(str[i]===" "){
            removeSpc+=""
        }
        else{removeSpc+=str[i]}
        
    }
    return removeSpc
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var changeVocalss=changeVocals(name)
    var reverseWords=reverseWord(changeVocalss)
    var uppercase = setLowerUpperCase(reverseWords)
    var removeSpaceee=removeSpaces(uppercase)
    
    return removeSpaceee
     
  }
  console.log(passwordGenerator('Sergei Dragunov')) // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
