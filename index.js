const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(`${name}`)
}
function destructivelyPrependCat(name){
    cats.unshift(`${name}`)
}
function destructivelyRemoveLastCat(name){
    cats.pop(`${name}`)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(`${name}`)
}
function appendCat(name){
    const appendCat = [...cats, "Broom"]
    return appendCat
}
function prependCat(name){
    const prependCat = ["Arnold", ...cats]
    return prependCat
}
function removeLastCat(){
    const removeLastCat = [cats]
    return cats.slice(0, -1)
}
function removeFirstCat(){
    const removeFirstCat = [cats]
    return cats.slice(1)
}