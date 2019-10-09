
var values = [];
var k = 0;
var j = 0;
var d = 0;
var dict = {};

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 1; i <= windowWidth; i+=1) {
        var l = Math.floor(random(windowHeight));
        dict[l] = [random(0, 255), random(0, 255), random(0, 255)];
        values.push(l);
    }
    // values = sort(values, values.length);
    console.log(values.length);
}
var t0 = performance.now();

function draw() {
    frameRate(100);
    background(0);
    for (var k = 0; k < values.length; k++) {
        if (values[k + 1] < values[k]) {
            values[k + 1] += values[k];
            values[k] = values[k + 1] - values[k];
            values[k + 1] -= values[k];
        }
    }
    if (d < values.length) {
        d++;
    } else {
        console.log("finished");
        var t1 = performance.now();
        console.log("Execution Time is " + (t1 - t0));
        noLoop();
    }
    for (var i = 0; i < values.length; i++) {
        var a = values[i];
        var b = dict[a];
        stroke(b[0], b[1], b[2]);
        line(i + 1, windowHeight, i + 1, windowHeight - values[i - 1]);
    }
}
