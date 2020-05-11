function chainbrake() {
    let chain=document.getElementById('chain');
    chain.innerHTML = '&#xf0c1'
    setTimeout(() => {
        chain.innerHTML = "&#xf127;"
    }, 1000);
}

function envelopeopen() {
    let envelope=document.getElementById('envelope');
    envelope.innerHTML = '&#xf0e0'
    setTimeout(() => {
        envelope.innerHTML = "&#xf2b6;"
    }, 1000);
}

function unlock() {
    let unlock=document.getElementById('lock');
    unlock.innerHTML = '&#xf023'
    setTimeout(() => {
        unlock.innerHTML = "&#xf3c1;"
    }, 1000);
}

function chargebattery() {
    let battery=document.getElementById('battery');
    battery.innerHTML = '&#xf244'
    setTimeout(() => {
        battery.innerHTML = "&#xf243;"
    }, 1000);
    setTimeout(() => {
        battery.innerHTML = "&#xf242;"
    }, 2000);
    setTimeout(() => {
        battery.innerHTML = "&#xf241;"
    }, 3000);
    setTimeout(() => {
        battery.innerHTML = "&#xf240;"
    }, 4000);
}

//callanimation
chainbrake();
setInterval(chainbrake,2000)

envelopeopen()
setInterval(envelopeopen,2000)

unlock()
setInterval(unlock,2000)

chargebattery()
setInterval(chargebattery,5000)
