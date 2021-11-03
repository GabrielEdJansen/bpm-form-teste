function inserirLinhaTabela() {

  // Captura a referência da tabela com id “minhaTabela”
  var table = document.getElementById("minhaTabela");
  // Captura a quantidade de linhas já existentes na tabela
  var numOfRows = table.rows.length;
  // Captura a quantidade de colunas da última linha da tabela
  var numOfCols = table.rows[numOfRows - 1].cells.length;

  var nNumLinha;
  nNumLinha = numOfRows + 1;

  if (nNumLinha <= 25) {
    // Insere uma linha no fim da tabela.
    var newRow = table.insertRow(numOfRows);

    // Faz um loop para criar as colunas
    for (var j = 0; j < numOfCols; j++) {
      // Insere uma coluna na nova linha 
      newCell = newRow.insertCell(j);
      // Insere um conteúdo na coluna
    }

    newCell.innerHTML = "<label  for= '" + "parcela" + nNumLinha +"' class='form-label'>Digite o valor da parcela " + nNumLinha + " </label> " + "<input id='" + "parcela" + nNumLinha + "' type='text' class='form-control'>";
    
    //var input = document.querySelector("#parcela1");
    //if(input.value != 0){
     // alert(input.value);
    //}
    
    alert('teste2');

  } if (nNumLinha > 25) {
    alert("O Número máximo de parcelas é 25")
  }
}


//Inicialização da API do workflow
this.workflowCockpit = workflowCockpit({
  init: _init,
  onSubmit: _saveData,
  onError: _rollback,
});

// Função init é chamada ao abrir o formulário
function _init(data, info) {

  // Caso seja executado algum serviço externo ao abrir o formulário e o retorno dele seja atribuído a variáveis de execução
  // essas variáveis serão preenchidas
  const { initialVariables } = data.loadContext;
  console.log(initialVariables);

  info
    .getUserData()
    .then(function (user) {
      // Usuário logado
      document.getElementById("nomFun").setAttribute("value", user.fullname);
      document.getElementById("emaFun").setAttribute("value", user.email);
    })
    .then(function () {
      info.getPlatformData().then(function (platformData) {
        // Informações da G7
        console.log(platformData);
      });
    });
}

// Essa função é chamada quando o usuário clicar no botão 'Enviar'
function _saveData(data, info) {
  var input2 = document.querySelector("#parcela2");
  if (!isFormValid()) {
    document.getElementById("gridCheck").setAttribute("class", "form-check-input is-invalid");
    throw new Error("Os dados informados não são válidos.");
  }
  let newData = {};
  let selectEstado = document.getElementById("estDes");

  newData.desMot = document.getElementById("desMot").value;
  newData.nomDes = document.getElementById("nomDes").value;
  newData.estDes = selectEstado.options[selectEstado.selectedIndex].value;
  newData.numCep = document.getElementById("numCep").value;
  newData.check = document.getElementById("gridCheck").value;


    newData.parcela1 = document.getElementById("parcela1").value;
 
  
    if(input.input2 != 0){
    newData.parcela2 = document.getElementById("parcela2").value;
    }

  /*newData.parcela3 = document.getElementById("parcela3").value;
  newData.parcela4 = document.getElementById("parcela4").value;
  newData.parcela5 = document.getElementById("parcela5").value;
  newData.parcela6 = document.getElementById("parcela6").value;
  newData.parcela7 = document.getElementById("parcela7").value;
  newData.parcela8 = document.getElementById("parcela8").value;
  newData.parcela9 = document.getElementById("parcela9").value;
  newData.parcela10 = document.getElementById("parcela10").value;
  newData.parcela11 = document.getElementById("parcela11").value;
  newData.parcela12 = document.getElementById("parcela12").value;
  newData.parcela13  = document.getElementById("parcela13").value;
  newData.parcela14 = document.getElementById("parcela14").value;
  newData.parcela15 = document.getElementById("parcela15").value;
  newData.parcela16 = document.getElementById("parcela16").value;
  newData.parcela17 = document.getElementById("parcela17").value;
  newData.parcela18 = document.getElementById("parcela18").value;
  newData.parcela19 = document.getElementById("parcela19").value;
  newData.parcela20 = document.getElementById("parcela20").value;
  newData.parcela21 = document.getElementById("parcela21").value;
  newData.parcela22 = document.getElementById("parcela22").value;
  newData.parcela23 = document.getElementById("parcela23").value;
  newData.parcela24 = document.getElementById("parcel124").value;
  newData.parcela25 = document.getElementById("parcela25").value;*/
  console.log(newData);
  return {
    formData: newData,
  };
}

function _rollback(data, info) {
  /*data: ({
       error: obj
       processInstanceId: int
    })*/
}

function isFormValid() {
  const isChecked = document.getElementById("gridCheck").checked;
  return isChecked;
}

// Handler de eventos do checkbox
function onSelect() {
  const isChecked = document.getElementById("gridCheck").checked;
  if (isChecked) {
    document.getElementById("gridCheck").setAttribute("class", "form-check-input is-valid");
  } else {
    document.getElementById("gridCheck").setAttribute("class", "form-check-input is-invalid");
  }
}

// Disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
