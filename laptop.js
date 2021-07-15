img = "";
status = "";

function preload(){
    img = loadImage("Laptop.jpg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 500, 400);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}