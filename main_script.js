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
    if(categoria=='Busquedas'){
        if(seccion == "Busquedas_wikipedia"){
            search_click("https://duckduckgo.com/?q=%21wes+"+info+"&t=h");
        }else if(seccion == "Busquedas_wikipedia"){
            search_click("https://duckduckgo.com/?q=%21translate+"+info);
        }else if(seccion == "Busquedas_duckduckgoNationalgeograp"){
            search_click("https://duckduckgo.com/?q=%21natgeo+"+info);
        }
    }else if(categoria=='Multimedia'){
        if (seccion == "multimadia_googleImagenes") {
                search_click("https://duckduckgo.com/?q=%21pictures+"+info);
        }else if(seccion == "Multimedia_youtube") {
                search_click("https://duckduckgo.com/?q=%21yt+"+info+"&t=h_");
        }else if(seccion == "Multimedia_googleImagenes"){
            search_click("https://duckduckgo.com/?q=%21images+"+info+"&t=h_");
        }else if(seccion == "Multimedia_duckduckgoImagenes"){
            search_click("https://duckduckgo.com/?q=%21ddgi+"+info);
        }
    }else if(categoria=='Herramientas'){
        if(seccion == "Herramientas_googleMaps"){
            search_click("https://duckduckgo.com/?q=%21gmuk+"+info);
        }else if(seccion == "Herramientas_duckduckgoQr"){
            search_click("https://duckduckgo.com/?q=qrcode+"+info+"&t=h_&ia=answer");
        }else if(seccion == "Herramientas_duckduckgoFiglet"){
            search_click("https://duckduckgo.com/?q=figlet+"+info+"&t=h_&ia=answer");
        }
    }else if(categoria=='Cifrado'){
        if (seccion == "Cifrado_duckduckgoHash") {
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
}
function get_menus(){
    html_menu=`<div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Seleccionar<span class="caret"></span></button>
                    <ul class="dropdown-menu">`;
                    let contador1=0;
                    let contador2=0;
                    let contador3=0;
                    for(categoria in json_menus["idiomas"]["es"]){
                        html1=`<li><p value="${categoria}">${categoria}</p></li>`;
                        //let contador_menu1=chrome.contextMenus.create({"title": categoria,contexts:["selection"]});
                        for(seccion1 in json_menus["idiomas"]["es"][categoria]){
                            if(contador2==0){
                                  html_menu+=`<li class="dropdown-submenu">
                                            <p class="test">${categoria}<span class="caret"></span></p>
                                            <ul class="dropdown-menu">`;
                            }
                          
                                            if( typeof json_menus["idiomas"]["es"][categoria][seccion1] === 'object' ){
                                                /*
                                                html_menu+=`<li class="dropdown-submenu">
                                                                <p class="test" value="${seccion1}">${seccion1} <span class="caret"></span></p>
                                                                <ul class="dropdown-menu">`;
                                                //let contador_menu3=chrome.contextMenus.create({"id" :categoria+"_"+seccion1,"title": seccion1, "parentId": contador_menu1,contexts:["selection"]});
                                                for(seccion2 in json_menus["idiomas"]["es"][categoria][seccion1]){
                                                    html_menu+=`<li><p values="${seccion2}">${seccion2}</p></li>`;
                                                    //let contador_menu4=chrome.contextMenus.create({"id" :seccion1+"_"+seccion2,"title": json_menus["idiomas"]["es"][categoria][seccion1][seccion2], "parentId": contador_menu3,contexts:["selection"]});
                                                }
                                                html_menu+=` 
                                                                </ul>
                                                            </li>`;
                                                */
                                            }else{
                                                /*html_menu+=`<li><p values="${seccion1}">${seccion1}</p></li>`;*/
                                                //let contador_menu2=chrome.contextMenus.create({"id" :categoria+"_"+seccion1,"title": json_menus["idiomas"]["es"][categoria][seccion1], "parentId": contador_menu1,contexts:["selection"]});
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
