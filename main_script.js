function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function search_click(info,tab){
    openInNewTab(info);
    var searchstring = info.selectionText;
    chrome.tabs.create({url: "https://duckduckgo.com/?q=%21translate+"+searchstring});
    //alert(info);
    //console.log("__________________________0");
    //console.log(JSON.stringify(info, null, '\t'));
    //console.log("__________________________1");
}
//chrome.runtime.onInstalled.addListener(function() {
    //_________________________________________________________________________Busquedas
    var Busquedas = chrome.contextMenus.create({"title": "Busquedas"});
    var Busquedas1 = chrome.contextMenus.create({"id": "Busquedas_youtube","title": "Buscar en YouTube", "parentId": Busquedas, "onclick": search_click("https://duckduckgo.com/?q=%21translate+car")});
    var Busquedas2 = chrome.contextMenus.create({"id": "Busquedas_wikipedia","title": "Buscar wikipedia", "parentId": Busquedas, "onclick": search_click("https://duckduckgo.com/?q=%21wes+carros&t=h_")});
    //_________________________________________________________________________Multimedia
    var multimadia = chrome.contextMenus.create({"title": "Multimedia"});
    var multimadia1 = chrome.contextMenus.create({"id": "multimadia_googleImagenes","title": "Imagenes en Google", "parentId": multimadia, "onclick": search_click("https://duckduckgo.com/?q=%21pictures+cars")});
    //_________________________________________________________________________Herramientas
    var Herramientas = chrome.contextMenus.create({"title": "Herramientas"});
    var Herramientas1 = chrome.contextMenus.create({"id": "Herramientas_duckduckgoHash","title": "Buscar Hash", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=hash+4d186321c1a7f0f354b297e8914ab240&t=h_&ia=answer")});
    var Herramientas2 = chrome.contextMenus.create({"id": "Herramientas_googleTraducir","title": "Traducir", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=%21translate+car")});
    //_________________________________________________________________________Capturar eventos de todos los contextMenus
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        alert(JSON.stringify(info,null,"\t"));
        menuItemId=info.menuItemId;
        prefijo=menuItemId;
        if(prefijo=='Busquedas'){
             if (menuItemId == "Busquedas_youtube") {

            }else if(menuItemId == "Busquedas_wikipedia"){

            }else if(menuItemId == "Busquedas_wikipedia"){

            }
        }else if(prefijo=='Multimedia'){
             if (menuItemId == "multimadia_googleImagenes") {

            }else if(menuItemId == "Busquedas_wikipedia"){

            }else if(menuItemId == "Busquedas_wikipedia"){

            }
        }else if(prefijo=='Herramientas'){
            if (menuItemId == "Herramientas_duckduckgoHash") {

            }else if(menuItemId == "Herramientas_googleTraducir"){

            }else if(menuItemId == "Busquedas_wikipedia"){

            }
        }
       
        
    });
//});