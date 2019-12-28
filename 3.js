function keywordPrint(input){

    var konsonan = input.match(/[^aiueo]/gi);
    var vokal = input.match (/[aiueo]/gi);
    

    vokal.concat([],konsonan).forEach(a => {console.log(a);});

    return input
        
}

var output = keywordPrint("ARKADEMY");
console.log (output)