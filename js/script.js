document.addEventListener("DOMContentLoaded", function(event) {
     
     document.querySelector('#search').addEventListener("submit", function(event){
        event.preventDefault();
        info="carros";
        tab="";
        categoria="Busquedas";
        seccion="Busquedas_wikipedia";
        chrome.runtime.sendMessage({funcion: "execute",parametros:[info,tab,categoria,seccion]},function(response) {
          
        });
     });
     chrome.runtime.sendMessage({funcion: "get_menus",parametros:[]},function(response) {
           document.querySelector('#menus').innerHTML = response.return;
           $('.dropdown-toggle').dropdown();
           $('html .dropdown-submenu a.test').on("click", function(e){
                  $(this).next('ul').toggle();
                  e.stopPropagation();
                  e.preventDefault();
           });
           //alert( JSON.stringify(response,null,'\t') );
     });
});
