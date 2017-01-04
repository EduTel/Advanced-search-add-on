var json_menus={
    "idiomas":{
        "es":{
             "Busquedas":{
                        "wikipedia"                 : "wikipedia",
                        "duckduckgoNationalgeograp" : "National Geographic"
                        },
            "Multimedia":{
                        "youtube"            : "YouTube",
                        "googleImagenes"     : "Imagenes en Google",
                        "duckduckgoImagenes" : "Imagenes en Duckduckgo"
            },
            "Herramientas":{
                        "googleTraducir"   : "Traducir",
                        "googleMaps"       : "Google Maps",
                        "duckduckgoQr"     : "Duckduckgo qrcode",
                        "duckduckgoFiglet" : "Duckduckgo Figlet",
                        "Cifrado":{
                                    "Cifrado_duckduckgoHash"   : "Detectar Hash",
                                    "Cifrado_duckduckgoMd5"    : "md5",
                                    "Cifrado_duckduckgosha512" : "sha512",
                                    "Cifrado_duckduckgoSha"    : "Sha",
                                    "Cifrado_duckduckgoSha224" : "Sha224",
                                    "Cifrado_duckduckgoSha256" : "Sha256",
                                    "Cifrado_duckduckgoSha384" : "Sha384"
                        }
            }
        }
    }
};

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function search_click(info,tab){
    //openInNewTab(info);
    //var searchstring = info.selectionText;
    //alert(JSON.stringify(info,null,"\t"));
    chrome.tabs.create({url: info});
}

for(categoria in json_menus["idiomas"]["es"]){
  console.log(categoria);
  let contador_menu1=chrome.contextMenus.create({"title": categoria,contexts:["selection"]});
  for(seccion in json_menus["idiomas"]["es"][categoria]){
    let contador_menu2=chrome.contextMenus.create({"id" :contador_menu1+seccion,"title": json_menus["idiomas"]["es"][categoria][seccion], "parentId": contador_menu1,contexts:["selection"]});
    console.log(seccion);
  }
}
//chrome.runtime.onInstalled.addListener(function() {
    /*
    //_________________________________________________________________________Busquedas
    var Busquedas  = chrome.contextMenus.create({"title": "Busquedas",contexts:["selection"]});
    var Busquedas1 = chrome.contextMenus.create({"id"   : "Busquedas_wikipedia","title": "wikipedia", "parentId": Busquedas,contexts:["selection"]});
    var Busquedas2 = chrome.contextMenus.create({"id"   : "Busquedas_duckduckgoNationalgeograp","title": "National Geographic", "parentId": Busquedas,contexts:["selection"]});
    //_________________________________________________________________________Multimedia
    var multimadia  = chrome.contextMenus.create({"title": "Multimedia",contexts:["selection"]});
    var multimadia1 = chrome.contextMenus.create({"id"   : "Multimedia_youtube","title": "YouTube", "parentId": multimadia,contexts:["selection"]});//,"onclick" : clickHandler
    var multimadia2 = chrome.contextMenus.create({"id"   : "Multimedia_googleImagenes","title": "Imagenes en Google", "parentId": multimadia,contexts:["selection"]});
    var multimadia3 = chrome.contextMenus.create({"id"   : "Multimedia_duckduckgoImagenes","title": "Imagenes en Duckduckgo", "parentId": multimadia,contexts:["selection"]});
    //_________________________________________________________________________Herramientas
    var Herramientas  = chrome.contextMenus.create({"title": "Herramientas",contexts:["selection"]});
    var Herramientas1 = chrome.contextMenus.create({"id"   : "Herramientas_googleTraducir","title": "Traducir", "parentId": Herramientas,contexts:["selection"]});
    var Herramientas2 = chrome.contextMenus.create({"id"   : "Herramientas_googleMaps","title": "Google Maps", "parentId": Herramientas,contexts:["selection"]});
    var Herramientas3 = chrome.contextMenus.create({"id"   : "Herramientas_duckduckgoQr","title": "Duckduckgo qrcode", "parentId": Herramientas,contexts:["selection"]});
    var Herramientas4 = chrome.contextMenus.create({"id"   : "Herramientas_duckduckgoFiglet","title": "Duckduckgo Figlet", "parentId": Herramientas,contexts:["selection"]});
    //_________________________________________________________________________Herramientas Cifrado
    var Cifrado  = chrome.contextMenus.create({"title": "Cifrado",contexts:["selection"], "parentId": Herramientas});
    var Cifrado1 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgoHash","title": "Detectar Hash", "parentId": Cifrado,contexts:["selection"]});
    var Cifrado2 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgoMd5","title": "md5", "parentId": Cifrado,contexts:["selection"]});
    var Cifrado3 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgosha512","title": "sha512", "parentId": Cifrado,contexts:["selection"]});
    var Cifrado4 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgoSha","title": "Sha", "parentId": Cifrado,contexts:["selection"]});
    var Cifrado5 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgoSha224","title": "Sha224", "parentId": Cifrado,contexts:["selection"]});
    var Cifrado6 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgoSha256","title": "Sha256", "parentId": Cifrado,contexts:["selection"]});
    var Cifrado7 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgoSha384","title": "Sha384", "parentId": Cifrado,contexts:["selection"]}); 
    //var Cifrado8 = chrome.contextMenus.create({"id"   : "Cifrado_duckduckgo","title": "md5", "parentId": Cifrado,contexts:["selection"]});
    */
    //_________________________________________________________________________Capturar eventos de todos los contextMenus
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        menuItemId=info.menuItemId;
        prefijo=menuItemId.split('_',1);
        //alert(JSON.stringify(info,null,"\t"));
        //alert(JSON.stringify(prefijo,null,"\t"));
        execute(prefijo,menuItemId);
    });
