let arr = [NaN, "test", 4];
let truthy = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        truthy.push(arr[i]);
    }
}
console.log(truthy);