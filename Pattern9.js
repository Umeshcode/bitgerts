let n = 5;
let m = 9;
let string = "";
for (i = 0; i < n; i++){
    for (j = 0; j < m; j++){
        if (i == 0 && j == 4) {
            string += "*";
        }
        else if (i==1&& (j==m-6||j==m-4)) {
            string += "*";
        }
        else if (i==2&& (j==m-7||j==m-3)) {
            string += "*";
        }
        else if (i==3&& (j==m-8||j==m-2)) {
            string += "*";
        }
        else if (i==4&& (j<m)) {
            string += "*";
        }
        else
            string += " ";
    }
    string += "\n";
}
console.log(string)