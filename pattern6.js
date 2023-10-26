let n = 6;
let string = "";
for (i = 0; i < n; i++){
    for (let j = 0; j < i+1; j++){
        if (i == 2 && j == 1) {
            string += " ";
        }
        else if ((i == 3) && (j == 1 || j == 2))
            string += " ";
        else if ((i == 4) && (j == 1 || j == 2 || j == 3))
            string += " ";
        else
            string += "*";
    }
    string += "\n";
}
console.log(string)