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
                                    "duckduckgoHash"   : "Detectar Hash",
                                    "duckduckgoMd5"    : "md5",
                                    "duckduckgosha512" : "sha512",
                                    "duckduckgoSha"    : "Sha",
                                    "duckduckgoSha224" : "Sha224",
                                    "duckduckgoSha256" : "Sha256",
                                    "duckduckgoSha384" : "Sha384"
                        }
            }
        },
        "en":{
             "Busquedas":{
                        "wikipedia"                 : "wikipedia",
                        "duckduckgoNationalgeograp" : "National Geographic"
                        },
            "Multimedia":{
                        "youtube"            : "YouTube",
                        "googleImagenes"     : "Google Images",
                        "duckduckgoImagenes" : "Images Duckduckgo"
            },
            "Herramientas":{
                        "googleTraducir"   : "Translate",
                        "googleMaps"       : "Google Maps",
                        "duckduckgoQr"     : "Duckduckgo qrcode",
                        "duckduckgoFiglet" : "Duckduckgo Figlet",
                        "Cifrado":{
                                    "duckduckgoHash"   : "Detectar Hash",
                                    "duckduckgoMd5"    : "md5",
                                    "duckduckgosha512" : "sha512",
                                    "duckduckgoSha"    : "Sha",
                                    "duckduckgoSha224" : "Sha224",
                                    "duckduckgoSha256" : "Sha256",
                                    "duckduckgoSha384" : "Sha384"
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
  for(seccion1 in json_menus["idiomas"]["es"][categoria]){
    if( typeof json_menus["idiomas"]["es"][categoria][seccion1] === 'object' ){
        let contador_menu3=chrome.contextMenus.create({"id" :categoria+"_"+seccion1,"title": seccion1, "parentId": contador_menu1,contexts:["selection"]});
        for(seccion2 in json_menus["idiomas"]["es"][categoria][seccion1]){
            let contador_menu4=chrome.contextMenus.create({"id" :seccion1+"_"+seccion2,"title": json_menus["idiomas"]["es"][categoria][seccion1][seccion2], "parentId": contador_menu3,contexts:["selection"]});
        }
    }else{
        let contador_menu2=chrome.contextMenus.create({"id" :categoria+"_"+seccion1,"title": json_menus["idiomas"]["es"][categoria][seccion1], "parentId": contador_menu1,contexts:["selection"]});
        console.log(seccion1);
    }
  }
}
//chrome.runtime.onInstalled.addListener(function() {
    //_________________________________________________________________________Capturar eventos de todos los contextMenus
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        menuItemId=info.menuItemId;
        prefijo=menuItemId.split('_',1);
        //alert(JSON.stringify(info,null,"\t"));
        //alert(JSON.stringify(prefijo,null,"\t"));
        execute(info,tab,prefijo,menuItemId);
    });
//});
function execute(info,tab,categoria,seccion){
    if(info.hasOwnProperty('selectionText')){
        info=info.selectionText;
    }
    //window.views = chrome.extension.getViews();
    //alert(JSON.stringify(views,null,'\t')  );
    //views.search(info,tab,categoria,seccion);
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.greeting == "hello"){
            sendResponse({msg: "goodbye!"});
        }
    });
}
