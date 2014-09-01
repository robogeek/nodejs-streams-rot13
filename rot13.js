var r13 = require('./index');
var ss  = require('string-stream');

var src = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var result = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

var srcstr = new ss(src);
var ret    = new ss('');

rot13encode(srcstr, ret);

ret.on('finish', function() {
  console.log('Expected: '+ result);
  console.log('Result:   '+ ret.toString());
  if (result !== ret.toString()) {
    console.log('FAIL');
  }
});
