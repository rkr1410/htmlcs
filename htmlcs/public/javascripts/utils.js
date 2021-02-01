export function span(txt, className) {
    return createElement('span', txt, className);
}

export function findAll(selector) {
    return document.querySelectorAll(selector);
}

export function replaceBadgeWithTemplate(badge) {
    const templateId = badge.getAttribute('template');
    if (templateId) {
        const templateClone = cloneTemplate(templateId);
        if (badge.textContent) {
            templateClone.firstElementChild.setAttribute('title', badge.textContent);
        }
        badge.replaceWith(templateClone);
    } else {
        console.error('Invalid badge found: each badge must have a "template" attribute.');
    }
}

let templateCache = [];
function cloneTemplate(templateId) {
    try {
        let template = templateCache[templateId];
        if (!template) {
            template = findTemplate(templateId);
            templateCache[templateId] = template;
        }
        return template.content.cloneNode(true);
    } catch (e) {
        console.error(e);
    }
}

function findTemplate(templateId) {
    let template = document.querySelector(`template#${templateId}`);
    if (! template) {
        throw `Template #${templateId} does not exist.`;
    }
    return template;
}

function createElement(elementName, txt, className) {
    let elem = document.createElement(elementName);
    if (className) {
        elem.setAttribute('class', className);
    }
    if (txt) {
        let elemTxt = document.createTextNode(txt);
        elem.appendChild(elemTxt);
    }
    return elem;
}