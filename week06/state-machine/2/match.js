function match(str) {
    let foundC = false
    for(let i of str) {
        if (i === 'c') {
            foundC = true
        } else if (foundC && i === 'm') {
            return true
        } else {
            foundC = false
        }
    }
    return false
}
console.log(match('I am cmq'))