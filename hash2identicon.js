var input = process.argv.slice(2).join(' ')

// https://stackoverflow.com/questions/5878682/node-js-hash-string#comment15839272_11869589
var hash = require('crypto').createHash('sha256').update(input).digest("hex")

// https://jdenticon.com
var jdenticon = require("jdenticon"),
    fs = require("fs"),
    size = 200,
    svg = jdenticon.toSvg(hash, size);
    
fs.writeFileSync("./" + input + ".svg", svg);

// https://stackoverflow.com/a/34958537/321973
require('child_process').execSync('convert "' + input + '".svg -define icon:auto-resize=16,32,48,64,256 "' + input + '".ico')
