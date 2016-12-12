
/*jshint esversion: 6 */

var types = require("./../utils/types.js");

{
    API.parseNumber = (fn, val, orVal) => {
        orVal = !orVal ? 0 : orVal;
        if (isEmpity(val) || !(typeof val === 'string' || typeof val === 'number')) return orVal;
        val = fn(val);
        return isNaN(val) ? orVal  : val;
    };

    API.getInt = (val, orVal) => API.parseNumber(parseInt, val, orVal);
    API.getFloat = (val, orVal) => API.parseNumber(parseFloat, val, orVal);

    API = {};

    module.exports = API;
}
