//DECLARAÇÃO DE VARIÁVEIS E FUNÇÕES GLOBAIS
let resultados = document.querySelector('#id_resultados');
let main =  document.querySelector('#id_main');
let i6m = 1.11;
let i12m = 1.18;

function moeda(bufunfa){
    return bufunfa.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
};

function mostraSection(){
    resultados.style.display='inline-block';
};