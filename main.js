song_1="";
song_2="";
function preload(){
    song_1=loadSound("heat_waves.mp3");
    song_2=loadSound("wellerman.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(400,200);
    
    video=createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video,0,0,500,400);
}