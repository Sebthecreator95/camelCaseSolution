function camelcase(s) {
    //"find how many words the 'camelCased' string has"
    let count = 1
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === s[i].toUpperCase()){
            count += 1
        }
    }
    return count
}
