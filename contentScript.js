//const modal = document.getElementById("div1");
const modal = document.createElement('div');
modal.classList.add("modal")
document.body.prepend(modal);

const modal1 = document.createElement('div');
modal1.classList.add("modal-content")
// const btn= document.createElement('span')
// btn.classList.add('close-button')

const heading = document.createElement('h1');
modal1.appendChild(heading);
modal.appendChild(modal1);

// request a LocalMediaStream
navigator.mediaDevices.getUserMedia({ audio: true })
    // add our listeners
    //.then(stream => detectSilence(stream, startSpeech))
    .then(stream => startSpeech())
    .catch(e => console.log(e.message));

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
//start voice recognize
function startSpeech() {
    var g = new SpeechAPI({ interimResults: false });
    g.start(function (r) {
        var name = "ayushi";
        console.log(r);
        if (r.includes(name)) {
           
           var ttsRecorder= new SpeechSynthesisRecorder(heading.innerHTML= "Yes what can I do?");
           //ttsRecorder.start()
           toggleModal();
            setTimeout(doWork, 1500);
        }
        else {
            if (r != "") {
                var ttsRecorder = new SpeechSynthesisRecorder(text = "Sorry , What did you say?");
                ttsRecorder.start()
            }
        }
    });
}

//detecting silence
// function detectSilence(
//     stream,
//     // onSoundEnd = _ => { },
//     onSoundStart = _ => { },
//     silence_delay = 8000,
//     min_decibels = -40,
//     max_decibels = 180
// ) {
//     const ctx = new AudioContext();
//     const analyser = ctx.createAnalyser();
//     const streamNode = ctx.createMediaStreamSource(stream);
//     streamNode.connect(analyser);
//     analyser.minDecibels = min_decibels;
//     analyser.maxDecibels = max_decibels;
//     let triggered = true;
//     const data = new Uint8Array(analyser.frequencyBinCount); // will hold our data
//     let silence_start = performance.now();
//     // trigger only once per silence event

//     function loop(time) {
//         requestAnimationFrame(loop); // we'll loop every 60th of a second to check
//         analyser.getByteFrequencyData(data); // get current data
//         if (data.some(v => v)) { // if there is data above the given db limit
//             if (triggered) {
//                 triggered = false;
//                 setTimeout(onSoundStart, 500);
//             }
//             silence_start = time;
//         }
//         if (!triggered && time - silence_start > silence_delay) {
//             console.log("Silence Detected")
//             var snd = new Audio(chrome.runtime.getURL("beep.mp3"));
//             snd.play()
//             triggered = true;
//         }
//     }
//     loop();
// }




