function createSpan(txt, className) {
    let span = document.createElement('span');
    let spanTxt = document.createTextNode(txt);
    
    if (className) {
        span.setAttribute('class', className);
    }
    span.appendChild(spanTxt);
    return span;
}

function hilightCode(selecta, regexp, transmogrify) {
    let found = document.querySelectorAll(selecta);
    for (let aFind of found) {
        let text = aFind.innerHTML;
        if (regexp.test(text)) {
            aFind.innerHTML = '';
            transmogrify(aFind, text.match(regexp));
        }
    }
}

function highlightCSSCode() {
    hilightCode('code.css', /(\w+):\s*(.+);/, (node, match) => {
        node.innerHTML = '';
        node.appendChild(createSpan(match[1], 'attribute'));
        node.appendChild(createSpan(': ', 'punctuation'));
        node.appendChild(createSpan(match[2], 'value'));
        node.appendChild(createSpan(';', 'punctuation'));
    });
}

function highlightTags() {
    hilightCode('code.tag', /\w+/, (node, match) => {
        node.appendChild(createSpan('<'));
        node.appendChild(document.createTextNode(match[0]));
        node.appendChild(createSpan('>'));
    });
}

/*function highlightTag(node) {
    
}

function highlightTagWithAttributes(node) {
    
}

function highlightTags() {
    let found = document.querySelectorAll('code.tag');
    for (let node of found) {
        let simpleWord = /^[A-Za-z]+$/;
        let firstWord = /^[A-Za-z]+/;
        let attributes = /(\w+)='(.+?)'/g;
        let text = node.innerHTML;
        
        node.innerHTML = '';
        if (simpleWord.test(text)) {
            highlightSimpleTag(node, text);
        } else {
            highlightTagWithAttrs(node, text.match(firstWord)[0], [...text.matchAll(attributes)]);
        }
        
    }    
}

*/

document.addEventListener("DOMContentLoaded", function(){
    highlightTags();
    highlightCSSCode();
});