// let n = 5;
// let nn = 9;
// let string = "";
// for (i = 0; i < n; i++){
//     for (j = 0; j < nn; j++){
//         if (i == 0 && j == n-1) {
//             string += "*";
//         }
//         else if (i == 1 && (j > i+1) && (j<n+1)) {
//             string += "*";
//         }
//         else if (i == 2 && (j > i-1) && (j<n+2)) {
//             string += "*";
//         }
//         else if (i == 3 && (j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j ==7)) {
//             string += "*";
//         }
//         else if (i == 4 && (j == 0 || j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j ==7 || j ==8)) {
//             string += "*";
//         }
//         else
//             string += " ";
//     }
//     string += "\n";
// }
// console.log(string)



let n = 4;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);