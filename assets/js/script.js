/* 
Case Sensitive

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
pro classe: getElementsByClassName()   
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = window.document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width="100%";

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido ooo seu jumento"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Deu bom, prossiga"
        txtNome.style.color = "green"
        nomeOk = true;
    }

}


function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail esta errado sua anta";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "Deu bom prossiga";
        txtEmail.style.color = "grenn";
        emailOk = true;
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >=100){
    txtAssunto.innerHTML= "Texto ultrapassou o limite de caracter, tu não sabe ler mano ?";
    txtAssunto.style.color ="red";
    txtAssunto.style.display = "block" ;   
    }else{
     txtAssunto.style.display = "none";  
     assuntoOk = true ;
    }
}

function  enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    }else{
        alert ("burro burro cabeça de et, preencha corretamente o bagulho")

    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"

}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}