
const textContainer = document.querySelector('.text-container');
const imagesContainer = document.querySelector('.images-container');
const imageBlock = document.querySelector('.image-block');
const heightBlock = imageBlock.clientHeight;
const amount = imagesContainer.childElementCount;
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');


let count = 0;
let max = heightBlock*(amount-1);
function upFun() {
    count++;
    if(count>3) {count=0};
    moveFun();
}
function downFun() {
    count--;
    if(count<0) {count=(amount-1)};
    moveFun();
}
function moveFun() {
    imagesContainer.style.transform = `translateY(-${heightBlock*count}px)`;
    textContainer.style.transform = `translateY(-${max-(heightBlock*count)}px`;
}

//arrowUp.addEventListener('click', upFun);
arrowUp.onclick = upFun;
//arrowDown.addEventListener('click', downFun);
arrowDown.onclick = downFun;

document.addEventListener('keyup', function(event){
    //console.log(event.key);
    if(event.code==='ArrowUp') upFun();
    if(event.code==='ArrowDown') downFun();
});

window.onload = moveFun;
//window.onresize = moveFun;