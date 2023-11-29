//constante com respostas corretas do gabarito oficial do INEP
const gabarito = ["e","c","b","b","a","a","c","d","d","a","c","a","b","d","c","c","e","b","d","e","b","a","a","e","d","b","e","c","a","d","d","a","c","c","e"];
const resGabarito = [
    "e) A ascensão social depende de fatores viabilizadores que estão fora do alcance das camadas pobres, o que ocasiona conflitos sociais em busca do acesso a tais fatores.",
    "c) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
    "b) II. \'O uso das bicicletas como meio de transporte contribui para a melhoria da qualidade de vida nas grandes metrópoles, pois elas não emitem poluentes, além de esse uso proporcionar a prática de atividade física\', Apenas",
    "b) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
    "a) I. \'O elevado índice de suicídios entre crianças e adolescentes indígenas no país evidencia a necessidade de ações com foco nos direitos fundamentais desses indivíduos.\'.",
    "a) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
    "c) I. \'Os textos I e II evidenciam a importância de critérios nas buscas realizadas pelos usuários da Internet por informações sobre patologias, pois algumas informações podem trazer riscos à saúde por fomentarem a compreensão equivocada de sintomas e profilaxias\' e II. \'O texto I afirma que a disponibilização de informações sobre temas de saúde nos meios de comunicação tem contribuído para o esclarecimento da população acerca de hábitos saudáveis.",
    "d) I. \'O bem comum, a ser estabelecido por um governo democrático, nem sempre está associado às opiniões da maioria do povo.\', III. \'Circunstâncias políticas de polarização, marcadas pela alta competitividade e combatividade entre posições divergentes, caracterizam um modelo de democracia majoritária\' e IV. \'Democracia consensual pressupõe que a situação política no poder considere em suas decisões as necessidades das minorias, no sentido de governar para todo o povo.\'",
    "d) discuss language as a social, historical and cultural construct.",
    "a) Statements I and II are true propositions, and II is a correct justification of I.",
    "c) À segregação racial e à expectativa de que seria superada com a prosperidade trazida pelos negros na construção do país.",
    "a) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
    "b) Ensinar o idioma como ferramenta de comunicação entre os povos sem privilegiar povos hegemônicos.",
    "d) I. \'The digital tool used by the teacher allowed students to respond to literature in personal and meaningful ways\', III. \'Teacher used the digital tool as a resource to supplement and enrich the content traditionally presented in the classroom.\' and IV. Online literary discussion enhances student’s confidence as they can post their comments anonymously.\', only.",
    "c) Acarretarem uma gramática explícita que se absorve da forma e do significado das expressões da língua.",
    "c) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
    "e) As asserções I e II são proposições falsas.",
    "b) Ajudam a caracterizar Zé Pequeno como membro de uma comunidade de fala mais próxima do polo rural do contínuo rural-urbano, mas não são fenômenos restritos a este polo e, portanto, não podem ser considerados estereótipos dos falares rurais",
    "d) I. \'Camões inova na arte de escrever ao utilizar em seus textos o princípio clássico da imitação, a qual não consiste apenas em transcrever o texto imitado, mas possibilita Camões reinventar o texto.\', III. \'Camões parte do texto bíblico, respeita a essência e o contexto histórico específico, e o transforma em um poema lírico de alta qualidade estética e literária.\' e IV. \'Camões, ao transformar o texto bíblico em um poema lírico amoroso, abranda o comportamento de     Labão, supervalorizando o amor de Jacó por Raquel e transformando o texto narrativo em arte literária\'.",
    "e) I. \'A determinação do valor de uma obra literária perpassa pelo conceito de originalidade, evidenciada pela riqueza e complexidade tanto do ponto de vista semântico, quanto do ponto de vista formal, aspecto esse que, embora específico à literatura, pode ser aplicado a letras de canções, como é o caso de “Beija eu”.\', II. \'Na canção “Beija eu”, a ruptura poética, linguisticamente estabelecida, ocorre pela utilização do pronome “eu”, o que causa estranhamento não tanto pela construção em si – muito comum na linguagem oral –, mas pela vinculação dessa construção aos sentidos possíveis que ela ganha, estabelecendo-se, desse modo, a literariedade do texto.\' e III. \'A partir do advento da crítica pós-estruturalista, as produções artísticas começam a ser valorizadas mais pelo que constroem em termos de linguagens e sentidos do que pela classificação catalográfica que recebem; perspectiva sob a qual letras de canções populares passam a compor o objeto de estudos da crítica literária, que começa a se debruçar sobre a investigação das manifestações culturais em linguagens diversas e variadas.\'.",
    "b) O poema “Meus oito anos” de Oswald de Andrade, escritor da primeira fase do Modernismo brasileiro, constitui uma intertextualidade, em forma de paródia, do poema “Meus oito anos”, escrito no século XIX, por Casimiro de Abreu, autor da segunda geração romântica brasileira",
    "a) I. \'O texto I apresenta um trecho de uma peça teatral do humanismo português, isto é, período de transição entre a cultura da Idade Média e do Renascimento, e menciona três elementos que são importantes para a compreensão da morte como ritual de travessia.\' e III. \'O texto III apresenta trecho de um conto, em prosa coloquial, considerado obra literária do contexto modernista brasileiro, cujo título não revela que terceira margem é esta, mas indica que o pai segue rumo a um caminho desconhecido.\'.",
    "a) I. \'As obras de Portinari e Graciliano Ramos, representadas nos textos I e II expressam um sentimento de indignação e denúncia da realidade, uma vez que ambas abordam o problema da relação concreta da sociedade do sertão por meio de um choque estético, pela forma rude com que representam a cena e as personagens.\', apenas",
    "e) III. \'A observação da prática do professor em sala de aula corporifica uma tensão entre confiança e vulnerabilidade, devendo por este motivo ser evitada.\' e IV. \'A avaliação permite ao docente refletir sobre sua prática pedagógica e auxilia no aprimoramento e/ou reformulação do processo de ensino.\'.",
    "d) Os objetivos e os programas de ensino devem estar alinhados com as novas demandas sociais, com as formas de circulação e produção da informação e às reais necessidades dos alunos.",
    "b) Na letra da canção, o eu lírico está ressignificando elementos culturais e artísticos, a partir do questionamento do intercâmbio cultural entre as culturas brasileira e americana, pela integração dos elementos exteriores aos próprios de sua tradição.",
    "e) I. \'O gênero cartum indica um tom crítico, satírico que utiliza o humor para explorar as diferenças de crenças e valores que se refletem em dois dress codes completamente diferentes.\', II. \'A proximidade linguística apresentada nos balões indica a mesma ideologia subjacente às duas culturas: “Nothing/everything covered but her eyes, what a cruel male-dominated culture”.\' e III. \'O processo de interpretação do cartum engloba tanto a linguagem verbal quanto a linguagem não verbal apresentadas, além de um conhecimento enciclopédico de mundo referente às diferenças interculturais inerentes ao discurso apresentado.\'",
    "c) I. \'O professor pode explicitar que entre 1850 e 1890 o Realismo espalhou-se pela Europa e outros continentes tanto nas artes visuais quanto na literatura.\', II. \'O professor pode relacionar a pintura Arrufos, que retrata a discussão de um casal, e o trecho de O Primo Basílio, a fim de retratar em diferentes expressões artísticas a representação objetiva da realidade, ou seja, uma forma de reproduzir a realidade tal como ela é.\' e III.\'O professor pode relacionar Arrufos, uma das primeiras obras brasileiras a romper com a tradição de pinturas históricas e de imagens sagradas e O Primo Basílio, um romance de crítica da sociedade portuguesa cujas falsas bases Eça de Queirós considerava um dever atacar.\'.",
    "a) IV. \'O ensino dos gêneros orais nas escolas brasileiras é negligenciado devido a condições e limitações impostas por muitos contextos.\' e V. \'O ensino baseado em gêneros textuais é eficaz por possibilitar que os alunos se engajem em práticas discursivas diversas.\'.",
    "d) I. \'Os textos permitem a exemplificação de figuras de linguagem, como metáfora e prosopopeia.\', II. \'Os fragmentos podem ser utilizados para a construção de propostas que envolvam o ensino de ortografia e de sintaxe.\' e III. \'Os excertos apresentam a gramática de forma lúdica e permitem a criação de outras histórias sobre classes de palavras, por exemplo.\'.",
    "d) II. \'A relação entre educação e movimentos sociais na educação quilombola objetiva adequar essa organização cultural ao sistema educacional.\' e III. \'O papel da comunidade quilombola é determinante nos processos decisórios acerca da educação escolar a ser nela implementada.\', apenas.",
    "a) As asserções I e II são proposições verdadeiras, e a II é uma justificati va correta da I.",
    "c) I. \'É necessário criar situações em sala de aula que promovam o convívio social entres as crianças, que estimule o respeito às diferenças, promovendo o reconhecimento das suas potencialidades e o desenvolvimento afetivo, cognitivo, linguístico e sociocultural.\', II. \'A Libras deve ser assegurada como a primeira língua da criança surda, considerando-se a Língua Portuguesa, na modalidade escrita, como a segunda.\' e IV. \'A escola deve fomentar parcerias com os pais com o objetivo de acolhê-los e ajudá-los a constituir uma imagem positiva de seu filho surdo, auxiliando-o na compreensão da sua realidade.\'.",
    "c) III. \'Em suas respostas, Andrea e Cíntia expressam a ideia de liderança a partir de um de seus aspectos, o interpessoal, embora outros fatores relevantes interfiram na gestão escolar, como o administrativo e/ou o pedagógico.\' e IV. \'As afirmações das participantes relacionam a liderança a uma capacidade de convencimento e a uma habilidade inata do líder – concepções já ultrapassadas pelas investigações educacionais sobre o tema no cenário contemporâneo.\'.",
    "e) II. \'Ciberdemocracia, democracia informacional e ciberativismo podem ser classificados como movimentos advindos da virtualidade.\', IV. \'Tempo e espaço são conceitos a serem repensados a partir da inserção cada vez maior da virtualidade na vida social.\' e V. \'É papel do educador formar e preparar os alunos para uma atuação responsável e crítica frente à virtualidade, explorando suas potencialidades.\'."
]
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
const respostaCerta = resGabarito[questaoNum - 1];

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
    if(nextQuestionValue + 1 < 36){
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
    }else if(alternativaSelecionada == null){
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
    console.log(nextQ);
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