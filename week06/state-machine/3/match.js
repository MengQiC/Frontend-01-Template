function match(str) {
    let foundC = false
    let foundM = false
    let foundQ = false
    for(let i of str) {
        if (i === 'c') {
            foundC = true
        } else if (foundC && i === 'm') {
            foundM = true
        } else if (foundM && i === 'q') {
            return true
        } else {
            foundC = false
            foundM = false
            foundQ = false
        }
    }
    return false
}
console.log(match('I am cmq'))