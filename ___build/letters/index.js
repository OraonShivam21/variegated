function letters(word) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const set = new Set(word.toLowerCase().split(""));
    const result = [];
    for(let letter of alphabets) {
        if(!set.has(letter)) {
            result.push(letter);
        }
    }

    console.log(result.join(""));
}

const word1 = 'abc';
letters(word1) // => 'defghijkmnopqrstuvwxyz'.split('')

const word2 = 'can';
letters(word2) // => 'bdefghijklmopqrstuvwxyz'.split('')