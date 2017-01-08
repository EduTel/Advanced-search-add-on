 $('.dropdown-toggle').dropdown();
document.addEventListener("DOMContentLoaded", function(event) {
     document.querySelector('#search').addEventListener("submit", function(event){
        event.preventDefault();
        //search("carros",null,"Busquedas","Busquedas_wikipedia");
        info="carros";
        tab="";
        categoria="Busquedas";
        seccion="Busquedas_wikipedia";
        chrome.runtime.sendMessage({funcion: "execute",parametros:[info,tab,categoria,seccion]},function(response) {
          
        });
     });
     chrome.runtime.sendMessage({funcion: "get_menus",parametros:[]},function(response) {
           alert( JSON.stringify(response,null,'\t') );
     });
});
