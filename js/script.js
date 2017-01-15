document.addEventListener("DOMContentLoaded", function(event) {
     /*conectarse con el background js para hacer las busquedas*/
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
                  $(this).trigger("change");
           });
           $('#menus > div li:not(.dropdown-submenu)').on("click", function(e){
                  //console.log($(this).parent("li"));
                  //if ( $(this).parent("li").children("a > input[type='radio']").length > 0 ) {
                  console.log(this);
                  e.stopPropagation;
                  $(this).find("a > input[type='radio']").attr('checked', true);
                  //}
           });
     });
});
