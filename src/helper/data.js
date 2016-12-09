 /*jshint esversion: 6 */

 {


     var objectPath = require("object-path");
     var helpString = require("./string");

     var API = {};
     /* Ordina un array in base ai parametri passati
    	 		param:
    				- field: campo con cui viene ordinato l'array
    				- revert: bool per decidere se ordinare in maniera ascendente (false) o discendente (true)
    				- primer:funzione opzionale per modificare i campi dell'array che vengono ordinati
    		*/
     API.sortArrayOfObj = function(field, reverse, primer) {
             var key = function(x) {
                 return primer ? primer(x[field]) : x[field];
             };
             reverse = !reverse ? 1 : -1;
             return function(a, b) {
                 return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
             };
         };
         //Ordina un array in base ad un field usando la libreria underscore
         //http://underscorejs.org/#sortBy
         //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
     API.sortBy = function(list, field, direction) {
             var arr = _.sortBy(list, field);
             if (direction == "DESC") return arr.reverse();
             return arr;
         };
         /* Controlla se due array sono identici
    	 		param:
    				- arr1: primo array
    				- arr2: secondo array
    		*/
         // TODO SPOSTARE QUESTA FUNZIONE NEL HELPER DEGLI ARRAY !!!
     API.arraysEqual = function(arr1, arr2) {
         if (arr1 === arr2) return true;
         if (arr1 === null || arr2 === null) return false;
         if (arr1.length != arr2.length) return false;
         for (var i = 0; i < arr1.length; ++i) {
             if (arr1[i] !== arr2[i]) return false;
         }
         return true;
     };
     // wraper libreria objectPath
     // https://github.com/mariocasciaro/object-path
     objectPath.set(API, "path", objectPath);
     API.compareValInObj = function(obj, path, val) {
         var valRead = window.objectPath.get(obj, path, null);
         if (valread == val) return 0;
         if (valread >= val) return 1;
         if (valread <= val) return -1;
     };
     API.accumulator = function(funzMap, accum) { // es: funz = accum, cur => accum += cur;
         return function(cur) {
             return arguments.length === 0 ? accum : funzMap(accum, cur);
         };
     };
     API.summer = API.accumulator.bind(null, function(accum, cur) {
         accum += curl;
         return accum;
     });

     API.getVal = (list, path, valDefault) => objectPath.get(list, path, valDefault);
     API.calc = fn => a => b => fn(a, b);
     API.calcSum = API.calc.bind(null, (a,b) =>a+b);

     API.funListKey = fn => list => key => fn(list,key);
     API.funListKeyVal = fn => list => key => val => fn(list,key,val);
     API.fieldVal = API.funListKey.bind(null, (list,name) => list[name]);
     API.fieldSet = API.funListKeyVal.bind(null, ( list, name, val) => list[name]=val);

     API.setGroup = (groupList, name) => val  =>  API.fieldSet(groupList,name,val);
     API.sumInGroup = (groupList, name) => ( val )  =>  API.fieldSet(list,name,val);

     API.addValToGroup = (val, fieldVal, listGroup, valKeyGroup) => {
         return helpString.getFloat( listGroup[valKeyGroup], 0) + helpString.getFloat(API.getVal(val , fieldVal, 0), 0);
     };

     API.reduceFunz =    (list, fieldGroup, fieldVal, listGroup)  => onCalc => ( listGroup, val ) => {
         let valKeyGroup = API.getVal(val , fieldGroup, 'null');
         listGroup[valKeyGroup] = onCalc(val, fieldVal, listGroup, valKeyGroup );
         return listGroup;
    };

    API.groupBy = fn => (list, fieldGroup, fieldVal, listGroup)  =>  list.reduce(fn,listGroup);
    API.reduceSummer = (list, fieldGroup, fieldVal, listGroup) => API.reduceFunz(list, fieldGroup, fieldVal, listGroup)(API.addValToGroup);
    API.groupBySummer = (list, fieldGroup, fieldVal, listGroup ) => API.groupBy (API.reduceSummer (list, fieldGroup, fieldVal, listGroup))(list, fieldGroup, fieldVal, listGroup);
    //API.execGroup =(list, fieldGroup, fieldVal, listGroup )= API.groupBy(list, fieldGroup, fieldVal, listGroup)(API.reduceSummer));

 module.exports = API;
 }
