function cariModus(arr){
    var count=0
    var compare=0
    var modes=0

    //ini buat kalo semua value arraynya sama
    for(var i=1; i<arr.length; i++){
                if(arr[0]===arr[i]){
                count+=1
        }
    }
    if(count==arr.length-1){
        return -1
    }
    //ini buat nyari array yang ada repetition. 
    //variable count2 bakal di reset tiap for loop yg plg luar ganti angka
    //apa yang terjadi disini adalah bandingin arr[k] dan [j], dengan kondisi, 
    //index mereka ga boleh sama. Jadi kalo misal dia nemu pasanganya, count2 nambah 1
    //ada variable compare, dia buat nampung sementara, dan buat bandingin yang udah store (yang lama), dan store an yang baru gitu
    //di if yang dalem , ketika count2 lebih besar dr yang udah di store, dia bakal ngereplace value comparenya
    //dah modes==arr[k] itu jadi ketika count2 replace valuenya compare, ada di arr[k] yang mana , di ambil deh value array tersebut
    for(var k=0; k<arr.length; k++){
            var count2 =0
            for(var l=0; l<arr.length; l++){
                    if(arr[k]===arr[l] && k!==l){
                        count2+=1
                        if(count2>compare){
                            compare=count2
                            modes=arr[k]
                        }
                    }
            } 
    }
    //ini buat kalo misalnya ga ada value yg sama nih, jd modesnya ga ada.
    //kalo misalnya compare nya 0 terus, karena count2 ga nemu ada repetation sama sekali , ya uda return -1
    if(compare===0){
        return -1
    }
    return modes
}

//tambahan buat kondisi dimana kalo di temukan 2 modes. 
// jadi apa yang terjadi di atas itu yg for loopnya nested, kalo misalnya 
//ada count2 yang lebih besar dr yg lama, bakal ngereplace valuenya,
//sementara kalo dia jumlahnya sama, n ga lebih besar lah ya,
//ya berarti dia masih pake value yg trakir, ya yg di ambil modes =arr[k] yg lama tersebut
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([6, 5, 10, 10, 6,5])); 
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1