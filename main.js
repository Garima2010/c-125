noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560, 150);

    PoseNet = ml5.poseNet(video , modelLoaded);
    PoseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY"+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX +"difference = "+difference);
    }
}
function draw(){
    background("#94b8b8");

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference +"px";
    fill('#8000ff');
    stroke('#8000ff');
    square(noseX,noseY,difference);
}
