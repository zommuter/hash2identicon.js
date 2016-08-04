var input = process.argv[2]

// https://stackoverflow.com/questions/5878682/node-js-hash-string#comment15839272_11869589
var hash = require('crypto').createHash('md5').update(input).digest("hex")

// https://jdenticon.com
var jdenticon = require("jdenticon"),
    fs = require("fs"),
    size = 200,
    svg = jdenticon.toSvg(hash, size);
    
fs.writeFileSync("./" + input + ".svg", svg);
