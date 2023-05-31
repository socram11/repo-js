const hideText= ()=> {
    document.querySelector("#show-hide").addEventListener(
        "click", function(){
            const parrafo= document.querySelector("#p1");
            console.log("parrafo",parrafo);
            if(parrafo.style.display==="none"){
                parrafo.style.display="block";    
            }
            else{
                parrafo.style.display="none";
            }
        }
        
    )
    
}