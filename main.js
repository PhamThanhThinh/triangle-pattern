let n = 20;
let string = "";
for (let i = n; i > 0; i--) {
    for (let j = 0; j < n; j++) {
        if (i <= j) {
            if (i % 2 == 0) {
                string += "&#9650; ";
            }
            else {
                string += "&#9660; ";
            }
        }
        else {
            string += " ";
        }
    }
    string += "<br>";
}
document.write(`<pre>${string}</pre>`);