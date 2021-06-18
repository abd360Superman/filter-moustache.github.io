noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/1zgNsV9M/moustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, model_load_hogaya);
    poseNet.on('pose', pose_la);
}

function pose_la(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}

function model_load_hogaya() {
    console.log('Model Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, noseX-35, noseY-5, 70, 40);
}

function snapshot_le() {
    save('myFilterImage.png');
}