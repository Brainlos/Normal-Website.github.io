sounds = [
    new Audio("/sounds/mixkit-bomb-drop-impact-2804.wav"),
    new Audio("/sounds/mixkit-drums-of-war-2784.wav")
]

soundBtn = document.getElementById("soundBtn")
soundBtn:onclick(
    sounds[Math.random(0, length(sounds))].play()
)