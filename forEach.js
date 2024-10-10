function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}



// Example usage---->
const sampleArray = [1, 2, 3, 4];

forEachCustom(sampleArray, function(element, index, array) {
    console.log(`Element at index ${index} is ${element}`);
});