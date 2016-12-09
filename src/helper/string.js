 /*jshint esversion: 6 */
{
var API={};

		//Rende maiuscola la lettera alla posizione POS della stringa.
		//Se non viene passata nessuna posizione rende maiuscola la prima lettera
		API.capitalizeLetter = function(string, pos) {
			pos = pos || 0;

			return string.charAt(pos).toUpperCase() + string.slice(pos+1);
		};

        API.parseNumber = function(fn, val, orVal){

            if (!orVal) orVal = 0;
            if (!val) val = orVal;
            if (val.trim && val.trim() === '')
                val = null;
            var importo = val ? val : orVal;
            return !isNaN(fn(importo)) ?  fn(importo) : orVal;
        };

        API.getFloat = function (val, orVal ){
            return API.parseNumber(parseFloat, val, orVal);
        };

        API.getInt = function (val, orVal ){
            return  API.parseNumber(parseInt, val, orVal);
        };

 module.exports  = API;
}
