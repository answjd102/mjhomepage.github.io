let circleX = 100;

function mousePressed() {
  circleX = 0;
}
let img;

function preload() {
  // 이미지 파일 불러오기
  img = loadImage('mj profile.jpg');
}

let customFont;

function preload() {
  // 사용자 정의 폰트 파일 불러오기
  customFont = loadFont('BAUHS93.TTF');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
 
//  image(img, 10,0,500, 500); // 이미지 그리기
  
       background(255,255,255,);
       textSize(20); // 텍스트 크기 설정
       fill(0); // 텍스트 색상 설정 (검정색)
       textAlign(CENTER);
  textFont("Arial"); // "Arial" 폰트를 사용할 수 있도록 설정
   textStyle(BOLD); // 텍스트 스타일을 굵게 설정
       text("MOON JUNG JANG", 400, 200); // 텍스트 출력 위치 설정
  
   fill(255, 125, 0, ); // 텍스트 색상 설정 (검정색)
  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
  rect(400,400,200);
    
 
  
  fill(0, 125, 2, ); // 텍스트 색상 설정 (검정색)
  stroke(255);
  strokeWeight(1);
  ellipse(circleX,400, 200);
  
  circleX = circleX + 10;
  
     fill( 0 ); // 텍스트 색상 설정 (검정색)
  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
   ellipse(mouseX, mouseY, 20);
  
}