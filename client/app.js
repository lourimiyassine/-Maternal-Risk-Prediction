  function onClickedEstimate() {
    console.log("Estimate price button clicked");
    var Age = document.getElementById("Age").value;
    var SystolicBP = document.getElementById("SystolicBP").value;
    var DiastolicBP = document.getElementById("DiastolicBP").value;
    var BS = document.getElementById("BS").value;
    var BodyTemp = document.getElementById("BodyTemp").value;
    var HeartRate = document.getElementById("HeartRate").value;
    var url = "http://127.0.0.1:5000/pred"; 
    $.post(url, {
        Age: Age,
        SystolicBP: SystolicBP,
        DiastolicBP: DiastolicBP,
        BS: BS,
        BodyTemp: BodyTemp,
        HeartRate: HeartRate,
    })
    .done(function(response) {
      // Afficher une alerte rouge personnalisée
      document.getElementById("uiEstimated").innerHTML = "<h2>" + response + "</h2>";
      var alertBox = document.getElementById("customAlert");
      alertBox.innerText = "Résultat : " + response;
      alertBox.style.display = "block";

      // Masquer l'alerte après 3 secondes
      setTimeout(function() {
          alertBox.style.display = "none";
      }, 2000);

  })
  .fail(function(xhr) {
      console.error(xhr);
      var alertBox = document.getElementById("customAlert");
      alertBox.innerText = "Erreur : " + xhr.responseText;
      alertBox.style.display = "block";

      // Masquer l'alerte après 3 secondes
      setTimeout(function() {
          alertBox.style.display = "none";
      }, 2000);
  });
}/*
  var email = document.getElementById("email").value; // Récupérer la valeur de l'input
  var url = "http://127.0.0.1:5000/predict";

  $.post(url, { email: email })
      .done(function(response) {
          // Afficher le résultat dans l'élément avec l'id 'uiEstimated'
          document.getElementById("uiEstimated").innerHTML = "<h2>" + response + "</h2>";
      })
      .fail(function(xhr) {
          // Gérer les erreurs
          console.error(xhr); // Afficher l'objet xhr pour le débogage
          document.getElementById("uiEstimated").innerHTML = "<h2>Erreur: " + xhr.responseText + "</h2>";
      });
}*/