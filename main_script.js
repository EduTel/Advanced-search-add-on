var json_menus={
    "idiomas":{
        "es":{
             "Busquedas":{
                        "wikipedia"           : {"function":"Busquedas_wikipedia"},
                        "National Geographic" : {"function": "Busquedas_duckduckgoNationalgeograp"}
                        },
            "Multimedia":{
                        "YouTube"                : {"function":"Multimedia_youtube"},
                        "Imagenes en Google"     : {"function":"multimadia_googleImagenes"},
                        "Imagenes en Duckduckgo" : {"function":"Multimedia_duckduckgoImagenes"}
            },
            "Herramientas":{
                        "Traducir"          : {"function":"Herramientas_TraducirGoogle"},
                        "Google Maps"       : {"function":"Herramientas_googleMaps"},
                        "Duckduckgo qrcode" : {"function":"Herramientas_duckduckgoQr"},
                        "Duckduckgo Figlet" : {"function":"Herramientas_duckduckgoFiglet"},
                        "Cifrado":{
                                    "Detectar Hash"   : {"function":"Cifrado_duckduckgoHash"},
                                    "md5"             : {"function":"Cifrado_duckduckgoMd5"},
                                    "sha512"          : {"function":"Cifrado_duckduckgosha512"},
                                    "Sha"             : {"function":"Cifrado_duckduckgoSha"},
                                    "Sha224"          :{ "function":"Cifrado_duckduckgoSha224"},
                                    "Sha256"          : {"function":"Cifrado_duckduckgoSha256"},
                                    "Sha384"          : {"function":"Cifrado_duckduckgoSha384"}
                        }
            }
        },
        "en":{
             "Search":{
                        "wikipedia"             : {"function":"Busquedas_wikipedia"},
                        "National Geographic"   : {"function":"Busquedas_duckduckgoNationalgeograp"}
                        },
            "Multimedia":{
                        "youtube"           : {"function":"Multimedia_youtube"},
                        "Google Images"     : {"function":"multimadia_googleImagenes"},
                        "Images Duckduckgo" : {"function":"Multimedia_duckduckgoImagenes"}
            },
            "Tools":{
                        "Translate"         : {"function":"Herramientas_TraducirGoogle"},
                        "Google Maps"       : {"function":"Herramientas_googleMaps"},
                        "Duckduckgo qrcode" : {"function":"Herramientas_duckduckgoQr"},
                        "Duckduckgo Figlet" : {"function":"Herramientas_duckduckgoFiglet"},
                        "Cifrado":{
                                    "Detect Hash"   : {"function":"Cifrado_duckduckgoHash"},
                                    "md5"           : {"function":"Cifrado_duckduckgoMd5"},
                                    "sha512"        : {"function":"Cifrado_duckduckgosha512"},
                                    "Sha"           : {"function":"Cifrado_duckduckgoSha"},
                                    "Sha224"        : {"function":"Cifrado_duckduckgoSha224"},
                                    "Sha256"        : {"function":"Cifrado_duckduckgoSha256"},
                                    "Sha384"        : {"function":"Cifrado_duckduckgoSha384"}
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
  let contador_menu1=chrome.contextMenus.create({"title": categoria,contexts:["selection"]});
  for(seccion1 in json_menus["idiomas"][idioma_get][categoria]){
    if( typeof json_menus["idiomas"][idioma_get][categoria][seccion1] === 'object' ){
        if(Object.keys(json_menus["idiomas"][idioma_get][categoria][seccion1])[0].toString()=="function"){
            contador_menu2=chrome.contextMenus.create({"id" :Object.values(json_menus["idiomas"][idioma_get][categoria][seccion1])[0].toString(),"title": seccion1, "parentId": contador_menu1,contexts:["selection"]});
        }else{
            contador_menu2=chrome.contextMenus.create({"id" :seccion1,"title": seccion1, "parentId": contador_menu1,contexts:["selection"]});
        }
        for(seccion2 in json_menus["idiomas"][idioma_get][categoria][seccion1]){
            console.log(JSON.stringify(json_menus["idiomas"][idioma_get][categoria][seccion1]));
            console.log("____"+seccion2);
            if( typeof json_menus["idiomas"][idioma_get][categoria][seccion1][seccion2] === 'object' ){
                console.log("____________________________entro IF");
                 if(Object.keys(json_menus["idiomas"][idioma_get][categoria][seccion1][seccion2])[0].toString()=="function"){
                    contador_menu4=chrome.contextMenus.create({"id" :Object.values(json_menus["idiomas"][idioma_get][categoria][seccion1][seccion2])[0].toString(),"title": seccion2, "parentId": contador_menu2,contexts:["selection"]});
                 }else{
                    contador_menu2=chrome.contextMenus.create({"id" :seccion1,"title": seccion1, "parentId": contador_menu1,contexts:["selection"]});
                 }
            }else{}
        }
    }else{}
  }
}
//chrome.runtime.onInstalled.addListener(function() {
    //_________________________________________________________________________Capturar eventos de todos los contextMenus
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        menuItemId=info.menuItemId;
        prefijo=menuItemId.split('_',1);
        execute(info,tab,menuItemId);
    });
//});
function execute(info,tab,seccion){
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
            search_click("https://duckduckgo.com/?q=%21translate+"+info);
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
                      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><span class="caret"></span> Seleccionar</button>
                      <ul class="dropdown-menu">`;
                      let contador2  = 0;
                      let contador3  = 0;
                      let contador4  = 0;
                      var idioma_get = get_language();
                      for(categoria in json_menus["idiomas"][idioma_get]){
                          //html1=`<li><a value="${categoria}">${categoria}__1 <input name='selected' type="radio"></a></li>`;
                          for(seccion1 in json_menus["idiomas"][idioma_get][categoria]){
                                if( typeof json_menus["idiomas"][idioma_get][categoria][seccion1] === 'object' ){
                                    html2=`<li><a value="${Object.values(json_menus["idiomas"][idioma_get][categoria][seccion1])[0].toString()}">${seccion1}<input name='selected' type="radio"></a></li>`;
                                    if(contador2==0 ){
                                        if(Object.keys(json_menus["idiomas"][idioma_get][categoria][seccion1])[0].toString()=="function"){
                                            html_menu+=`<li class="dropdown-submenu">
                                                            <a class="test" value="${categoria}">${categoria} <!--<span class="caret"></span>--></a>
                                                                <ul class="dropdown-menu">`;
                                        }else{
                                            /*
                                            html_menu+=`<li class="dropdown-submenu">
                                                            <a class="test" value="${seccion1}">${seccion1}__1.2 <span class="caret"></span></a>
                                                            <ul class="dropdown-menu">`;
                                            */
                                        }
                                    }
                                    for(seccion2 in json_menus["idiomas"][idioma_get][categoria][seccion1]){
                                        if( typeof json_menus["idiomas"][idioma_get][categoria][seccion1][seccion2] === 'object' ){
                                            html3=`<li><a value="${Object.values(json_menus["idiomas"][idioma_get][categoria][seccion1][seccion2])[0].toString()}">${seccion2}<input name='selected' type="radio"></a></li>`;
                                            if(contador3==0 ){
                                                if(Object.keys(json_menus["idiomas"][idioma_get][categoria][seccion1][seccion2])[0].toString()=="function"){
                                                    html_menu+=`<li class="dropdown-submenu">
                                                                    <a class="test" value="${seccion1}">${seccion1} <!--<span class="caret"></span>--></a>
                                                                        <ul class="dropdown-menu">`;
                                                }else{
                                                    /*
                                                    html_menu+=`<li class="dropdown-submenu">
                                                                    <a class="test" value="${seccion2}">${seccion2}__2.2 <span class="caret"></span></a>
                                                                    <ul class="dropdown-menu">`;
                                                    */
                                                }
                                            }
                                            if(contador4==0){ html_menu+=html3;}else{ html_menu+=`</ul></li>`;};
                                            contador4=0;
                                            contador3++;
                                        }else{}
                                    }
                                    if(contador3==0){ html_menu+=html2;}else{ html_menu+=`</ul></li>`;}
                                    contador3=0;
                                    contador2++;
                                }else{}
                          }
                          if(contador2==0){html_menu+=html1;}else{ html_menu+=`</ul></li>`;}
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
