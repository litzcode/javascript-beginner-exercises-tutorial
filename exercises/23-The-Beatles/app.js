function sing(){
    let lyrics = '';
    for (let i=0; i<4; i++) {
        lyrics += 'let it be, ';
    }
    lyrics += 'words of wisdom, ';
    for (let i=0; i<5; i++) {
        lyrics += 'let it be, ';
    }
    lyrics += 'there will be an answer, ';
    return lyrics+("let it be");
}

//Your code above ^^^

console.log(sing());