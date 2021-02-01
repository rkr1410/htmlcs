import { span } from "./utils.js";

export function styleCodeNode(node) {
    let klass = node.getAttribute('class');
    switch (klass) {
        case "tag":
            styleCodeTagNode(node);
            break;
        case "css":
            styleCodeCssNode(node);
            break;
        default:
            // noop
    }
}

let firstWord = /^[A-Za-z]+/;
let attributes = /(\w+)=['"](.+?)['"]/g;
export function styleCodeTagNode(node) {
    let text = node.innerHTML;
    if (firstWord.test(text)) {
        let tagName = text.match(firstWord)[0];
        let attrs = [...text.matchAll(attributes)];
        highlightTag(node, tagName, attrs);
    }
}

let attrAndValue = /(\w+):\s*(.+);/;
export function styleCodeCssNode(node) {
    let text = node.innerHTML;
    let match = text.match(attrAndValue);
    if (match) {
        highlightCSS(node, match[1], match[2]);
    }
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
    for (let attr of attrs) {
        node.appendChild(span(' ' + attr[1], "attribute"));
        node.appendChild(span('=\'', "punctuation"));
        node.appendChild(span(attr[2], "value"));
        node.appendChild(span('\'', "punctuation"));
    }
    node.appendChild(span('>', 'bracket'));
}