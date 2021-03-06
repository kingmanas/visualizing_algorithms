
var angle = [];
var d = 0, k, l, r;    
var stack = []; 

function Drawn_Arc(begin_angle, end_angle, arc_colour) {
    this.begin_angle = begin_angle;
    this.end_angle = end_angle;
    this.arc_colour = arc_colour;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    colorMode(HSL, 2000);
    for (let i = 1; i <= 500; i++) {
        angle.push(new Drawn_Arc(((i - 1) * PI) / 250, (i * PI) / 250, random(0, 2000)));
    }
    l = 0, r = angle.length - 1;
    stack.push(l), stack.push(r);
}

function partition(l, r) {
    let j = l - 1, x = angle[r].arc_colour;
    for (let i = l; i < r; i++)
        if (angle[i].arc_colour <= x)
            swap(++j, i);
    swap(r, j + 1);
    return j + 1;
}

function draw() {
    frameRate(30);    
    if(stack.length == 0) noLoop();

    r = stack.pop(), l = stack.pop(); 
    console.log(r + " " + l);
    let p = partition(l, r); 
    if (p - 1 > l) { 
        stack.push(l); 
        stack.push(p - 1); 
    } 
    if (p + 1 < r) { 
        stack.push(p + 1); 
        stack.push(r); 
    } 
    
    for (let i = l; i <= r; i++) {
        noStroke();
        fill(angle[i].arc_colour, 2000, 1000);
        arc(windowWidth / 2, windowHeight / 2, windowHeight * 4, windowHeight * 4, angle[i].begin_angle, angle[i].end_angle, PIE);
    }

}

function swap(j, k) {
    let temp = angle[k].arc_colour;
    angle[k].arc_colour = angle[j].arc_colour;
    angle[j].arc_colour = temp;
}
