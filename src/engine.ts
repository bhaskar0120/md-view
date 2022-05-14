import { listen } from "svelte/internal";

export default function (data:string): string{
    // Secure
    data = data.replace(/</g, "&lt;");

    // Blockquote
    data = data.replace(/\>\s*(.*)/g, "<blockquote>$1</blockquote>");

    // Headers
    data = data.replace(/^#([^#].*)$/gm, "<h1>$1</h1>");
    data = data.replace(/^##([^#].*)$/gm, "<h2>$1</h2>");
    data = data.replace(/^###([^#].*)$/gm, "<h3>$1</h3>");
    data = data.replace(/^####([^#].*)$/gm, "<h4>$1</h4>");
    data = data.replace(/^#####([^#].*)$/gm, "<h5>$1</h5>");
    data = data.replace(/^######([^#].*)$/gm, "<h6>$1</h6>");

    // Bold
    data = data.replace(/\*\*(.*)\*\*/g, "<b>$1</b>");

    // Italic
    data = data.replace(/\*(.*)\*/g, "<i>$1</i>");

    // Strike
    data = data.replace(/~(.*)~/g, "<s>$1</s>");

    // Link
    data = data.replace(/\[(.*)\]\((.*)\)/g, "<a href=\"$2\">$1</a>");

    // Code
    data = data.replace(/`(.*)`/g, "<code>$1</code>");

    // Checkboxes
    data = data.replace(/\[x\]/g, "<input type=\"checkbox\" checked disabled>");
    data = data.replace(/\[ \]/g, "<input type=\"checkbox\" disabled>");

    // Horizontal rule
    data = data.replace(/^-{3,}$/gm, "<hr>");

    // List
    data = data.replace(/^-\s*(.*)/gm, "<li>$1</li>");

    // Line break
    data = data.replace(/([^>])\n/g, "$1<br>");
    return data;
}