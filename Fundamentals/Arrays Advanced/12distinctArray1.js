function solve(array) {
    const result = [... new Set(array)];
    console.log(result.join(' ')); 
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);