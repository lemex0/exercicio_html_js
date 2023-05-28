function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
    var mensagem = document.getElementById("mensagem");

    if (campoB <= campoA) {
        mensagem.innerHTML = "Formulário inválido: o Formulario B deve ser maior que o formulario A.";
        mensagem.className = "mensagem negativa";
        return false; // Impede o envio do formulário
    } else {
        mensagem.innerHTML = "Formulário válido!";
        mensagem.className = "mensagem positiva";
        return true; // Permite o envio do formulário
    }
}