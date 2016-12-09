/*jshint esversion: 6 */
{
    var test = require('tape');
    var values = require('../values.js')
    var isEmpity = values.isEmpity;
    // t.deepEqual

    test('isEmpity', function(t) {
        var a = obj => { (obj &&  obj.length ) ? ( obj.length === 0 ?  true : false )  :false;};
            var b = a([]);
        console.log( 'obj val ',  b);



    //    t.equal(( ( obj.length===0 ) ? true :  false ), true, 'obj.length error');
        //console.log( obj.length, '--->', (obj && obj.length && obj.length ===0) ? true : false );
        t.equal(a([]) , true, 'ar [] error');
        t.equal(isEmpity(null), true, 'is not null');
        t.end();
    });
}
