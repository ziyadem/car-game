console.log(123);
let redCar=document.querySelector('.red-car');
console.log(redCar);
let margin=200;
 
document.addEventListener("keydown" , (e)=>{
    console.log(e.code);
    if(e.code==='ArrowRight'){
        redCar.style.marginRight = `${margin}px`;
        margin+=200;
    }
    if(e.code==='ArrowLeft'){
        for (let i = 0; i <= 800; i+=200) {
            if(redCar.style.marginRight===`${i}px`){
            redCar.style.marginRight= `${i-200}px`;   
        }
        }
    }
    
})
console.log('jds');