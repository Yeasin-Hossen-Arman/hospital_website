const totalelements = document.querySelectorAll(".element");
console.log(totalelements);
let count = 1;
setInterval(() => {

    count++;
    const currentelement = document.querySelector(".current");
    currentelement.classList.remove("current");

    if(count > totalelements.length){
        totalelements[0].classList.add("current");
        count = 1;
        
    }else{
        currentelement.nextElementSibling.classList.add("current"); 
    }
    
}, 2000);
