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

    newCell.innerHTML = "<label>Digite o valor da parcela " + nNumLinha + " </label> " + "<input for=' " + "parcela" + nNumLinha + "' type='number'>";

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

  // Retorna os dados que já foram previamente preenchidos no formulário
  info.getInfoFromProcessVariables().then(function (data) {
    // Somente recupera os dados caso não seja a criação de uma tarefa (somente se estiver tratando a tarefa)
    if (!info.isRequestNew() && Array.isArray(data)) {
      var map = new Map();
      var i;
      for (i = 0; i < data.length; i++) {
        map.set(data[i].key, data[i].value);
      }

      console.log("Carregando Dados", map);
      const nomDes = map.get("nomDes");
      const desMot = map.get("desMot");
      const estDes = map.get("estDes");
      const numCep = map.get("numCep");

      const parcela1 = map.get("parcela1");
      const parcela2 = map.get("parcela2");
      const parcela3 = map.get("parcela3");
      const parcela4 = map.get("parcela4");
      const parcela5 = map.get("parcela5");
      const parcela6 = map.get("parcela6");
      const parcela7 = map.get("parcela7");
      const parcela8 = map.get("parcela8");
      const parcela9 = map.get("parcela9");
      const parcela10 = map.get("parcela10");
      const parcela11 = map.get("parcela11");
      const parcela12 = map.get("parcela12");
      const parcela13 = map.get("parcela13");
      const parcela14 = map.get("parcela14");
      const parcela15 = map.get("parcela15");
      const parcela16 = map.get("parcela16");
      const parcela17 = map.get("parcela17");
      const parcela18 = map.get("parcela18");
      const parcela19 = map.get("parcela19");
      const parcela20 = map.get("parcela20");
      const parcela21 = map.get("parcela21");
      const parcela22 = map.get("parcela22");
      const parcela23 = map.get("parcela23");
      const parcela24 = map.get("parcela24");
      const parcela25 = map.get("parcela25");


      document.getElementById("nomDes").setAttribute("value", nomDes);
      document.getElementById("desMot").setAttribute("value", desMot);
      document.getElementById("estDes").value = estDes;
      document.getElementById("numCep").setAttribute("value", numCep);

      document.getElementById("parcela1").setAttribute("value", parcela1);
      document.getElementById("parcela2").setAttribute("value", parcela2);
      document.getElementById("parcela3").setAttribute("value", parcela3);
      document.getElementById("parcela4").setAttribute("value", parcela4);
      document.getElementById("parcela5").setAttribute("value", parcela5);
      document.getElementById("parcela6").setAttribute("value", parcela6);
      document.getElementById("parcela7").setAttribute("value", parcela7);
      document.getElementById("parcela8").setAttribute("value", parcela8);
      document.getElementById("parcela9").setAttribute("value", parcela9);
      document.getElementById("parcela10").setAttribute("value", parcela10);
      document.getElementById("parcela11").setAttribute("value", parcela11);
      document.getElementById("parcela12").setAttribute("value", parcela12);
      document.getElementById("parcela13").setAttribute("value", parcela13);
      document.getElementById("parcela14").setAttribute("value", parcela14);
      document.getElementById("parcela15").setAttribute("value", parcela15);
      document.getElementById("parcela16").setAttribute("value", parcela16);
      document.getElementById("parcela17").setAttribute("value", parcela17);
      document.getElementById("parcela18").setAttribute("value", parcela18);
      document.getElementById("parcela19").setAttribute("value", parcela19);
      document.getElementById("parcela20").setAttribute("value", parcela20);
      document.getElementById("parcela21").setAttribute("value", parcela21);
      document.getElementById("parcela22").setAttribute("value", parcela22);
      document.getElementById("parcela23").setAttribute("value", parcela23);
      document.getElementById("parcela24").setAttribute("value", parcela24);
      document.getElementById("parcela25").setAttribute("value", parcela25);

    }
  });
}

// Essa função é chamada quando o usuário clicar no botão 'Enviar'
function _saveData(data, info) {
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
  newData.check = document.getElementById("parcela1").value;
  newData.check = document.getElementById("parcela2").value;
  newData.check = document.getElementById("parcela3").value;
  newData.check = document.getElementById("parcela4").value;
  newData.check = document.getElementById("parcela5").value;
  newData.check = document.getElementById("parcela6").value;
  newData.check = document.getElementById("parcela7").value;
  newData.check = document.getElementById("parcela8").value;
  newData.check = document.getElementById("parcela9").value;
  newData.check = document.getElementById("parcela10").value;
  newData.check = document.getElementById("parcela11").value;
  newData.check = document.getElementById("parcela12").value;
  newData.check = document.getElementById("parcela13").value;
  newData.check = document.getElementById("parcela14").value;
  newData.check = document.getElementById("parcela15").value;
  newData.check = document.getElementById("parcela16").value;
  newData.check = document.getElementById("parcela17").value;
  newData.check = document.getElementById("parcela18").value;
  newData.check = document.getElementById("parcela19").value;
  newData.check = document.getElementById("parcela20").value;
  newData.check = document.getElementById("parcela21").value;
  newData.check = document.getElementById("parcela22").value;
  newData.check = document.getElementById("parcela23").value;
  newData.check = document.getElementById("parcel124").value;
  newData.check = document.getElementById("parcela25").value;
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
