let n = 5;
let string = "";
let z = 5;
for (i = 0; i < n; i++){
    for (let k = 0; k < z; k++)
        string += "*";
    string += "\n";
    z = z - 1;
}

console.log(string)