function loremIpsum(word, sentences) {
    let sentence = sentences.split('. ')
    let output = [];

    sentence.map(function(index){
        if(index.toLowerCase().includes(word.toLowerCase())){
            output.push(index)
        }
    })
    return output.join(', ')
}

console.log(loremIpsum("hello", "hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all."));