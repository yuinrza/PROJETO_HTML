
function validarT() {
    var nome = formuser.nome.value;
    //var email = formuser.email.value;
    //var senha = formuser.senha.value;
    
    if(nome == ""){
        alert('Preencha o campo nome.');
        formuser.nome.focus();
        return false;
    }
    
        if(email == "" || email.indexOf('@') == -1){
        alert('Preencha o campo E-mail.');
        formuser.email.focus();
        return false;
    }
    
       
};

//------- API CEP -----

$(function(){

    $("#buscar_cep").click(function(){
    
      //Nova variável "cep" somente com dígitos.
      var cep = $("#cep").val().replace(/\D/g, '');
  
      //Verifica se campo cep possui valor informado.
      if (cep != "") {
  
          //Expressão regular para validar o CEP.
          var validacep = /^[0-9]{8}$/;
  
          //Valida o formato do CEP.
          if(validacep.test(cep)) {
  
           //Consulta o webservice viacep.com.br/
          $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
  
                  if (!("erro" in dados)) {
                      //Atualiza os campos com os valores da consulta.
                      $("#rua").val(dados.logradouro);
                      $("#bairro").val(dados.bairro);
                      $("#cidade").val(dados.localidade);
                      $("#uf").val(dados.uf);
                  } //end if.
                  else {
                      //CEP pesquisado não foi encontrado.
                      console.log("CEP não encontrado.");
                  }
              });
          } //end if.
          else {
              console.log("Formato de CEP inválido.");
          }
      } //end if.
    });
  });

 