//});
function execute(categoria,seccion){
    if(categoria=='Busquedas'){
        if(seccion == "Busquedas_wikipedia"){
            search_click("https://duckduckgo.com/?q=%21wes+"+info.selectionText+"&t=h");
        }else if(seccion == "Busquedas_wikipedia"){
            search_click("https://duckduckgo.com/?q=%21translate+"+info.selectionText);
        }else if(seccion == "Busquedas_duckduckgoNationalgeograp"){
            search_click("https://duckduckgo.com/?q=%21natgeo+"+info.selectionText);
        }
    }else if(categoria=='Multimedia'){
        if (seccion == "multimadia_googleImagenes") {
                search_click("https://duckduckgo.com/?q=%21pictures+"+info.selectionText);
        }else if(seccion == "Multimedia_youtube") {
                search_click("https://duckduckgo.com/?q=%21yt+"+info.selectionText+"&t=h_");
        }else if(seccion == "Multimedia_googleImagenes"){
            search_click("https://duckduckgo.com/?q=%21images+"+info.selectionText+"&t=h_");
        }else if(seccion == "Multimedia_duckduckgoImagenes"){
            search_click("https://duckduckgo.com/?q=%21ddgi+"+info.selectionText);
        }
    }else if(categoria=='Herramientas'){
        if(seccion == "Herramientas_googleMaps"){
            search_click("https://duckduckgo.com/?q=%21gmuk+"+info.selectionText);
        }else if(seccion == "Herramientas_duckduckgoQr"){
            search_click("https://duckduckgo.com/?q=qrcode+"+info.selectionText+"&t=h_&ia=answer");
        }else if(seccion == "Herramientas_duckduckgoFiglet"){
            search_click("https://duckduckgo.com/?q=figlet+"+info.selectionText+"&t=h_&ia=answer");
        }
    }else if(categoria=='Cifrado'){
        if (seccion == "Cifrado_duckduckgoHash") {
            search_click("https://duckduckgo.com/?q=hash+"+info.selectionText+"&t=h_&ia=answer");
        }else if (seccion == "Cifrado_duckduckgoMd5") {
            search_click("https://duckduckgo.com/?q=md5+"+info.selectionText+"&t=h_&ia=answer");
        }else if(seccion == "Cifrado_duckduckgosha512"){
            search_click("https://duckduckgo.com/?q=sha512+"+info.selectionText+"&t=h_&ia=answer");
        }else if(seccion == "Cifrado_duckduckgoSha"){
            search_click("https://duckduckgo.com/?q=sha+"+info.selectionText+"&t=h_&ia=answer");
        }else if(seccion == "Cifrado_duckduckgoSha224"){
            search_click("https://duckduckgo.com/?q=sha224+"+info.selectionText+"&t=h_&ia=answer");
        }else if(seccion == "Cifrado_duckduckgoSha256"){
            search_click("https://duckduckgo.com/?q=sha256+"+info.selectionText+"&t=h_&ia=answer");
        }else if(seccion == "Cifrado_duckduckgoSha384"){
            search_click("https://duckduckgo.com/?q=sha384+"+info.selectionText+"&t=h_&ia=answer");
        }
    }
}