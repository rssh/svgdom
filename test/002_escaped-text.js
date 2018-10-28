
import svgdom from '../dom'
import assert from 'assert'

describe("escaped-text",() => {
    it(" svg with text contain htl elements should be printable ", ()=>{
        var svgDoc = new svgdom.constructor ().document;
        var textNode = svgDoc.createTextNode("A<B");
        var html = textNode.innerHTML.toString();
        assert( html.indexOf("<") == -1 );
    });
});
