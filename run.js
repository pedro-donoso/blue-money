const child_process = require("child_process");
const nameArchive = "divisa.js"
const result = "change";
const output = "txt";
const divisa = "dolar";
const bill = 2000;
const execute = `${nameArchive} ${result} ${output} ${divisa} ${bill}`
function final(execute) {
    return new Promise((resolve) => {
        child_process.exec(`node ${execute}`, function (err, result) {
            resolve(result);
        });
    });
}
final(execute).then((end) => {
    console.log(end);
});