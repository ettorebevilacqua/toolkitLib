 /*jshint esversion: 6 */
{
    var objectPath = require("./values");
    var setVal  = require("./../utils/values").setVal;
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

    API.reducer = list =>  list.reduce(fn,listGroup);

    API.onReduce =    (list, opts)  => onCalc => ( opts.result, val ) => {

        let valKeyGroup = API.getVal(val , fieldGroup, 'null');
        listGroup[valKeyGroup] = onCalc(val, fieldVal, listGroup, valKeyGroup );
        return listGroup;
   };

   API.reduceSummer = (list, fieldGroup, fieldVal, listGroup) => API.reduceFunz(list, fieldGroup, fieldVal, listGroup)(API.addValToGroup);
   API.groupBySummer = (list, fieldGroup, fieldVal, listGroup ) => API.groupBy (API.reduceSummer (list, fieldGroup, fieldVal, listGroup))(list, fieldGroup, fieldVal, listGroup);

   API.groupBy = param  => list => {
       var reducer = API.reducer(list);
       var onCalc= API.groupByFunz
       if (param.on.calc==null)

       list.reduce(,param.result)
   };


API.groupBy (API.reduceSummer (list, fieldGroup, fieldVal, listGroup))(list, fieldGroup, fieldVal, listGroup);
    module.exports = API;
}
