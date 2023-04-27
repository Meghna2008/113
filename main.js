function preload(){

}

function setup(){
  canvas = createCanvas(500, 500);
  canvas.position(390,350);
  webcam = createCapture(VIDEO);
  webcam.hide();
  tint_Color = "";
}

function draw(){
image(webcam, 100,100,300,300);
tint(tint_Color);
circle(100, 100, 70, );
circle(400, 100, 70, );
circle(100, 400, 70, );
circle(400, 400, 70, );



rect(85, 85, 330, 30);
rect(85, 85, 30, 330);
rect(385, 85, 30, 330);
rect(85, 385, 330, 30);

let c = color("#5DADE2");
fill(c);

ellipse(100, 100, 70, 70);
ellipse(400, 100, 70, 70);
ellipse(100, 400, 70, 70);
ellipse(400, 400, 70, 70);
let x = color("#17202A");
fill(x);


}

function apply_filter(){
    tint_Color = document.getElementById("filter_color").value;
}

function take_snapshot(){
    save("student_image.png");
}