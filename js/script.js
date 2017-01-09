 $('.dropdown-toggle').dropdown();
document.addEventListener("DOMContentLoaded", function(event) {
     $('.dropdown-submenu a.test').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
     });
     document.querySelector('#search').addEventListener("submit", function(event){
        event.preventDefault();
        info="carros";
        tab="";
        categoria="Busquedas";WW
        seccion="Busquedas_wikipedia";
        chrome.runtime.sendMessage({funcion: "execute",parametros:[info,tab,categoria,seccion]},function(response) {
          
        });
     });
     chrome.runtime.sendMessage({funcion: "get_menus",parametros:[]},function(response) {
           document.querySelector('#menus').innerHTML = response.return;
           //alert( JSON.stringify(response,null,'\t') );
     });
});
