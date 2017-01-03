function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function search_click(info,tab){
    //openInNewTab(info);
    //var searchstring = info.selectionText;
    //alert(JSON.stringify(info,null,"\t"));
    chrome.tabs.create({url: info});
    //alert(info);
    //console.log("__________________________0");
    //console.log(JSON.stringify(info, null, '\t'));
    //console.log("__________________________1");
}

//chrome.runtime.onInstalled.addListener(function() {
    //_________________________________________________________________________Busquedas
    var Busquedas  = chrome.contextMenus.create({"title": "Busquedas",contexts:["selection"]});
    var Busquedas1 = chrome.contextMenus.create({"id"   : "Busquedas_youtube","title": "Buscar en YouTube", "parentId": Busquedas,contexts:["selection"]/*,"onclick" : clickHandler*/});
    var Busquedas2 = chrome.contextMenus.create({"id"   : "Busquedas_wikipedia","title": "Buscar wikipedia", "parentId": Busquedas,contexts:["selection"]});
    //_________________________________________________________________________Multimedia
    var multimadia  = chrome.contextMenus.create({"title": "Multimedia",contexts:["selection"]});
    var multimadia1 = chrome.contextMenus.create({"id"   : "Multimedia_googleImagenes","title": "Imagenes en Google", "parentId": multimadia,contexts:["selection"]});
    //_________________________________________________________________________Herramientas
    var Herramientas  = chrome.contextMenus.create({"title": "Herramientas",contexts:["selection"]});
    var Herramientas1 = chrome.contextMenus.create({"id"   : "Herramientas_duckduckgoHash","title": "Buscar Hash", "parentId": Herramientas,contexts:["selection"]});
    var Herramientas2 = chrome.contextMenus.create({"id"   : "Herramientas_googleTraducir","title": "Traducir", "parentId": Herramientas,contexts:["selection"]});
    //_________________________________________________________________________Capturar eventos de todos los contextMenus
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        menuItemId=info.menuItemId;
        prefijo=menuItemId.split('_',1);
        //alert(JSON.stringify(info,null,"\t"));
        //alert(JSON.stringify(prefijo,null,"\t"));
        if(prefijo=='Busquedas'){
            if (menuItemId == "Busquedas_youtube") {
                 search_click("https://duckduckgo.com/?q=%21yt+"+info.selectionText+"&t=h_");
            }else if(menuItemId == "Busquedas_wikipedia"){
                search_click("https://duckduckgo.com/?q=%21wes+"+info.selectionText+"&t=h");
            }else if(menuItemId == "Busquedas_wikipedia"){
                search_click("https://duckduckgo.com/?q=%21translate+"+info.selectionText);
            }
        }else if(prefijo=='Multimedia'){
            if (menuItemId == "multimadia_googleImagenes") {
                 search_click("https://duckduckgo.com/?q=%21pictures+"+info.selectionText);
            }else if(menuItemId == "Busquedas_wikipedia"){
                search_click("https://duckduckgo.com/?q=%21translate+"+info.selectionText);
            }else if(menuItemId == "Busquedas_wikipedia"){
                search_click("https://duckduckgo.com/?q=%21translate+"+info.selectionText);
            }
        }else if(prefijo=='Herramientas'){
            if (menuItemId == "Herramientas_duckduckgoHash") {
                search_click("https://duckduckgo.com/?q=hash+"+info.selectionText+"&t=h_&ia=answer");
            }else if(menuItemId == "Herramientas_googleTraducir"){
                search_click("https://duckduckgo.com/?q=%21translate+"+info.selectionText);
            }else if(menuItemId == "Busquedas_wikipedia"){
                search_click("https://duckduckgo.com/?q=%21translate+"+info.selectionText);
            }
        }
    });
//});