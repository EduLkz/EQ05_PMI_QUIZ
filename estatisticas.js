const div = document.getElementById("stats");

//Valores das estatisticas para cada questão
const allQuestions = [
    [1, 'e', [0.03, 0.18, 0.48, 0.09, 0.22]],
    [2, 'c', [0.64, 0.08, 0.15, 0.02, 0.11]],
    [3, 'b', [0.55, 0.11, 0.03, 0.05, 0.26]],
    [4, 'b', [0.40, 0.07, 0.03, 0.04, 0.46]],
    [5, 'a', [0.47, 0.27, 0.06, 0.05, 0.15]],
    [6, 'a', [0.50, 0.19, 0.14, 0.06, 0.11]],
    [7, 'c', [0.13, 0.29, 0.04, 0.05, 0.49]],
    [8, 'd', [0.53, 0.05, 0.23, 0.09, 0.1]],
    [9, 'd', [0.39, 0.38, 0.02, 0.11, 0.1]],
    [10, 'a', [0.22, 0.05, 0.19, 0.16, 0.38]],
    [11, 'c', [0.3, 0.08, 0.23, 0.25, 0.14]],
    [12, 'a', [0.32, 0.3, 0.11, 0.09, 0.18]],
    [13, 'b', [0.25, 0.49, 0.06, 0.04, 0.16]],
    [14, 'd', [0.58, 0.14, 0.1, 0.06, 0.12]],
    [15, 'c', [0.12, 0.54, 0.06, 0.07, 0.21]],
    [16, 'c', [0.6, 0.12, 0.16, 0.04, 0.08]],
    [17, 'e', [0.19, 0.49, 0.01, 0.1, 0.21]],
    [18, 'b', [0.27, 0.16, 0.02, 0.2, 0.35]],
    [19, 'd', [0.6, 0.0, 0.01, 0.17, 0.22]],
    [20, 'e', [0.07, 0.5, 0.0, 0.02, 0.41]],
    [21, 'b', [0.64, 0.19, 0.08, 0.01, 0.08]],
    [22, 'a', [0.0, 0.47, 0.28, 0.01, 0.24]],
    [23, 'a', [0.57, 0.06, 0.16, 0.05, 0.16]],
    [24, 'e', [0.32, 0.34, 0.18, 0.03, 0.13]],
    [25, 'd', [0.17, 0.52, 0.16, 0.03, 0.12]],
    [26, 'b', [0.27, 0.02, 0.33, 0.17, 0.21]],
    [27, 'e', [0.61, 0.13, 0.02, 0.13, 0.11]],
    [28, 'c', [0.16, 0.55, 0.13, 0.04, 0.12]],
    [29, 'a', [0.18, 0.26, 0.2, 0.22, 0.14]],
    [30, 'd', [0.15, 0.36, 0.0, 0.05, 0.44]],
    [31, 'd', [0.55, 0.09, 0.02, 0.03, 0.31]],
    [32, 'a', [0.42, 0.11, 0.23, 0.03, 0.21]],
    [33, 'c', [0.61, 0.16, 0.0, 0.08, 0.15]],
    [34, 'c', [0.52, 0.26, 0.1, 0.0, 0.12]],
    [35, 'e', [0.62, 0.22, 0.07, 0.01, 0.08]]
]

//Desenha o graico
function drawGraphs(question){
    var xArray = ["A", "B", "C", "D", "E"];
    var markerColor = [];

    //Define a cor de cada ma das barras
    for (let index = 0; index < 5; index++) {
        markerColor.push('rgb(204, 124, 124)');
    }
   
    var answer = allQuestions[question][1];
	var yArray = allQuestions[question][2];

    //Define a cor da alternativa selecionada
    switch (answer) {
        case 'a':
        default:
            markerColor[0] = 'rgb(124, 204, 124)';
            break;
        case 'b':
            markerColor[1] = 'rgb(124, 204, 124)';
            break;
        case 'c':
            markerColor[2] = 'rgb(124, 204, 124)';
            break;
        case 'd':
            markerColor[3] = 'rgb(124, 204, 124)';
            break;
        case 'e':
            markerColor[4] = 'rgb(124, 204, 124)';
            break;
    }

    //Configuração da tabela
    var layout = {
        title:"<b>TOTAL DE RESPOSTAS POR ALTERNATIVA DA QUESTÃO " + (question + 1) + "</b>",
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: '#e1e1e1',
    };

    //Cria objeto da tabela para criação
    var data = [{
        x:xArray, 
        y:yArray, 
        marker:{
            color:  markerColor,
            opacity: 1,
        },
        type:"bar",
    }];
    
    //Cria a tabela de estatistica
    Plotly.newPlot(div.children[1], data, layout,  {staticPlot: true});
}

drawGraphs(questaoNum - 1);