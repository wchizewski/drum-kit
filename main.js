// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener('keydown', processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === 'KeyA') {
    // Play A-Clap
    setDrum('clap', 'A')
  } else if (e.code === 'KeyS') {
    // Play S-hihat
    setDrum('hihat', 'S')
  } else if (e.code === 'KeyD') {
    // Play D-kick
    setDrum('kick', 'D')
  } else if (e.code === 'KeyF') {
    // Play F-Openhat
    setDrum('openhat', 'F')
  } else if (e.code === 'KeyG') {
    // Play G-Boom
    setDrum('boom', 'G')
  } else if (e.code === 'KeyH') {
    // Play H-Ride
    setDrum('ride', 'H')
  } else if (e.code === 'KeyJ') {
    // Play J-Snare
    setDrum('snare', 'J')
  } else if (e.code === 'KeyK') {
    // Play K-Tom
    setDrum('tom', 'K')
  } else if (e.code === 'KeyL') {
    // Play L-Tink
    setDrum('tink', 'L')
  }
}

function setDrum(sound, key) {
  let audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(key).classList.add('playing');
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove('playing');
}
