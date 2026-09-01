function comprar() {

    window.location.href = "checkout.html";

}


/* =========================
   CHAT
========================= */

function abrirChat() {

    document
        .getElementById("chatBox")
        .classList
        .add("aberto");

}


function fecharChat() {

    document
        .getElementById("chatBox")
        .classList
        .remove("aberto");

}


function enviarMensagem() {

    const input =
        document.getElementById("chatInput");

    const mensagens =
        document.getElementById("chatMensagens");

    const texto =
        input.value.trim();


    if (texto === "") {
        return;
    }


    const mensagem =
        document.createElement("div");

    mensagem.className =
        "mensagem usuario";

    mensagem.textContent =
        texto;


    mensagens.appendChild(mensagem);

    input.value = "";

    mensagens.scrollTop =
        mensagens.scrollHeight;

}


function teclaEnviar(event) {

    if (event.key === "Enter") {

        enviarMensagem();

    }

}


/* =========================
   CONTA
========================= */

function abrirConta() {

    document
        .getElementById("contaPainel")
        .classList
        .add("aberto");

    document
        .getElementById("overlay")
        .classList
        .add("aberto");

}


function fecharConta() {

    document
        .getElementById("contaPainel")
        .classList
        .remove("aberto");

    document
        .getElementById("overlay")
        .classList
        .remove("aberto");

}


/* ESC FECHA A CONTA */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            fecharConta();
        }

    }
);


/* =========================
   CADASTRO DEMONSTRATIVO
========================= */

function criarConta(event) {

    event.preventDefault();


    const nome =
        document
            .getElementById("nomeConta")
            .value
            .trim();

    const email =
        document
            .getElementById("emailConta")
            .value
            .trim();

    const senha =
        document
            .getElementById("senhaConta")
            .value;

    const confirmarSenha =
        document
            .getElementById("confirmarSenha")
            .value;


    document.getElementById("erroNome").textContent = "";
    document.getElementById("erroEmail").textContent = "";
    document.getElementById("erroSenha").textContent = "";
    document.getElementById("erroConfirmacao").textContent = "";


    let valido = true;


    if (nome.length < 3) {

        document
            .getElementById("erroNome")
            .textContent =
            "Digite um nome válido.";

        valido = false;

    }


    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailValido.test(email)) {

        document
            .getElementById("erroEmail")
            .textContent =
            "Digite um e-mail válido.";

        valido = false;

    }


    if (senha.length < 6) {

        document
            .getElementById("erroSenha")
            .textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        valido = false;

    }


    if (senha !== confirmarSenha) {

        document
            .getElementById("erroConfirmacao")
            .textContent =
            "As senhas não são iguais.";

        valido = false;

    }


    if (!valido) {
        return;
    }


    alert(
        "Cadastro preenchido corretamente!\n\n" +
        "Esta é apenas uma página demonstrativa. " +
        "A conta não será realmente criada."
    );


    document
        .getElementById("formConta")
        .reset();

}