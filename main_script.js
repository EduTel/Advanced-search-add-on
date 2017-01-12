var json_menus={
    "idiomas":{
        "es":{
             "Busquedas":{
                        "wikipedia"                 : {"wikipedia":"Busquedas_wikipedia"},
                        "duckduckgoNationalgeograp" : {"National Geographic": "Busquedas_duckduckgoNationalgeograp"}
                        },
            "Multimedia":{
                        "youtube"            : {"YouTube":"Multimedia_youtube"},
                        "googleImagenes"     : {"Imagenes en Google":"multimadia_googleImagenes"},
                        "duckduckgoImagenes" : {"Imagenes en Duckduckgo":"Multimedia_duckduckgoImagenes"}
            },
            "Herramientas":{
                        "googleTraducir"   : {"Traducir":"Herramientas_TraducirGoogle"},
                        "googleMaps"       : {"Google Maps":"Herramientas_googleMaps"},
                        "duckduckgoQr"     : {"Duckduckgo qrcode":"Herramientas_duckduckgoQr"},
                        "duckduckgoFiglet" : {"Duckduckgo Figlet":"Herramientas_duckduckgoFiglet"},
                        "Cifrado":{
                                    "duckduckgoHash"   : {"Detectar Hash":"Cifrado_duckduckgoHash"},
                                    "duckduckgoMd5"    : {"md5":"Cifrado_duckduckgoMd5"},
                                    "duckduckgosha512" : {"sha512":"Cifrado_duckduckgoSha"},
                                    "duckduckgoSha"    : {"Sha":"Cifrado_duckduckgoSha"},
                                    "duckduckgoSha224" :{ "Sha224":"Cifrado_duckduckgoSha224"},
                                    "duckduckgoSha256" : {"Sha256":"Cifrado_duckduckgoSha256"},
                                    "duckduckgoSha384" : {"Sha384":"Cifrado_duckduckgoSha384"}
                        }
            }
        },
        "en":{
             "Search":{
                        "wikipedia"                 : {"wikipedia":"Busquedas_wikipedia"},
                        "duckduckgoNationalgeograp" : {"National Geographic":"Busquedas_duckduckgoNationalgeograp"}
                        },
            "Multimedia":{
                        "youtube"            : {"YouTube":"Multimedia_youtube"},
                        "googleImagenes"     : {"Google Images":"multimadia_googleImagenes"},
                        "duckduckgoImagenes" : {"Images Duckduckgo":"Multimedia_duckduckgoImagenes"}
            },
            "Tools":{
                        "googleTraducir"   : {"Translate":"Herramientas_TraducirGoogle"},
                        "googleMaps"       : {"Google Maps":"Herramientas_googleMaps"},
                        "duckduckgoQr"     : {"Duckduckgo qrcode":"Herramientas_duckduckgoQr"},
                        "duckduckgoFiglet" : {"Duckduckgo Figlet":"Herramientas_duckduckgoFiglet"},
                        "Cifrado":{
                                    "duckduckgoHash"   : {"Detect Hash":"Cifrado_duckduckgoHash"},
                                    "duckduckgoMd5"    : {"md5":"Cifrado_duckduckgoMd5"},
                                    "duckduckgosha512" : {"sha512":"Cifrado_duckduckgosha512"},
                                    "duckduckgoSha"    : {"Sha":"Cifrado_duckduckgoSha"},
                                    "duckduckgoSha224" : {"Sha224":"Cifrado_duckduckgoSha224"},
                                    "duckduckgoSha256" : {"Sha256":"Cifrado_duckduckgoSha256"},
                                    "duckduckgoSha384" : {"Sha384":"Cifrado_duckduckgoSha384"}
                        }
            }
        }
    }
};
function get_language() {
    languaje=window.navigator.language||navigator.browserLanguage;
    return languaje.substring(0, 2);
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function search_click(info,tab){
    chrome.tabs.create({url: info});
}
console.log("lenguaje______________"+get_language()+"________________");
var idioma_get=get_language();
for(categoria in json_menus["idiomas"][idioma_get]){
  console.log(categoria);
  let contador_menu1=chrome.contextMenus.create({"title": categoria,contexts:["selection"]});
  for(seccion1 in json_menus["idiomas"][idioma_get)][categoria]){
    if( typeof json_menus["idiomas"]["es"][categoria][seccion1] === 'object' ){
        //let contador_menu3=chrome.contextMenus.create({"id" :categoria+"_"+seccion1,"title": seccion1, "parentId": contador_menu1,contexts:["selection"]});
        //for(seccion2 in json_menus["idiomas"]["es"][categoria][seccion1]){
        //    let contador_menu4=chrome.contextMenus.create({"id" :seccion1+"_"+seccion2,"title": json_menus["idiomas"]["es"][categoria][seccion1][seccion2], "parentId": contador_menu3,contexts:["selection"]});
        //}
    }else{
        //for(seccion2 in json_menus["idiomas"]["es"][categoria][seccion1]){  
        //}
        let contador_menu2=chrome.contextMenus.create({"id" :categoria+"_"+seccion1,"title": json_menus["idiomas"]["es"][categoria][seccion1], "parentId": contador_menu1,contexts:["selection"]});
        console.warn("___\t"+json_menus["idiomas"]["es"][categoria][seccion1]+"___\t")
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
    if(seccion == "Busquedas_wikipedia"){
        search_click("https://duckduckgo.com/?q=%21wes+"+info+"&t=h");
    }else if(seccion == "Busquedas_wikipedia"){
        search_click("https://duckduckgo.com/?q=%21translate+"+info);
    }else if(seccion == "Busquedas_duckduckgoNationalgeograp"){
        search_click("https://duckduckgo.com/?q=%21natgeo+"+info);
    }else if (seccion == "multimadia_googleImagenes") {
            search_click("https://duckduckgo.com/?q=%21pictures+"+info);
    }else if(seccion == "Multimedia_youtube") {
            search_click("https://duckduckgo.com/?q=%21yt+"+info+"&t=h_");
    }else if(seccion == "Multimedia_googleImagenes"){
        search_click("https://duckduckgo.com/?q=%21images+"+info+"&t=h_");
    }else if(seccion == "Multimedia_duckduckgoImagenes"){
        search_click("https://duckduckgo.com/?q=%21ddgi+"+info);
    }else if(seccion == "Herramientas_TraducirGoogle"){
            search_click("https://duckduckgo.com/?q=%21gmuk+"+info);
    }else if(seccion == "Herramientas_googleMaps"){
        search_click("https://duckduckgo.com/?q=%21gmuk+"+info);
    }else if(seccion == "Herramientas_duckduckgoQr"){
        search_click("https://duckduckgo.com/?q=qrcode+"+info+"&t=h_&ia=answer");
    }else if(seccion == "Herramientas_duckduckgoFiglet"){
        search_click("https://duckduckgo.com/?q=figlet+"+info+"&t=h_&ia=answer");
    }else if (seccion == "Cifrado_duckduckgoHash") {
        search_click("https://duckduckgo.com/?q=hash+"+info+"&t=h_&ia=answer");
    }else if (seccion == "Cifrado_duckduckgoMd5") {
        search_click("https://duckduckgo.com/?q=md5+"+info+"&t=h_&ia=answer");
    }else if(seccion == "Cifrado_duckduckgosha512"){
        search_click("https://duckduckgo.com/?q=sha512+"+info+"&t=h_&ia=answer");
    }else if(seccion == "Cifrado_duckduckgoSha"){
        search_click("https://duckduckgo.com/?q=sha+"+info+"&t=h_&ia=answer");
    }else if(seccion == "Cifrado_duckduckgoSha224"){
        search_click("https://duckduckgo.com/?q=sha224+"+info+"&t=h_&ia=answer");
    }else if(seccion == "Cifrado_duckduckgoSha256"){
        search_click("https://duckduckgo.com/?q=sha256+"+info+"&t=h_&ia=answer");
    }else if(seccion == "Cifrado_duckduckgoSha384"){
        search_click("https://duckduckgo.com/?q=sha384+"+info+"&t=h_&ia=answer");
    }
}
function get_menus(){
    html_menu=`<div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Seleccionar<span class="caret"></span></button>
                    <ul class="dropdown-menu">`;
                    let contador2=0;
                    let contador3=0;
                    for(categoria in json_menus["idiomas"][get_language()]){
                        html1=`<li><a value="${categoria}">${categoria}</a></li>`;
                        for(seccion1 in json_menus["idiomas"]["es"][categoria]){
                            if(contador2==0){
                                  html_menu+=`<li class="dropdown-submenu">
                                            <a class="test">${categoria}<span class="caret"></span></a>
                                            <ul class="dropdown-menu">`;
                            }
                                            if( typeof json_menus["idiomas"]["es"][categoria][seccion1] === 'object' ){
                                                if(contador2==0){
                                                    html_menu+=`<li class="dropdown-submenu">
                                                                    <a class="test" value="${categoria+"_"+seccion1}">${seccion1} <span class="caret"></span></a>
                                                                    <ul class="dropdown-menu">`;
                                                }
                                                for(seccion2 in json_menus["idiomas"]["es"][categoria][seccion1]){
                                                     if(contador3==0){
                                                        html_menu+=`<li class="dropdown-submenu">
                                                                    <a class="test">${seccion1}<span class="caret"></span></a>
                                                                    <ul class="dropdown-menu">`;
                                                    }
                                                    html_menu+=`<li><a values="${seccion1+"_"+seccion2}">${json_menus["idiomas"]["es"][categoria][seccion1][seccion2]}</a></li>`;
                                                    contador3++;
                                                }
                                                if(contador3==0){
                                                    html_menu+=html2;
                                                }else{
                                                    html_menu+=` 
                                                                    </ul>
                                                                </li>`;
                                                }
                                                contador3=0;
                                                
                                            }else{
                                                html_menu+=`<li><a values="${categoria+"_"+seccion1}">${json_menus["idiomas"]["es"][categoria][seccion1]}</a></li>`;
                                            }
                            contador2++;
                        }
                        if(contador2==0){
                            html_menu+=html1;
                        }else{
                            html_menu+=` 
                                            </ul>
                                        </li>`;
                        }
                        contador2=0;
                    }
    return html_menu+`</ul> 
             </div>`;
}

/*onMessage*/ 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.hasOwnProperty('funcion')){
        var array = request.parametros;
        var array = String(array).split(/\s*,\s*/);
        if (request.funcion == "execute"){
            execute.apply(this, array);
        }else if(request.funcion =='get_menus'){
            data=get_menus.apply(this, array);
            sendResponse({return: data});
        }
    }
    
});
