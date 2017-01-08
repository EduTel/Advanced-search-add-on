 $('.dropdown-toggle').dropdown();
document.addEventListener("DOMContentLoaded", function(event) {
     document.querySelector('#search').addEventListener("submit", function(event){
        event.preventDefault();
        search();
     });
});

function search(info,tab,categoria,seccion){
    chrome.runtime.sendMessage({greeting: "hello"},function(response) {
      document.getElementById("div").textContent = response.msg;
    });
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