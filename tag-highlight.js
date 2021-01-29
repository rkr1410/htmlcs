function span(txt, className) {
    let spanElem = document.createElement('span');
    let spanTxt = document.createTextNode(txt);
    
    if (className) {
        spanElem.setAttribute('class', className);
    }
    spanElem.appendChild(spanTxt);
    return spanElem;
}

function highlightCSS(node, attribute, value) {
    node.innerHTML = '';
    node.appendChild(span(attribute, 'attribute'));
    node.appendChild(span(': ', 'punctuation'));
    node.appendChild(span(value, 'value'));
    node.appendChild(span(';', 'punctuation'));    
}

function highlightTag(node, tagName, attrs = []) {
    node.innerHTML = '';
    node.appendChild(span('<', 'bracket'));
    node.appendChild(span(tagName, "tag-name"));
    for (attr of attrs) {
        node.appendChild(span(' ' + attr[1], "attribute"));
        node.appendChild(span('=\'', "punctuation"));
        node.appendChild(span(attr[2], "value"));
        node.appendChild(span('\'', "punctuation"));
    }
    node.appendChild(span('>', 'bracket'));
}

let singleWordOnly = /^[A-Za-z]+$/;
let firstWord = /^[A-Za-z]+/;
let attributes = /(\w+)=['"](.+?)['"]/g;

function htmlTagNode(node) {
    let text = node.innerHTML;

    if (firstWord.test(text)) {
        let tagName = text.match(firstWord)[0];
        let attrs = [...text.matchAll(attributes)];
        if (tagName) {
            highlightTag(node, tagName, attrs);
        }
    }
}

let attrAndValue = /(\w+):\s*(.+);/;

function cssNode(node) {
    let text = node.innerHTML;
    if (attrAndValue.test(text)) {
        var match = text.match(attrAndValue);
        highlightCSS(node, match[1], match[2]);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('code.tag').forEach(c => htmlTagNode(c));
    document.querySelectorAll('code.css').forEach(c => cssNode(c));
});