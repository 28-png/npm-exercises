const $ = require('jquery');

$('body').html('<h1>Hello!</h1>');
$('h1').append(
    '<ul>' +
    '<li>snakes</li>' +
    '<li>lions</li>' +
    '<li>bears</li>' +
    '<li>tigers</li>' +
    '<li>fish</li>' +


'</ul>'
)



const sayHello = () => {
    return "hello!"
};

console.log(sayHello);