Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
  Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });
}
console.log("la libreria de ml5 se activa , ml5.version");

classifier=ml5.immageClassifier("https://teachablemachine.withgoogle.com/models/_MMwgA1-9/model.json" , modelLoaded)

function modelLoaded(){
console.log("model cargado");
}

function check(){
img = document.getElementById("selfie_image");
classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
  console.log("error");
}else{



  
}
}