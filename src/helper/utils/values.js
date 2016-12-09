/*jshint esversion: 6 */
{
    var objectPath = require("object-path");
    // compose
    API = {};
    API.isNull = obj => obj === undefined || obj === null ||  (obj === NaN && typeof obj === 'number');

    API.isEmpity = obj => {
        if (obj === null && typeof obj === "object") return true;
        if (obj === "" && typeof obj === 'string') return true;
        if (obj === undefined && typeof obj === 'undefined') return true;
        if (obj === false && typeof obj === 'boolean') return true;
        if (obj === 0 && typeof obj === 'number') return true;
        if (obj === NaN && typeof obj === 'number') return true;
        var arState = (obj &&  obj.length ) ? ( obj.length === 0 ?  true : false )  : false;

        return false;
    }

    API.getNullOr = (obj, orVal) => API.isNull(obj) ?   (orVal || null) : obj ;
    API.getEmpityOr = (obj, orVal) => API.isEmpity(obj) ?  (orVal || null) : obj ;


module.exports = API;
}
