
function validar(){
    
    var nomeEl = document.getElementById("txtNome");
    var rgEl = document.getElementById("txtRG");
    var cpfEl = document.getElementById("txtCPF");
    var senhaEl = document.getElementById("txtSenha");
    var confSenhaEl = document.getElementById("txtConfSenha");
    var rdoMascEl = document.getElementById('sexoM');
    var rdoFemEl = document.getElementById('sexoF');
    var rdoOutroEl = document.getElementById('sexoO');

    if(nomeEl.value == ""){
        alert("Preencha o campo nome");
        nomeEl.focus();
        return false;
    }
    if(rgEl.value == ""){
        alert("Preencha o campo RG");
        rgEl.focus();
        return false;
    }
    if(cpfEl.value == ""){
        alert("Preencha o campo CPF");
        cpfEl.focus();
        return false;
    }

    if((senhaEl.value == "") || (confSenhaEl.value == "")){
        alert("Preencha os campos senha e confirmação de senha");
        senhaEl.focus();
    }
    else{
        if(senhaEl.value != confSenhaEl.value){
            alert("As senhas não conferem");
        }
    }

    if(!rdoFemEl.checked && !rdoMascEl.checked && !rdoOutroEl.checked){
        alert("Selecione o sexo")
    }


}