const button = document.querySelector (".button-add");
const input = document.querySelector (".area-texto");



button.addEventListener ("click", function(event1){
    event1.preventDefault();

    if (input.value === null ||input.value === undefined ||input.value === "" || input.value.length === 0 || !input.value.trim()){
        input.focus();
        return false;}
    
    const tarefas = document.querySelector (".listar-tarefas");
    
    const div = document.createElement("div");
    div.className = "divTexto"

    const inputArea = document.createElement("span");

    tarefas.appendChild(inputArea)
    
    div.appendChild(inputArea)
  
    tarefas.appendChild(div) 

    const inputTexto =  document.createTextNode(input.value)
    inputArea.appendChild(inputTexto)

    // tarefas.insertBefore(div, tarefas.childNodes[0]); Para colocar em cima as tarefas

    inputArea.addEventListener("click", function(event2){
        event2.preventDefault();

        if(inputArea.classList.contains("check-cinza")){
            inputArea.classList.remove("check-cinza")
            inputArea.classList.add("check")
          }else{
            inputArea.classList.remove("check");
            inputArea.classList.add("check-cinza");
          }
          
    })
    
        
    const excluir = document.createElement("button");
    excluir.className = "button-excluir" 

    excluir.innerHTML = `x`;

    excluir.addEventListener ("click", function(event3){
        event3.preventDefault();
        
        div.remove()
    })
    div.appendChild(excluir)

    
    const buttonMarcar = document.querySelector(".marcar-todos");
    buttonMarcar.addEventListener("click", function(event4){
        event4.preventDefault();
        inputArea.className = "check-cinza" 
    })


    const buttonLimparLista = document.querySelector(".limpar-lista");
    buttonLimparLista.addEventListener("click", function(event5){
        event5.preventDefault();

        div.remove()
    })

    input.value = ""

  })


