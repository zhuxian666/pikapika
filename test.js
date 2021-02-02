import string from "./text";

const player = {
    id: undefined,
    n: 0,
    time: 20,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    init: () => {
        player.bindevents()
        player.play()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'btnplay',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindevents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    play: () => {
        player.id = setInterval(() => {
            player.n += 1
            if (player.n === string.length) {
                clearInterval(player.id)
            }
            player.ui.demo1.innerText = string.substr(0, player.n)
            player.ui.demo2.innerHTML = string.substr(0, player.n)
            player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
        }, player.time)
    },
    pause: () => {
        clearInterval(player.id)
    },
    btnplay: () => {
        player.pause()
        player.play()
    },
    slow: () => {
        player.pause()
        player.time = 60
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 10
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()

//
// let n = 0
// let time = 20
// let id
// const paly = () => {
//     id = setInterval(() => {
//         n += 1
//         if (n === string.length) {
//             clearInterval(id)
//         }
//         demo1.innerText = string.substr(0, n)
//         demo2.innerHTML = string.substr(0, n)
//         demo1.scrollTop = demo1.scrollHeight
//     }, time)
// }
// paly()
// const pause = () => {
//     clearInterval(id)
// }
// btnPause.onclick = () => {
//     pause()
// }
// btnPlay.onclick = () => {
//     paly()
// }
// btnSlow.onclick = () => {
//     pause()
//     time = 60
//     paly()
// }
// btnNormal.onclick = () => {
//     pause()
//     time = 10
//     paly()
// }
// btnFast.onclick = () => {
//     pause()
//     time = 0
//     paly()
// }
