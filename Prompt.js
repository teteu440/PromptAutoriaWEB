
function mostrarPrompt (){
    let name = prompt("Como poderia lhe ajudar?")
    if (name !== null && name !==""){
        document.getElementById("resultado").innerHTML = "Olá, " + nome + "!";
    }else{
        document.getElementById("resultado").innerHTML = "Você não digitou um nome.";
    }
}



