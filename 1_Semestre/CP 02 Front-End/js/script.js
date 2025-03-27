function enviar() {
    nome = document.getElementById("txtNome")
    Rg = document.getElementById("txtRg")
    Cpf = document.getElementById("txtCpf")
    Dtnas = document.getElementById("txtDt")
    sexo = document.getElementById("txtSexo")
    senha = document.getElementById("txtSenha")
    confirSenha = document.getElementById("txtConfSenha")
    if (nome.value == "") {
        alert("Campo obrigatório");
        nome.focus();
        return false;
    }
    if (Cpf.value == "") {
        alert("Campo obrigatório");
        Cpf.focus();
        return false;
    }
    if (Rg.value == "") {
        alert("Campo obrigatório");
        Rg.focus();
        return false;
    }
    if (Dtnas.value == "") {
        alert("Campo obrigatório");
        Dtnas.focus();
        return false;
    }
    if (sexo.value == "") {
        alert("Campo obrigatório");
        sexo.focus();
        return false;
    }
    if (senha.value == "") {
        alert("Campo obrigatório");
        senha.focus();
        return false;
    }
    if (confSenha.value == "") {
        alert("Campo obrigatório");
        confSenha.focus();
        return false;
    }

}

