var fs = require('fs')
  , gm = require('./index');

var buf = fs.readFileSync('/Users/jdouglas/Downloads/acs-2.tif');
var writeStream = fs.createWriteStream('/Users/jdouglas/Downloads/acs-2.png');

gm(buf)
.stream('png')
.pipe(writeStream);