/*jshint esversion: 6 */
{
    var types = require( '../types.js' );
    var isOnMain = false;

    function main() {
        isOnMain = true;
        var a, b = null,
            c = parseFloat( 'aaa' ),
            d = [],
            e = '',
            f = 'aa';
        var g = {},
            h = {
                a: ''
            },
            i = new Object(),
            l = [ 'aa', 'bb' ];
        i.funz = ( x ) => x + 1;

        debugger;
        types.isEmpity( c );
        isOnMain = false;
    }
    main();
    setInterval( function() {
        if ( !isOnMain ) main();
    }, 3000 );
}
