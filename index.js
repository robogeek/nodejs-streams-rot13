
var streams = require('stream');

// Borrowed from http://stackoverflow.com/questions/617647/where-is-my-one-line-implementation-of-rot13-in-javascript-going-wrong
var rot13 = function(s) {
    return (s ? s : this).split('').map(function(_)
     {
        if (!_.match(/[A-za-z]/)) return _;
        c = Math.floor(_.charCodeAt(0) / 97);
        k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
     }).join('');
 }

module.exports.rot13encode = function(is, os) {
    // is.setEncoding('utf8');
    is.on('data', function(chunk) {
        os.write(rot13(s));
    });
    is.on('end', function() {
        os.end();
    });
};
