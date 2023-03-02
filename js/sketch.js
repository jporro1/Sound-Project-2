const synth = new Tone.MembraneSynth().toDestination();
distortion = new Tone.Distortion(0);

let slider;

synth.connect(distortion);

let notes = {

    'a' : "C4",
    's' : "D4",
    'd' : "E4",
    'f' : "F4",
    'g' : "G4",
    'h' : "A4",
    'j' : "B4",
    'k' : "C5"
};

function keyPressed() {
    let whatNote = notes[key];
    console.log(whatNote + "was played");
    synth.triggerAttackRelease(whatNote, "8n");
}

function setup() {
  createCanvas(400, 400);
  slider = new Nexus.Slider("#slider");
  distortion.toDestination();
  slider.on('change', (v) => {
    distortion.distortion = v;
  })
}

function draw() {
  background(220);
}