function getTopKeysByValues(map,n){

    let keyValuePairs = Array.from(map.entries());

    keyValuePairs.sort((a,b) => b[1]-a[1])
    return keyValuePairs.slice(0,n).map(pair => pair[0])
}
