const audioDescriptions = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open-HH',
    'Z': "Kick-n'-Hat",
    'X': 'Kick',
    'C': 'Closed-HH'
};

function triggerPad(key) {
    const upperKey = key.toUpperCase();
    const audioElement = document.getElementById(upperKey);
    
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        
        document.getElementById('display').innerText = audioDescriptions[upperKey];
        
        const padElement = audioElement.parentElement;
        padElement.classList.add('active');
        
        setTimeout(() => {
            padElement.classList.remove('active');
        }, 100);
    }
}

document.querySelectorAll('.drum-pad').forEach(pad => {
    pad.addEventListener('click', function() {
        const key = this.querySelector('.clip').id;
        triggerPad(key);
    });
});

document.addEventListener('keydown', function(event) {
    triggerPad(event.key);
});