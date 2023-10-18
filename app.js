const gabarito = ["e","c","b","b","a","a","c","d","d","a","c","a","b","d","c","c","e","b","d","e","b","a","a","e","d","b","e","c","a","d","d","a","c","c","e"];
var questionsAswered = [];

const navNum = document.getElementById("nav-numeros");
const navNext = document.getElementById("next");
const navPrev = document.getElementById("prev");

const numId = document.getElementById("questao-num");
const questaoNum = parseInt(numId.textContent);

const respostaCorreta = document.getElementById("resposta-correta-texto");
const respostaErrada = document.getElementById("resposta-errada-texto");
const respostaSua = document.getElementById("resposta-sua-texto");

const correta = document.getElementById("correta");
const errada = document.getElementById("errada");
const stats = document.getElementById("stats");
const vazia = document.getElementById("vazia");
vazia.style.display = 'none';

const modal = document.querySelector("dialog");
const respostaCerta = document.getElementById(gabarito[questaoNum-1]).textContent;

const alternativas = document.getElementById("respostas").children;
var alternativaSelecionada;
var respostaEscolhida;

numId.textContent = questaoNum + "/35";
respostaCorreta.textContent = respostaCerta;
respostaErrada.textContent = respostaCerta;
SetDialog();

var certas = 0;

function getLocal(){
    
    if(localStorage.getItem("certas") === null){
        localStorage.setItem("certas", certas);
    }else{
        certas = localStorage.getItem("certas");
    }

    if(localStorage.getItem("perguntasRespondidas") === null){
        localStorage.setItem("perguntasRespondidas", JSON.stringify(questionsAswered));
    }else{
        if(localStorage.getItem("perguntasRespondidas").length !== 0)
            questionsAswered = JSON.parse(localStorage.getItem("perguntasRespondidas"));
    }

}
getLocal()

if(questionsAswered[questaoNum - 2] !== undefined){
    navPrev.setAttribute("disabled", "");
}

if(questionsAswered[questaoNum ] !== undefined){
    navNext.setAttribute("disabled", "");
}


function SetDialog(dialogN){ 
    switch(dialogN){
        case 0:
            stats.style.display = 'none';
            errada.style.display = 'flex';
            correta.style.display = 'none';
            break;
        case 1:
            stats.style.display = 'none';
            errada.style.display = 'none';
            correta.style.display = 'flex';
            break;
        case 2:
            stats.style.display = 'flex';
            errada.style.display = 'none';
            correta.style.display = 'none';
            break;
        default:
            stats.style.display = 'none';
            errada.style.display = 'none';
            correta.style.display = 'none';
            break;
        }
}

var respondida = -1;

function ToggleStats(open){
    if(open === 1){
        modal.show();
        SetDialog(2);
    }else{
        
        if(respondida < 0){
            SetDialog();
            modal.close()
        }else{
            SetDialog(respondida);
        }
    }
}

function CloseEmpty(){
    vazia.style.display = 'none';
    modal.close();
}

function redirectToQuestion(num){
    window.location.href = "/questões/questao-" + num + ".html";
}

function nextQuestion(){
    window.location.href = "/questões/questao-" + (questaoNum + 1) + ".html";
}

function prevQuestion(){
    window.location.href = "/questões/questao-" + (questaoNum - 1) + ".html";
}

function finalizar(){
    window.location.href = "/resultado.html";
}

function setAlternativaSelecionada(alt){
    if(!alt) return;

    if(alt.classList.contains("selecionada")){
        alt.classList.remove("selecionada");
        alt.classList.add("alternativa");
        alternativaSelecionada = null;
        respostaEscolhida = null;
    }else{
        alt.classList.remove("alternativa");
        alt.classList.add("selecionada");
        alternativaSelecionada = alt.id;
    }
    
    updateAlternativas();
}

function updateAlternativas(){
    for (let i = 0; i < alternativas.length; i++) {
        if(alternativas[i].id !== alternativaSelecionada){
            alternativas[i].classList.remove("selecionada");
            alternativas[i].classList.add("alternativa");
        }
    }
}

function confirmarQuestao(){
    if(alternativaSelecionada){
        vazia.style.display = 'none';
        questionsAswered[questaoNum - 1] = alternativaSelecionada;
        if(alternativaSelecionada === gabarito[questaoNum - 1]){
            SetDialog(1);
            respondida = 1;
            certas++;
            localStorage.setItem("certas", certas);
        }else{
            SetDialog(0);
            respondida = 0;
            const resp = document.getElementById(alternativaSelecionada).textContent;
            respostaSua.textContent = resp;
        }
        localStorage.setItem("perguntasRespondidas", JSON.stringify(questionsAswered));
        
        modal.show();
    }else{
        vazia.style.display = 'flex';
        modal.show();
    }
}

for (let i = 0; i < navNum.children.length; i++) {
    var num = navNum.children[i].textContent;
    var qa = null;

    if(questionsAswered[i] !== undefined){
        qa = (questionsAswered[i] === gabarito[i]);
    }
    switch (qa) {
        case true:
            navNum.children[i].style.background = 'rgb(124, 204, 124)';
            break;
        case false:
            navNum.children[i].style.background = 'rgb(204, 124, 124)';
            break;
        default:
            navNum.children[i].setAttribute("onClick", "redirectToQuestion(" + num + ")");
            break;
    }
}

for (let i = 0; i < alternativas.length; i++) {
    var select = alternativas[i].id;    
    alternativas[i].setAttribute("onClick", "setAlternativaSelecionada(" + select + ")");
}

if(questaoNum === 1){
    navPrev.remove();
}

if(questaoNum === 35){
    navNext.remove();
}
