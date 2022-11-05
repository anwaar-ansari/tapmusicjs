window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#7FBCD2",
        "#A5F1E9",
        "#E1FFEE",
        "#FFEEAF",
        "#ECB390",
        "#6E85B7"
    ];

    // Sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; // Resets time
            sounds[index].play();
            createBubbles(index);
        });
    });

    // Function for music bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease"; //Learn this 
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});




// search keyframes
// push to git
