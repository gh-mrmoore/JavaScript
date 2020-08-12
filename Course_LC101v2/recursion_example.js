function combineEntries(arrayName) {
    if (arrayName.length <= 1) {
        return arrayName[0];
    } else {
        return arrayName[0] + combineEntries(arrayName.slice(1));
    }
}

console.log(combineEntries(['L','C','1','0','1']));