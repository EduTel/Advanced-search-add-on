document.addEventListener("DOMContentLoaded", function(event) {
     /*conectarse con el background js para hacer las busquedas*/
     document.querySelector('#search').addEventListener("submit", function(event){
        if($(this).text()!=""){
            event.preventDefault();
            info=$("#searchText").val();
            tab="";
            seccion=$("#menus input[type='radio'][name='selected']:checked").parent("a").attr("value");
            chrome.runtime.sendMessage({funcion: "execute",parametros:[info,tab,seccion]},function(response) {
            
            });
        }
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
                  console.log(this);
                  e.stopPropagation;
                  $(this).find("a > input[type='radio']").attr('checked', true);
                  $("#labelSearchText").text($(this).text());
           });
     });
});
