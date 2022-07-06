
const mainContainer = document.querySelector('.main-container');

const arrowUp = document.createElement('div');
arrowUp.classList.add('arrow','arrow-up');
arrowUp.innerHTML = '<i class="fa-solid fa-arrow-up-long"></i>';
const arrowDown = document.createElement('div');
arrowDown.classList.add('arrow','arrow-down');
arrowDown.innerHTML = '<i class="fa-solid fa-arrow-down-long"></i>';

const textContainer = document.createElement('div');
textContainer.classList.add('text-container');
const imagesContainer = document.createElement('div');
imagesContainer.classList.add('images-container');

textContainer.innerHTML = '<div class="text-block"><h3>Lorem, ipsum.1</h3></div><div class="text-block"><h3>Lorem, ipsum dolor.2</h3></div><div class="text-block"><h3>Lorem, ipsum.3</h3></div><div class="text-block"><h3>Lorem ipsum dolor sit.4</h3></div>';
imagesContainer.innerHTML = '<img src="./images/1.jpeg" alt="img"><img src="./images/2.jpeg" alt="img"><img src="./images/3.jpeg" alt="img"><img src="./images/4.jpeg" alt="img">';

mainContainer.append(arrowUp, arrowDown, textContainer, imagesContainer);

const imageBlock = document.querySelector('.images-container img');
const heightBlock = imageBlock.clientHeight;
const amount = imagesContainer.childElementCount;


let count = 0;
const max = heightBlock*(amount-1);
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
