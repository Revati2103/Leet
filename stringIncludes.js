

function stringIncludes(str1, str2) {
    let words = str1.toLowerCase().split('');

    if (str1.includes(str2.toLowerCase())) {
        return true;
    }

    return false;
}
