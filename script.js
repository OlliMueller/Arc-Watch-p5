function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();
  let d = day();
  let m = month();
  let y = year();

  strokeWeight(8);
  noFill();

  stroke("salmon");
  let secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  push();
  rotate(secAngle);
  stroke("salmon");
  strokeWeight(4);
  line(0, 0, 120, 0);
  pop();

  stroke(255, 255, 0); //yellow
  let minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  push();
  rotate(minAngle);
  stroke(255, 255, 0);
  line(0, 0, 110, 0);
  pop();

  stroke(0, 255, 255); //cyan
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(hrAngle);
  stroke(0, 255, 255);
  line(0, 0, 70, 0);
  pop();

  stroke(255);
  point(0, 0);

  fill(255);
  noStroke();
  rotate(90);
  translate(-40, -120);
  text(hr + ":" + min + ":" + sec, 20, 30);

  fill(255);
  noStroke();
  translate(180, 90);
  text(d + "-" + m + "-" + y, -95, 30);
}
