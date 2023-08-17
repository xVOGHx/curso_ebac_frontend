const form = document.getElementById("formulario");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = parseFloat(document.getElementById("campoA").value);
    const valorCampoB = parseFloat(document.getElementById("campoB").value);

    const mensagemErro = `O valor de <b>${valorCampoB}</b> não é maior que <b>${valorCampoA}</b>. Tente novamente.`;
    const containerMensagemErro = document.querySelector('.msg-error');

    const mensagemSucesso = `O valor de <b>${valorCampoB}</b> é maior que <b>${valorCampoA}</b>. Você pode continuar.`;
    const containerMensagemSucesso = document.querySelector('.msg-success');

    containerMensagemErro.style.display = 'none';
    containerMensagemSucesso.style.display = 'none';

    if (valorCampoA < valorCampoB) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else if (valorCampoA === valorCampoB) {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});
