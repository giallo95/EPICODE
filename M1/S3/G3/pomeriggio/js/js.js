function aggTesto() { 
   
    let testo = document.getElementById("testo");
    
    let lista = document.getElementById("lista"); 
    
    let li = document.createElement("li"); 
    
    li.innerHTML = testo.value;
    
    lista.appendChild(li); 
    
    testo.value = ""; } 


    
    

