var arrs = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];
for (var i = 0; i < arrs.length; i++) {
    for (var j = i + 1; j < arrs.length; j++) {
        if (arrs[i] == arrs[j]) {
            arrs.splice(j, 1);
            j--;
        }
    }
}
console.log(arrs)