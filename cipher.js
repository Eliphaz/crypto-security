const generateCipher = (str, key) =>{
    str = str.toLowerCase().split(' ').join('')
    key = key.toLowerCase()
    cipher = ''
    keyIndexCount = 0
    for(i in str) {
        if(keyIndexCount % key.length === 0){
            keyIndexCount = 0
        }
        let encrypted = str.charCodeAt(i) + (key.charCodeAt(keyIndexCount) - 96)
        if(encrypted > 122){
            difference = encrypted - 122
            encrypted = 96 + difference
        }
        keyIndexCount++
        cipher += String.fromCharCode(encrypted)
        
    }return cipher
}

console.log(generateCipher('I love dev mountain', 'abcd'))

let ex = 'P'
console.log(ex.charCodeAt(0))