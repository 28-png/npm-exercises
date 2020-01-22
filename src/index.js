import {renderOnPage, sayAll, multiply} from "./say-hello";
export const $ = require('jquery');
let randomColor = require('randomcolor');
let color = randomColor;
let change;
setInterval(  change = () => $('body').css('background-color', color), 5000);

sayAll();
renderOnPage();
console.log(multiply(5));
$('#header1').html('<h1>Hello from Webpack!</h1>');

$('h1').append(
    '<ul>' +
    '<li>snakes</li>' +
    '<li>lions</li>' +
    '<li>bears</li>' +
    '<li>tigers</li>' +
    '<li>fish</li>' +
    '</ul>'
);


