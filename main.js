const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    
    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricaoObs = document.getElementById('descricao');
    const mensagemDeSucesso = `A quantia de <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> conta: <b>${numeroConta.value}</b>`
    
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        nomeBeneficiario.value = ``;  
        numeroConta.value = ``; 
        valorDeposito.value = ``;
        descricaoObs.value = ``;

}
    else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function (e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)
})