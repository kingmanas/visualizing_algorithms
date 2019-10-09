
var angle = [];
var d = 0, k;
function Drawn_Arc(begin_angle, end_angle, arc_colour) {
    this.begin_angle = begin_angle;
    this.end_angle = end_angle;
    this.arc_colour = arc_colour;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    colorMode(HSL, 2000);
    for (let i = 1; i <= 1000; i++) {
        angle.push(new Drawn_Arc(((i - 1) * PI) / 500, (i * PI) / 500, random(0, 2000)));
    }
    // angle = angle.sort((a, b) => {
    //     return a.arc_colour - b.arc_colour;
    // });
}
function draw() {
    frameRate(60);
    for (var j = 0; j < angle.length - 1; j++) {
        if (angle[j + 1].arc_colour > angle[j].arc_colour) {
            swap(j);
        }
    }

    if (d < angle.length) {
        d++;
    } else { noLoop() }
    for (let i = 1; i <= angle.length; i++) {
        noStroke();
        fill(angle[i - 1].arc_colour, 2000, 1000);
        arc(windowWidth / 2, windowHeight / 2, windowHeight * 4, windowHeight * 4, angle[i - 1].begin_angle, angle[i - 1].end_angle, PIE);
    }
}

function swap(j) {
    angle[j + 1].arc_colour += angle[j].arc_colour;
    angle[j].arc_colour = angle[j + 1].arc_colour - angle[j].arc_colour;
    angle[j + 1].arc_colour = angle[j + 1].arc_colour - angle[j].arc_colour;
}

