 /*jshint esversion: 6 */
{
var API={};

		//Rende maiuscola la lettera alla posizione POS della stringa.
		//Se non viene passata nessuna posizione rende maiuscola la prima lettera
		API.capitalizeLetter = (string, pos) => string.charAt(pos).toUpperCase() + string.slice((pos || 0)+1);

 module.exports  = API;
}
