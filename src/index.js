const $ = require('jquery');
let randomColor = require('randomcolor');
let color = randomColor;
// setInterval(change = () => {
//
// $('body').css('background-color', color)
// }, 5000);

$('div').html('<h1>Hello from Webpack!</h1>');

$('h1').append(
    '<ul>' +
    '<li>snakes</li>' +
    '<li>lions</li>' +
    '<li>bears</li>' +
    '<li>tigers</li>' +
    '<li>fish</li>' +
    '</ul>'
);

const sayHello = () => {
    return "hello!"
};

console.log(sayHello);