function match(str) {
    let state = start
    for(let i of str) {
        state = state(i)
    }
    return state === end
}
function start(i) {
    if (i === 'a') {
        return foundA
    } else {
        return start
    }
}
function end(i) {
    return end
}
function foundA(i) {
    if (i === 'b') {
        return foundB
    } else {
        return start
    }
}
function foundB(i) {
    if (i === 'c') {
        return foundC
    } else {
        return start
    }
}
function foundC(i) {
    if (i === 'a') {
        return foundA2
    } else {
        return start(i)
    }
}
function foundA2(i) {
    if (i === 'b') {
        return foundB2
    } else {
        return start
    }
}
function foundB2(i) {
    if (i === 'x') {
        return end
    } else if (i === 'c') {
        return foundC
    } else {
        return start
    }
}
console.log(match('abcabcabx'))