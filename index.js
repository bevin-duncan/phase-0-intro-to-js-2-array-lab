const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(`${name}`);
}

function destructivelyPrependCat(name){
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat(name){
    cats.pop(`${name}`)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(`${name}`);
}

function appendCat(){
    const newCats = [...cats, "Broom"]
    return newCats
}

function prependCat(){
    const newerCats = ["Arnold", ...cats, ]
    return newerCats
}

function removeLastCat(){
    const removeLastCat = [cats]
    return cats.slice(0, -1)
    
}

function removeFirstCat(){
    const removeFirstCat = [cats]
    return cats.slice(1)
    
}

