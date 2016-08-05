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
require('child_process').execSync('convert -background transparent "' + input + '".svg \
    \( -clone 0 -crop 50%x+0+0 -resize 16x16 \) \
    \( -clone 0 -crop 50%x+0+0 -resize 32x32 \) \
    \( -clone 0 -crop 50%x+0+0 -resize 48x48 \) \
    \( -clone 0 -crop 50%x+0+0 -resize 64x64 \) \
    \( -clone 0 -resize 128x128 \) \
    \( -clone 0 -resize 256x256 \) \
    -delete 0 "' + input + '".ico')
