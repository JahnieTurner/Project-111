Prediction1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("camera")
Webcam.attach("#camera")

function takesnapshot() {
    Webcam.snap(function(image) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + image + '">'
    })
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9pR59P77T/model.json", modelLoaded)

function modelLoaded() {
    console.log("model is loaded")
}