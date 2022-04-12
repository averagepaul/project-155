function preload(){

}

function setup()
{
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.size(300,300)
    
    //initializing poseNet model
    poseNet=ml5.poseNet(video,modelLoaded)
    //executing poseNet model
    poseNet.on('pose',gotPoses)
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results)
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
    }
}

function modelLoaded(){
console.log('modelLoaded')
console.log('poseNetIsInitialized')
}

function draw()
{
image(video,0,0,300,300)
}

function take_snapshot()
{
save("myFilterImage.png")
}

