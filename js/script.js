function makeGrid(inputNumber){
    const cdiv = document.querySelector('.canvas');
    const sideLength = 500/inputNumber;
    // Add 16 divs
    for (let i = 1; i <= inputNumber*inputNumber; i++) {
    const div = document.createElement('div');
    div.setAttribute('style',`height: ${sideLength}px; width: ${sideLength}px;`);
    cdiv.appendChild(div);
    
    }
    const divs=document.querySelectorAll('.canvas div');
    divs.forEach(div=>
    div.addEventListener(
        'mouseover',function(e){
            const colorString="ABCDEF1234567890";
            let color='#';
            for(let i=1;i<=6;i++){
                color+=colorString[Math.floor((Math.random() * 16))]
            }
            div.style.backgroundColor=color;
        }
));
}
const size=document.querySelector('.slider input');
document.querySelector('.sizeText').innerHTML=`<h1>${size.value} x ${size.value}<h1>`;
size.addEventListener('mouseup',function(e){
    document.querySelector('.sizeText').innerHTML=`<h1>${size.value} x ${size.value}<h1>`;
    const cdiv = document.querySelector('.canvas');
    const divs =document.querySelectorAll('.canvas div');
    divs.forEach(div=>cdiv.removeChild(div));
    makeGrid(size.value);
});

makeGrid(size.value);

const reset=document.querySelector('.rightControls div');
reset.addEventListener('click',function(e){
    clearGrid();
});

function clearGrid(){
    const divs=document.querySelectorAll('.canvas div');
    divs.forEach(div=>
        div.style.backgroundColor=''
    );
}
