noseX=0;
noseY=0;

function preload(){
    mustach=loadImage("https://i.postimg.cc/0jkMZ4x7/Woww.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();   
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustach,noseX,noseY,40,25)
}

function take_snapshot(){
    save("Filter_Image");
}

function modelLoaded(){
    console.log("Posenet Model is Loaded!!");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose X = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y+8;
    }
}