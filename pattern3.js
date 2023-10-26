let n = 5;
string = " ";
for (let i = 1; i <= n; i++){
    for (let j = 0; j <= n - 1; j++){
        string += " ";
    }
    for (k = 0; k <= i - 1; k++){
        string += "*";
    }
    string += "\n";
}
console.log(string)