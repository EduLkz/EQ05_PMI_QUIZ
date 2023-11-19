//constante com respostas corretas do gabarito oficial do INEP
const gabarito = ["e","c","b","b","a","a","c","d","d","a","c","a","b","d","c","c","e","b","d","e","b","a","a","e","d","b","e","c","a","d","d","a","c","c","e"];
//variável das questões que foram respondidas
var questionsAswered = [];

const navNum = document.getElementById("nav-numeros");
const navNext = document.getElementById("next");
const navPrev = document.getElementById("prev");

const navNextBar = document.getElementById("next-bar");
const navPrevBar = document.getElementById("prev-bar");

const numId = document.getElementById("questao-num");
const questaoNum = parseInt(numId.textContent);

const respostaCorreta = document.getElementById("resposta-correta-texto");
const respostaErrada = document.getElementById("resposta-errada-texto");
const respostaSua = document.getElementById("resposta-sua-texto");

const correta = document.getElementById("correta");
const errada = document.getElementById("errada");
const stats = document.getElementById("stats");
const vazia = document.getElementById("vazia");
const confirmF = document.getElementById("confirmFinish");
//vazia.style.display = 'none';

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


//Acessa as variaveis salvas no localStorage e atribui para as variavels
//Caso item não exista, atribui um valor inicial, caso exista, atribui os valores
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

getLocal();

const nextQuestionValue = checkNextQuestion(); //Verifica a proxima questão nao respondida
const prevQuestionValue = checkPrevQuestion(); //Verifica questões anteriores não respondidas

if(prevQuestionValue === undefined){ //Caso não tenho perguntas anteriores não respondidas, desativa opção de voltar
    navPrev.setAttribute("disabled", "");
    navPrevBar.setAttribute("disabled", "");
}

//Caso não tenho perguntas anteriores não respondidas, desativa opção de avançar
if(nextQuestionValue === undefined){
    navNext.setAttribute("disabled", "");
    navNextBar.setAttribute("disabled", "");
}

//Impede que o usuario acesse uma pergunta já respondida
if(!(questionsAswered[questaoNum - 1] === undefined || questionsAswered[questaoNum - 1] === null)){
    console.log(questionsAswered[questaoNum - 1]);
    if(nextQuestionValue !== undefined){
        nextQuestion();
    }else if(prevQuestionValue != undefined){
        prevQuestion();
    }else{
        finalizar();
    }
}

//Ativa o pop-up especifico de acordo com o valor indicado
function SetDialog(dialogN){ 
    switch(dialogN){
        //Alternativa Errada
        case 0:
            stats.style.display = 'none';
            errada.style.display = 'flex';
            correta.style.display = 'none';
            confirmF.style.display = 'none';
            vazia.style.display = 'none';
            break;
        //Alternativa correta
        case 1:
            stats.style.display = 'none';
            errada.style.display = 'none';
            correta.style.display = 'flex';
            confirmF.style.display = 'none';
            vazia.style.display = 'none';
            break;
        //Estatisticas
        case 2:
            stats.style.display = 'flex';
            errada.style.display = 'none';
            correta.style.display = 'none';
            confirmF.style.display = 'none';
            vazia.style.display = 'none';
            break;
        //Confirmar Finalização    
        case 3:
            stats.style.display = 'none';
            errada.style.display = 'none';
            correta.style.display = 'none';
            confirmF.style.display = 'flex';
            vazia.style.display = 'none';
            break;
        //Alternativa sem resposta
        case 4:
            stats.style.display = 'none';
            errada.style.display = 'none';
            correta.style.display = 'none';
            confirmF.style.display = 'none';
            vazia.style.display = 'flex';
        default: //Desativa todos
            stats.style.display = 'none';
            errada.style.display = 'none';
            correta.style.display = 'none';
            confirmF.style.display = 'none';
            vazia.style.display = 'none';
            break;
        }
}

var respondida = -1;

//Controla a ativação do pop-up
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

//Fecha pop-up de pergunta vazia
function CloseEmpty(){
    vazia.style.display = 'none';
    modal.close();
}

//Redireciona para questao com numero equivalente
function redirectToQuestion(num){
    window.location.href = "/questões/questao-" + num + ".html";
}

//Função para enquando o usuáio estiver entre as questões de 1 - 34 ele consegue ir para
//próxima, se ele estiver na 35 que é a última questão, a função finaliza a prova
//vai para página de resultados
function nextQuestion(){
    if(nextQuestionValue + 1 < 35){
        window.location.href = "/questões/questao-" + (nextQuestionValue + 1) + ".html";
    }else{
        //função que finaliza a prova e encaminha para página de resultados
        finalizar();
    }
}

//Vai para questão anterior que nao foi respondida
function prevQuestion(){
    if(prevQuestionValue + 1 < 35){
        window.location.href = "/questões/questao-" + (prevQuestionValue + 1) + ".html";
    }
}


