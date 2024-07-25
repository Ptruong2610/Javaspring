let counter = 0;
const counterEl = document.getElementById("counter");

const updateCounter = () =>{
    counterEl.textContent = counter;
    
    if(counter>0){
        counterEl.style.color = "green";
    }else if(counter<0){
        counterEl.style.color = "red";
    }else{
        counterEl.style.color = "#333333";
    }
}

document.querySelector(".prevBtn").addEventListener("click",()=>{
    counter--;
    updateCounter();
})

document.querySelector(".nextBtn").addEventListener("click",()=>{
    counter++;
    updateCounter();
})