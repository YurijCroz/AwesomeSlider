
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
    if(count>(amount-1)) {count=0};
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

let flag = 0;
document.addEventListener('wheel', (event) => {
    let target = event.target.closest('.main-container');
    if(target===null){return;}
    if(flag==1){return;}
    event.deltaY > 0 ? downFun() : upFun();
    flag = 1;
    setTimeout(()=>flag=0, 700)
})

window.onload = moveFun;
