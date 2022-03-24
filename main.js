mushX = 0;
mushY = 0;


function preload() {
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}



function setup() {
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
  }

function draw() {
    image(video,0,0,300,300);
    image(mustache,mushX,mushY,60,45);
}




function modelLoaded() {
    console.log("Model is Initialized");
}

function take_snapshot() {
    save("Filtered_Image");
}

function gotPose(results) {
    if(results.length>0) {
        console.log(results);
        console.log("nose x ="+ results[0].pose.nose.x);
        mushX = results[0].pose.nose.x -30;
        console.log("nose y =" + results[0].pose.nose.y);
        mushY = results[0].pose.nose.y;
    }
}



