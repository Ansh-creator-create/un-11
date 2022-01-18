var song_1 = "";
var song_2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var scoreLeftWrist = 0;
var song_status = "";
function preload(){
    song_1= loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
    song_1.isPlaying();
    song_status = song_1.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
    if (scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
    song_2.stop();
    }
if(song_status == false){
    song_1.play();
    document.getElementById("song").innerHTML = "Song - Peter pan theme";
}
}
function modelLoaded(){
    console.log("poseNet instalized");
}
function gotPoses(results){
    if (results.length > 0){
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;   
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristX = "leftWristX =" + leftWristX + "leftWristY =" + leftWristY);
   
   rightWristX = results[0].pose.rightWrist.x;
   rightWristY = results[0].pose.rightWrist.y;
    console.log(rightWristX = "rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
}


}