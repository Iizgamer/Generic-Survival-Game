const titleText = document.getElementById('titleText');
const statusText = document.getElementById('statusText');
const continueTextBtn = document.getElementById('continueTextBtn')
let continueTextBtnCount = 0


statusText.textContent = 'You woke up early in the morning on the ship, the rays of sunlight from the early morning sunrise sneaking through your closed blinds. You can feel the rough waves rocking the ship lightly, causing you to stumble slightly, but you manage to stay on your feet.'

continueTextBtn.addEventListener('click', function(){
    continueTextBtnCount++
    if (continueTextBtnCount == 1) {
        statusText.textContent = 'Then, the sound you were dreading the most creeps — or, more accurately — invades your ears.'
    }
})