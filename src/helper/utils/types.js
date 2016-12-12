/*jshint esversion: 6 */
{
    var some = require( "fast.js/array/some.js" );
    var keys = require( "fast.js/object/keys.js" );
    // funzioni
    var hasKeys = API = {};
    API.some = some;
    API.keys = keys;
    API.isNull = obj => obj === undefined || obj === null || ( typeof obj === 'number' && isNaN( obj ) );
    API.isList = obj => typeof obj === 'object';
    API.isArray = obj => Array.isArray( obj );
    API.hasItems = obj => typeof obj !== 'object' ? false : Array.isArray( obj ) ? obj.length > 0 : API.hasKeys( obj );
    API.hasKeys = obj => {
        if ( typeof obj !== 'object' || Array.isArray( obj ) ) return false
        else
            for ( key in obj )
                if ( obj.hasOwnProperty( key ) ) // uso il for e return per le prestazioni , key(obj) mi legge tutto cosi solo il primo
                    return true;
        return false;
    };
    API.isEmpity = obj => {
        var cond = [
            [ 'object', 'string', 'undefined', 'boolean' ],
            [ null, '', undefined, false, 0 ]
        ];
        let objType = typeof obj;
        if ( some( cond[ 0 ], ( val, ind ) => objType==val && cond[ 1 ][ ind ] == obj ) )
            return true;
        if ( typeof obj === 'number' && isNaN( obj ) ) return true;
        if ( typeof obj === 'object' && !API.hasItems( obj ) ) return true;
        return false;
    };
    API.isNullOr = ( obj, orVal ) => API.isNull( obj ) ? ( orVal || null ) : obj;
    API.isEmpityOr = ( obj, orVal ) => API.isEmpity( obj ) ? ( orVal || null ) : obj;
    // **
    module.exports = API;
}