//Controla quais alternativa selecionada
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

//Tira seleção da alternativa que havia sido selecionada anteriormente
function updateAlternativas(){
    for (let i = 0; i < alternativas.length; i++) {
        if(alternativas[i].id !== alternativaSelecionada){
            alternativas[i].classList.remove("selecionada");
            alternativas[i].classList.add("alternativa");
        }
    }
}


//Função usada quando o usuário confirma a resposta da questão, possuí três respostas
//quando o usuário acerta, quando erra e quando não selecionou nenhuma alternativa
function confirmarQuestao(){
    if(alternativaSelecionada){
        vazia.style.display = 'none';
        questionsAswered[questaoNum - 1] = alternativaSelecionada;
        //Se a questão selecionada for a mesma do gabarito
        if(alternativaSelecionada === gabarito[questaoNum - 1]){
            //abre um pop-up com mensagem de acerto, opção para próxima questão e
            //para as estatísticas da questão
            SetDialog(1);
            respondida = 1;
            //acrescenta +1 na variável "certas" para contabilizarmos depois
            certas++;
            localStorage.setItem("certas", certas);
        }else{
            //Se a questão estiver errada, ou seja, não for a mesma do gabarito
            //Abre um pop-up com mensagem de erro, opção para próxima questão e
            //para as estatísticas da questão
            SetDialog(0);
            respondida = 0;
            const resp = document.getElementById(alternativaSelecionada).textContent;
            respostaSua.textContent = resp;
        }
        localStorage.setItem("perguntasRespondidas", JSON.stringify(questionsAswered));
        
        modal.show();
    }else if(alternativaSelecionada==null){
        //Esse else esta ligado ao primeiro if, ou seja, se nada dentro do if for verdadeiro
        //no caso de quando o usuário não respondeu nenhuma alternativa, abre um pop-up
        //que solicita que ele a responda, apenas com um botão de fechar o pop-up
        vazia.style.display = 'flex';
        modal.show();
    }
}

//Verifica a proxima questão não respondida. Caso n tenha questão sem reposta, o valor fica como indefinido
function checkNextQuestion(){
    var nextQ = undefined;
    var i = 0;
    
    while(nextQ === undefined && i <= (35 - questaoNum)){
        if(questionsAswered[questaoNum + i] === undefined || questionsAswered[questaoNum + i] === null){
            nextQ = questaoNum + i;
            break;
        }

        i++;
    }

    nextQ = (nextQ === 35) ? undefined : nextQ;

    return nextQ;
}

//Verifica a questão anterior não respondida. Caso n tenha questão sem reposta, o valor fica como indefinido
function checkPrevQuestion(){
    var prevQ = undefined;
    var i = questaoNum - 1;
    while(prevQ === undefined && i >= 1){
        if(questionsAswered[i - 1] === undefined || questionsAswered[i - 1] === null){
            prevQ = i - 1;
            break;
        }

        i--;
    }

    return prevQ;
}

// Passa pelos botores da barra de navegação, muda a cor do botao das perguntas já respondidas,
// com verde para acerto e vermelho para erros
for (let i = 0; i < navNum.children.length; i++) {
    var num = navNum.children[i].textContent;
    var qa = null;

    if(questionsAswered[i] !== undefined && questionsAswered[i] !== null){
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

//adiciona onclick de cada alternativa
for (let i = 0; i < alternativas.length; i++) {
    var select = alternativas[i].id;    
    alternativas[i].setAttribute("onClick", "setAlternativaSelecionada(" + select + ")");
}
//código para retirar o botão de "questão anterior" se o usuário estiver na primeira questão
if(questaoNum === 1){
    //.remove remove o "navPrev" que é nosso botão de anterior
    navPrev.remove();
}

//código para retirar o botão de "próxima questão" se o usuário estiver na última questão
if(questaoNum === 35){
    //.remove remove o "navNext" que é nosso botão de próximo
    navNext.remove();
}

//função para encaminhar o usuário para a página de resultados
function finalizar(){
    //"window.location.href" é uma propriedade no JavaScript que permite acessar
    // a URL do documento atual no navegador. Atribuir um valor a window.location.href 
    //redireciona o navegador para essa nova URL. Que neste caso é a pág de resultados
    window.location.href = "/resultado.html";
}

//função para confirmar se a prova foi toda respondida antes de finalizar
function confirmFinish() {
    // Se o total de questões respondidas for diferente do total de questões 
    //aparece um pop-up para perguntar ao usuário se ele deseja mesmo finalizar
    //o informa também que questões em branco serão contabilizadas como erro
    if (questionsAswered.length != gabarito.length) {
        SetDialog(3)
        modal.show()
    } else {
      // Se o total de questões respondidas for IGUAL ao total de questões
      //finalizar a prova e encaminha para a pagina de resultados
      finalizar()
}
}