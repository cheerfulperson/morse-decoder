const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    for(let i = 0; i < expr.length; i++){
        str += expr[i];
        if(i % 10 === 9){
            arr.push(str)
            str = '';
        }
    }
    for(n in arr){
        let string = arr[n];
        for (let index = 0; index < string.length; index += 2) {
            if(string[index] + string[index + 1] == "10"){
                str += '.';
            }else if(string[index] + string[index + 1] == "11"){
                str += '-';
            }else if(string[index] == '*'){
                str += '*'
            }
            
        }
        arr[n] = str;
        str = '';
    }
    for(n in arr){
        if(arr[n] == `*****`){
            str += ' ';
        }
        for(key in MORSE_TABLE){
            if(arr[n] == key){
                str += MORSE_TABLE[key];
            }
        }
    }
    return str
}

module.exports = {
    decode
}