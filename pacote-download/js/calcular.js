//FUNÇÃO ONCLICK
function calcular(){
    //DECLARAÇÃO DE VARIÁVEIS E FUNÇÕES
    let formulario = document.getElementById('id_formulario');
    let valorForm = formulario.valor.value;
    let entradaForm = formulario.entrada.value;

    let valorp = moeda(parseFloat(valorForm));
    let entradap = moeda(parseFloat(entradaForm));
    let sobrap = (parseFloat(valorForm) - parseFloat(entradaForm));
    let sobra = moeda(sobrap);
    let valor06p = sobrap*i6m;
    let valor06 = moeda(valor06p);
    let valor12p = sobrap*i12m;
    let valor12 = moeda(valor12p);

    function moedaParc(valorParc, parc){
        let parcela = parseFloat(valorParc)/parseFloat(parc);
        return moeda(parcela);
    };
    
    function criarItem(valorParc, parc){
        let itemLista = document.createElement('li');
        if(parc<=9){
            itemLista.innerHTML = `<b>0${parc}x</b> de <span id="moeda">${moedaParc(valorParc, parc)}</span>`;
        }else if(parc>=10){
            itemLista.innerHTML = `<b>${parc}x</b> de <span id="moeda">${moedaParc(valorParc, parc)}</span>`;
        };
        return itemLista;
    };

    function criaLista(valorParc, min, max){
        let lista = document.createElement('ul');
        for(let i=min; i<=max; i++){
            lista.appendChild(criarItem(valorParc, i));
        };
        return lista;
    };

    //REMOVER MAIN ANTERIOR
    main.remove();
    mostraSection();

    //TABLE
    resultados.innerHTML += `<table>
        <tbody>
            <tr>
                <td class="cabecalho" id="valor"><span id="valor">Valor à Vista:<br>${valorp}</span></td>
                <td class="cabecalho" id="operador">-</td>
                <td class="cabecalho" id="entrada"><span id="entrada">Entrada:<br>${entradap}</span></td>
                <td class="cabecalho" id="operador">=</td>
                <td class="cabecalho" id="liquido"><span id="liquido">Valor Líquido:<br>${sobra}</span></td>
            </tr>
        </tbody>
    </table>`;


    //RESULTADOS 6X
    resultados.innerHTML += `<p id=totalParc>TOTAL (02x a 06x): ${valor06}</p>`;
    resultados.appendChild(criaLista(valor06p, 2, 6));
    
    //RESULTADOS 12X
    resultados.innerHTML += `<hr><p id=totalParc>TOTAL (07x a 12x): ${valor12}</p>`;
    resultados.appendChild(criaLista(valor12p, 7, 12));
    

    //BOTÃO VOLTAR
    resultados.innerHTML += `<button id="id_botaovoltar" onclick='location.reload()'>&#x2B05 Voltar</button>`;
};