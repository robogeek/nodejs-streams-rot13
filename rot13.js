var r13 = require('./index');
var ss  = require('string-stream');
var process = require('process');

var src = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var result = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

var srcstr = new ss(src);
var ret    = new ss('');

// r13.rot13encode(srcstr, ret);
r13.rot13encode(process.stdin, process.stdout);

ret.on('finish', function() {
  console.log('Expected: '+ result);
  console.log('Result:   '+ ret.toString());
  if (result !== ret.toString()) {
    console.log('FAIL');
  }
});
