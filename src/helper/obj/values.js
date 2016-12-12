/*jshint esversion: 6 */
{
    var objPath = require( "object-path" ); // objectPath.set(obj, "a.h", "m");
    API.getVal = ( obj, path, valDefault ) => objPath.get( obj, path, valDefault );
    API.setVal = ( obj, path, val ) => objPath.get( obj, path, val ); //
    module.exports = API;
}
