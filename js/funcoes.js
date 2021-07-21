var contador = 1;


function executar(acao) {

    //+  -  /  *
    let resultado = 0;
    let numero1 = Number(document.getElementById('primeiroNumero').value);
    let numero2 = Number(document.getElementById('segundoNumero').value);



    switch (acao) {
        case 'somar':
            resultado = somar(numero1, numero2);
            break;
        case 'subtrair':
            resultado = subtrair(numero1, numero2);
            break;
        case 'dividir':
            resultado = dividir(numero1, numero2);
            break;
        case 'multiplicar':
            resultado = multiplicar(numero1, numero2);
            break;
        default:
            alert('vc escolheu algo q n tem como...')
            break;
    }

    let linha = document.createElement('tr');
    linha.setAttribute("id", "hist_"+contador);
    let coluna1 = document.createElement('td');
    coluna1.textContent = acao;
    let coluna2 = document.createElement('td');
    coluna2.textContent = resultado;
    let coluna3 = document.createElement('td');

    let bt_deletar = document.createElement('button');
    bt_deletar.textContent = "X";
    bt_deletar.setAttribute("onclick", "deletar(" + contador + ")");
    coluna3.append(bt_deletar);

    linha.append(coluna1);
    linha.append(coluna2);
    linha.append(coluna3);

    document.getElementById('historico').append(linha);
    contador++;
}
function deletar(numero) {
    let linha = document.getElementById("hist_" + numero);
    linha.remove();
}



function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}
function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}
function dividir(numeroA, numeroB) {
    return numeroA / numeroB;
}
function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}
