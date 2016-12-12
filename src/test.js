/*jshint esversion: 6 */
//'use strict';
var str = require("./helper/string");
var data = require("./helper/data");
debugger;
console.log(str);
var test = [{
    tipo: 'aaa',
    costo: 1
}, {
    tipo: 'aaa',
    costo: 5
}, {
    tipo: 'bbb',
    costo: 10
}, {
    tipo: 'ccc',
    costo: 4
}];
//var onCalcToPass=data.onCalcMap(onCalc,0);
var isOnMain = false;
function main() {
    isOnMain = true;
    debugger;
    var a = data.groupBySummer(test, 'tipo', 'costo', {});
    console.log('start xx', a);
    isOnMain=false;
}
main();
setInterval(function() {
    if (!isOnMain) main();

}, 3000);
