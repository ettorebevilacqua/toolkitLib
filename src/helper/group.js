 /*jshint esversion: 6 */
{
    var objectPath = require("object-path");
    var objectPath = require("./fp");
    var obj = require("./fp");
    var helpString = require("./string");

    API={};

    API.newOptions = { field: { 'group' : [], 'select': [], 'result':[]},
                       on:{ beforeCalc:null, calc:null, afterCalc:null, error:null},
                       cmd :''
                    };

    API.addValToGroup = (val, fieldVal, listGroup, valKeyGroup) => {
        return helpString.getFloat( listGroup[valKeyGroup], 0) + helpString.getFloat(API.getVal(val , fieldVal, 0), 0);
    };

    API.groupBy = list =>  list.reduce(fn,listGroup);

    API.groupByFunz  =    (list, fieldGroup, fieldVal, listGroup)  => onCalc => ( listGroup, val ) => {
        let valKeyGroup = API.getVal(val , fieldGroup, 'null');
        listGroup[valKeyGroup] = onCalc(val, fieldVal, listGroup, valKeyGroup );
        return listGroup;
   };

   API.reduceSummer = (list, fieldGroup, fieldVal, listGroup) => API.reduceFunz(list, fieldGroup, fieldVal, listGroup)(API.addValToGroup);
   API.groupBySummer = (list, fieldGroup, fieldVal, listGroup ) => API.groupBy (API.reduceSummer (list, fieldGroup, fieldVal, listGroup))(list, fieldGroup, fieldVal, listGroup);

   API.pivot = list => param => {
       //if
   };

    module.exports = API;
}
