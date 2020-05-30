function match(str) {
    for(let i of str) {
        console.log(i)
        if (i === 'a') {
            return true
        }
    }
    return false
}
console.log(match('I am cmq'))