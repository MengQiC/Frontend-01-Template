function match(str) {
    let state = start
    for(let i of str) {
        state = state(i)
    }
    return state === end
}
function start(i) {
    if (i === 'c') {
        return foundC
    } else {
        return start
    }
}
function end(i) {
    return end
}
function foundC(i) {
    if (i === 'm') {
        return foundM
    } else {
        return start(i)
    }
}
function foundM(i) {
    if (i === 'q') {
        return end
    } else {
        return start(i)
    }
}
console.log(match('I am caocmq'))