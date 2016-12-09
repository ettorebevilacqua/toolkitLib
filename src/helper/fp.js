 /*jshint esversion: 6 */
 {
     // compose
     var L = require('lambda-30').Lambda;
     API = {};
     API.accumulator = (funzMap, accum) => (value) => // es: funz = accum, cur => accum += cur;
         (value) => arguments.length === 0 ? accum : funzMap(accum, value);
 
 API.compose = function() {};
 module.exports = API;
 }
