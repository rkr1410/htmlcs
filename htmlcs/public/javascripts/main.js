import { styleCodeNode } from "./tag-highlight.js";
import { findAll, replaceBadgeWithTemplate } from "./utils.js";

document.addEventListener("DOMContentLoaded", function(){
    findAll('code').forEach(code => styleCodeNode(code));
    findAll('badge').forEach(badge => replaceBadgeWithTemplate(badge));
});