/*jshint esversion: 6 */
{
    var test = require('tape');
    var types = require('../types.js');
    // t.deepEqual
    var a, b=null, c=parseFloat('aaa'), d=[], e='', f='aa';
    var g={}, h={a:''}, i= new Object(), l=['aa', 'bb'];
    i.funz =(x)=>x+1;

    test('isNull', function(t) {

        t.equal(types.isNull(a), true, ' undefined');
        t.equal(types.isNull(b), true, ' nul');
        t.equal(types.isNull(c), true, ' NaN');
        t.equal(types.isNull(d), false, ' array vuoto');
        t.equal(types.isNull(e), false, ' sringa vuoto');
        t.equal(types.isNull(f), false, ' stringa piena');
        t.end();
    });


    test('hasKeys', function(t) {

        t.equal(types.hasKeys(a), false, 'undefined');
        t.equal(types.hasKeys(b), false, 'null');
        t.equal(types.hasKeys(c), false, 'NaN');
        t.equal(types.hasKeys(d), false, 'Array Vuoto');
        t.equal(types.hasKeys(e), false, 'stringa Vuoto');
        t.equal(types.hasKeys(f), false, 'stringa');
        t.equal(types.hasKeys(g), false, 'object vuoto');
        t.equal(types.hasKeys(h), true, 'object con 1 elem');
        t.equal(types.hasKeys(i), true, 'object con funz'); // vede la funz come ownProperty
        t.equal(types.hasKeys(l), false, 'Array con valori');
        t.end();
    });


    test('hasItems', function(t) {

        t.equal(types.hasItems(a), false, 'undefined');
        t.equal(types.hasItems(b), false, 'null');
        t.equal(types.hasKeys(c), false, 'NaN');
        t.equal(types.hasItems(d), false, 'Array Vuoto');
        t.equal(types.hasItems(e), false, 'stringa Vuoto');
        t.equal(types.hasItems(f), false, 'stringa');
        t.equal(types.hasItems(g), false, 'object vuoto');
        t.equal(types.hasItems(h), true, 'object con 1 elem');
        t.equal(types.hasItems(i), true, 'object con funz'); // vede la funz come ownProperty
        t.equal(types.hasItems(l), true, 'Array con valori');
        t.end();
    });

    test('isEmpity', function(t) {

        t.equal(types.isEmpity(a), true, 'undefined');
        t.equal(types.isEmpity(b), true, 'null');
        t.equal(types.isEmpity(c), true, 'NaN');
        t.equal(types.isEmpity(d), true, 'Array Vuoto');
        t.equal(types.isEmpity(e), true, 'stringa Vuoto');
        t.equal(types.isEmpity(f), false, 'stringa');
        t.equal(types.isEmpity(g), true, 'object vuoto');
        t.equal(types.isEmpity(h), false, 'object con 1 elem');
        t.equal(types.isEmpity(i), false, 'object con funz');
        t.equal(types.isEmpity(l), false, 'Array con valori');
        t.end();
    });

}
