let interact = document.querySelectorAll("td");
console.log(interact.length);
for(i=0;i<interact.length;i++){
    console.log(i);
    console.log(interact[i]);
    interact[i].addEventListener("click", function() {reverse()});
}



function reverse(){
    
    for(i=0;i<interact.length;i++){
        console.log(interact[i].classList);
        if(interact[i].classList.contains("reverse")){
            interact[i].classList.remove("reverse");
            continue;
        }
        interact[i].classList.add("reverse");
        
    }
    
}