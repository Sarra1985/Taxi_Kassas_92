 /* 
$("#adresse1").autocomplete({
  source: function (request, response) {
      $.ajax({
         // url: "https://api-adresse.data.gouv.fr/search/?postcode="+$("input[name='cp']").val(),
         url: "https://api-adresse.data.gouv.fr/search/?label="+$("input[id='adresse1']").val(),
          data: { q: request.term },
          dataType: "json",
          success: function (data) {
              response($.map(data.features, function (item) {
                  return { /*label: item.properties.label,
                               x:item.properties.x,
                               y:item.properties.y,
                               coordinates:features.coordinates,*/
                           /*   value: item.properties.label
                 };
              }
              ));
          }
      });
  }
});

$("#adresse2").autocomplete({
  source: function (request, response) {
      $.ajax({
         // url: "https://api-adresse.data.gouv.fr/search/?postcode="+$("input[name='cp']").val(),
         url: "https://api-adresse.data.gouv.fr/search/?label="+$("input[id='adresse2']").val(),
          data: { q: request.term },
          dataType: "json",
          success: function (data) {
              response($.map(data.features, function (item) {
                  return { //label: item.properties.label,
                              /* x:item.properties.x,
                               y:item.properties.y,
                               coordinates:features.coordinates,*/
                           /*    value: item.properties.label
                 };
              }));
          }
      });
  }
});


// FACULTATIF : Pour l'infobulle bootstrap du champ #adresse
/*$(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  /*
   * Script de gestion de recherche avec l'API adresses.data.gouv.fr
   * 
   */
  
 /* var currentFocus = -1;
  var fetchTrigger = 0;
  
  // Fonction pour mettre en forme visuellement un résultat sélectionné
  function setActive() {
    var nbVal = $("div.address-feedback a").length;
    if (!nbVal)
      return false; // Si on n'a aucun résultat listé, on s'arrête là.
    // On commence par nettoyer une éventuelle sélection précédente
    $('div.address-feedback a').removeClass("active");
  
    // Bidouille mathématique pour contraindre le focus dans la plage du nombre de résultats
    currentFocus = ((currentFocus + nbVal - 1) % nbVal) + 1;
  
    $('div.address-feedback a:nth-child(' + currentFocus + ')').addClass("active");
  }
  
  // Au clic sur une adresse suggérée, on ventile l'adresse dans les champs appropriés. On espionne mousedown plutôt que click pour l'attraper avant la perte de focus du champ adresse.
  $('div.address-feedback').on("mousedown", "a", function(event) {
    // Stop la propagation par défaut
    event.preventDefault();
    event.stopPropagation();
  
    $("#adresse").val($(this).attr("data-name"));
   // $("#cp").val($(this).attr("data-postcode"));
   // $("#ville").val($(this).attr("data-city"));
  
    $('.address-feedback').empty();
  });
  
  // On espionne le clavier dans le champ adresse pour déclencher les actions qui vont bien
  $("#adresse").keyup(function(event) {
    // Stop la propagation par défaut
    event.preventDefault();
    event.stopPropagation();
  
    if (event.keyCode === 38) { // Flèche HAUT
      currentFocus--;
      setActive();
      return false;
    } else if (event.keyCode === 40) { // Flèche BAS
      currentFocus++;
      setActive();
      return false;
    } else if (event.keyCode === 13) { // Touche ENTREE
      if (currentFocus > 0) {
        // On simule un clic sur l'élément actif
        $("div.address-feedback a:nth-child(" + currentFocus + ")").mousedown();
      }
      return false;
    }
  
    // Si on arrive ici c'est que l'user a avancé dans la saisie : on réinitialise le curseur de sélection.
    $('div.address-feedback a').removeClass("active");
    currentFocus = 0;
  
    // On annule une éventuelle précédente requête en attente
    clearTimeout(fetchTrigger);
  
    // Si le champ adresse est vide, on nettoie la liste des suggestions et on ne lance pas de requête.
    let rue = $("#adresse").val();
    if (rue.length === 0) {
      $('.address-feedback').empty();
      return false;
    }
  
    // On lance une minuterie pour une requête vers l'API.
    fetchTrigger = setTimeout(function() {
      // On lance la requête sur l'API
      $.get('https://api-adresse.data.gouv.fr/search/', {
        q: rue,
        limit: 15,
        autocomplete: 1
      }, function(data, status, xhr) {
        let liste = "";
        $.each(data.features, function(i, obj) {
          // données phase 1 (obj.properties.label) & phase 2 : name, postcode, city
          // J'ajoute chaque élément dans une liste
          let cooladdress = obj.properties.label ;
          liste += '<a class="list-group-item list-group-item-action py-1" href="#" name="' + obj.properties.label + '" data-name="' + obj.properties.label + '">' + cooladdress + '</a>';
        });
        $('.address-feedback').html(liste);
      }, 'json');
    }, 500);
  });
  
  // On cache la liste si le champ adresse perd le focus
  $("#adresse").focusout(function() {
    $('.address-feedback').empty();
  });
  
  // On annule le comportement par défaut des touches entrée et flèches si une liste de suggestion d'adresses est affichée
  $("#adresse").keydown(function(e) {
    if ($("div.address-feedback a").length > 0 && (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13)) {
      e.preventDefault();
    }
  });











 // FACULTATIF : Pour l'infobulle bootstrap du champ #adresse
$(function() {
    $('[data-toggle="tooltip1"]').tooltip()
  })
  
  /*
   * Script de gestion de recherche avec l'API adresses.data.gouv.fr
   * 
   */
  
  /*var currentFocus1 = -1;
  var fetchTrigger1 = 0;
  
  // Fonction pour mettre en forme visuellement un résultat sélectionné
  function setActive1() {
    var nbVal1 = $("div.address-feedback1 a").length;
    if (!nbVal1)
      return false; // Si on n'a aucun résultat listé, on s'arrête là.
    // On commence par nettoyer une éventuelle sélection précédente
    $('div.address-feedback1 a').removeClass("active");
  
    // Bidouille mathématique pour contraindre le focus dans la plage du nombre de résultats
    currentFocus1 = ((currentFocus1 + nbVal1 - 1) % nbVal1) + 1;
  
    $('div.address-feedback1 a:nth-child(' + currentFocus1 + ')').addClass("active");
  }
  
  // Au clic sur une adresse suggérée, on ventile l'adresse dans les champs appropriés. On espionne mousedown plutôt que click pour l'attraper avant la perte de focus du champ adresse.
  $('div.address-feedback1').on("mousedown", "a", function(event) {
    // Stop la propagation par défaut
    event.preventDefault();
    event.stopPropagation();
  
    $("#adresse1").val($(this).attr("data-name"));
    //$("#cp").val($(this).attr("data-postcode"));
   // $("#ville").val($(this).attr("data-city"));
  
    $('.address-feedback1').empty();
  });
  
  // On espionne le clavier dans le champ adresse pour déclencher les actions qui vont bien
  $("#adresse1").keyup(function(event) {
    // Stop la propagation par défaut
    event.preventDefault();
    event.stopPropagation();
  
    if (event.keyCode === 38) { // Flèche HAUT
      currentFocus1--;
      setActive1();
      return false;
    } else if (event.keyCode === 40) { // Flèche BAS
      currentFocus1++;
      setActive1();
      return false;
    } else if (event.keyCode === 13) { // Touche ENTREE
      if (currentFocus1 > 0) {
        // On simule un clic sur l'élément actif
        $("div.address-feedback1 a:nth-child(" + currentFocus1 + ")").mousedown();
      }
      return false;
    }
  
    // Si on arrive ici c'est que l'user a avancé dans la saisie : on réinitialise le curseur de sélection.
    $('div.address-feedback1 a').removeClass("active");
    currentFocus1 = 0;
  
    // On annule une éventuelle précédente requête en attente
    clearTimeout(fetchTrigger1);
  
    // Si le champ adresse est vide, on nettoie la liste des suggestions et on ne lance pas de requête.
    let rue1 = $("#adresse1").val();
    if (rue1.length === 0) {
      $('.address-feedback1').empty();
      return false;
    }
  
    // On lance une minuterie pour une requête vers l'API.
    fetchTrigger1 = setTimeout(function() {
      // On lance la requête sur l'API
      $.get('https://api-adresse.data.gouv.fr/search/', {
        q: rue1,
        limit: 15,
        autocomplete: 1
      }, function(data, status, xhr) {
        let liste1 = "";
        $.each(data.features, function(i, obj) {
          // données phase 1 (obj.properties.label) & phase 2 : name, postcode, city
          // J'ajoute chaque élément dans une liste
          let cooladdress1 = obj.properties.label ;
          liste1 += '<a class="list-group-item list-group-item-action py-1" href="#" name="' + obj.properties.label + '" data-name="' + obj.properties.label + '">' + cooladdress1 + '</a>';
        });
        $('.address-feedback1').html(liste1);
      }, 'json');
    }, 500);
  });
  
  // On cache la liste si le champ adresse perd le focus
  $("#adresse1").focusout(function() {
    $('.address-feedback1').empty();
  });
  
  // On annule le comportement par défaut des touches entrée et flèches si une liste de suggestion d'adresses est affichée
  $("#adresse1").keydown(function(e) {
    if ($("div.address-feedback1 a").length > 0 && (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13)) {
      e.preventDefault();
    }
  }); */

  /*

   <form id="modal_form" enctype="multipart/form-data" action="./ReservationContoller.php" method="post">
                                   <div class="form-row">
                                       <div class="form-group col">
                                           <label for="adresse" class="control-label">Adresse de depart</label>
                                           <input type="text" class="form-control" id="adresse" name="adresse" autocomplete="off" data-toggle="tooltip"  data-placement="top" title="Ce champ est intelligent... essaie d'y taper à peu près n'importequoi, par exemple : barry 65150 ;)"   />
                                              <div class="address-feedback position-absolute list-group"   style="z-index:1100;">
                                              </div>
                                       </div>
                                       <div class="form-group col">
                                          <label for="adresse1" class="control-label">Adresse d'arrivée </label>
                                          <input type="text" class="form-control" id="adresse1" name="adresse1" autocomplete="off"   data-toggle="tooltip1"  data-placement="top" title="Ce champ est intelligent... essaie d'y taper à peu près n'importequoi, par exemple : barry 65150 ;)"   />
                                       <div class="address-feedback1 position-absolute list-group" style="z-index:1100;">
                                       </div>
                                   </div>
                                </div>  -->
   <!-- <div class="form-row">
      <div class="form-group col-sm-3">
        <label for="cp" class="control-label">Code Postal</label>
        <input type="text" class="form-control" id="cp" name="cp" />
      </div>
      <div class="form-group col-sm-6">
        <label for="ville">Ville</label>
        <input type="text" class="form-control" id="ville" name="ville" required />
      </div>
      <div class="form-group col-sm-3">
        <label for="pays">Pays</label>
        <input type="text" class="form-control" id="pays" name="pays" />
      </div>

    </div>-->
  <!--</form>
</div>-->
                        <!--
                        <input class="form-control" name="adresse1" id="adresse1" type="text" placeholder="Adresse Depart" autocomplete="off" data-toggle="tooltip" data-placement="top"  /> 
                        <input class="form-control" name="adresse2" id="adresse2" type="text" placeholder="Adresse Arrivée"/> -->
*/
