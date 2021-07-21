
// envia dados para o whatsapp
document.querySelector('#submit').addEventListener('click', function () {
    let combo1 = document.querySelector('#qntdeCombo_1').value;
    let combo2 = document.querySelector('#qntdeCombo_2').value;
    let combo3 = document.querySelector('#qntdeCombo_3').value;
    let cliente = document.querySelector('#nome').value;
    let endereco = document.querySelector('#endereco').value;
    let email = document.querySelector('#email').value;
    let telefone = document.querySelector('#telefone').value;

    let url = "https://api.whatsapp.com/send?phone=5547984674048&text= Controle de Pedidos -->> %0A Nome do Cliente: %0A "
        + cliente + " %0A Endereço do Cliente:%0A" + endereco + "%0A E-mail do Cliente: %0A "
        + email + " %0A Telefone do Cliente%0A " + telefone + " %0A +------------------------+"
        + " %0A COMANDA DE PEDIDOS: %0A " + combo1 + " %0A +------------------------+" + combo2 + " %0A +------------------------+"
        + combo3 + " %0A +------------------------+";

    window.open(url);

});

