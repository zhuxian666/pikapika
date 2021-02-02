const string = `.skin {
    background: #FFCB00;
    height: 50vh;
    position: relative;
}

.nose {
    position: absolute;
    left: 50%;
    top: 90px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    margin-left: -10px;
    border-width: 12px 10px 0 10px;
    border-top-color: black;
    border-radius: 50% 50% 0 0;
    z-index: 2;
}

@keyframes wave {
    0% {
        transform: rotate(25deg)
}
    33% {
        transform: rotate(0deg)
}
    66% {
        transform: rotate(-25deg)
}
    100% {
        transform: rotate(0deg)
}
}

.nose:hover {
    transform-origin: center bottom;
    animation: 350ms wave infinite linear;
}

.eye {
    position: absolute;
    left: 50%;
    top: 60px;
    width: 54px;
    height: 54px;
    background: #2e2e2e;
    border-radius: 50%;
    margin-left: -30px;
    z-index: 2;
}

.eye::before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    position: relative;
    top: 2px;
    left: 10px;

}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    position: absolute;
    left: 50%;
    top: 100px;
    width: 200px;
    height: 200px;
    margin-left: -100px;
    position: relative;
}

.mouth .up {
    position: relative;
}

.mouth .up .lip {
    position: absolute;
    border: 5px solid black;
    left: 50%;
    top: -50px;
    width: 100px;
    height: 100px;
    z-index: 1;
    background: #FFCB00;
}

.mouth .up .left {
    margin-left: -115px;
    border-color: transparent transparent black black;
    border-radius: 0 0 0 80px/56px;
    transform: rotate(-32deg);
}

.mouth .up .lip:after {
    display: block;
    border: 10px solid #FFCB00;
    width: 10px;
    height: 50px;
    position: absolute;
    content: '';
    top: -8px;

}

.mouth .up .left:after {
    left: -8px;
}

.mouth .up .right {
    margin-left: 15px;
    border-color: transparent black black transparent;
    border-radius: 0 0 80px/56px 0;
    transform: rotate(32deg);
}

.mouth .up .right:after {
    left: 86px;
}

.mouth .down {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 160px;
    height: 260px;
    margin-left: -80px;
    overflow: hidden;

}

.mouth .down .yuan1 {
    position: absolute;
    left: 50%;
    margin-left: -78px;
    width: 156px;
    height: 400px;
    border-radius: 50%;
    background: #CC4143;
    border: 2px solid #303031;
    top: -235px;
    overflow: hidden;
    position: relative;
}

.mouth .down .yuan1 .yuan2 {
    position: absolute;
    left: 50%;
    margin-left: -85px;
    bottom: -70px;
    width: 170px;
    height: 200px;
    border-radius: 50%;
    background: #DD666A;
}

.face {
    position: absolute;
    background: #FF5140;
    width: 70px;
    height: 70px;
    left: 50%;
    margin-left: -35px;
    top: 180px;
    border-radius: 50%;
    border: 3px solid black;
}

.face.left {
    transform: translateX(-150px);
}

.face.right {
    transform: translateX(150px);
}`
export default string
