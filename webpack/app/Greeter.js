// Greeter.js

var greetText = require("./greeterCon.json")
module.exports = function() {
    var greet = document.createElement('div')
    // greet.textContent = 'hi here and greetings! --- Greeter.js packed! '
    
    // greet.textContent = 'hello again!  --- using webpack.config.js'
    greet.textContent = greetText.greet
    return greet;
}