function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function search_click(info,tab){
    openInNewTab(info);
    alert(info);
    console.log("__________________________0");
    console.log(JSON.stringify(info, null, '\t'));
    console.log("__________________________1");
}
var Busquedas = chrome.contextMenus.create({"title": "Busquedas"});
var Busquedas1 = chrome.contextMenus.create({"title": "Buscar en YouTube", "parentId": Busquedas, "onclick": search_click("https://duckduckgo.com/?q=%21translate+car")});
var Herramientas1 = chrome.contextMenus.create({"title": "Buscar wikipedia", "parentId": Busquedas, "onclick": search_click("https://duckduckgo.com/?q=%21wes+carros&t=h_")});

var multimadia = chrome.contextMenus.create({"title": "Multimedia"});
var multimadia1 = chrome.contextMenus.create({"title": "Imagenes en Google", "parentId": multimadia, "onclick": search_click("https://duckduckgo.com/?q=%21pictures+cars")});

var Herramientas = chrome.contextMenus.create({"title": "Herramientas"});
var Herramientas1 = chrome.contextMenus.create({"title": "Buscar Hash", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=hash+4d186321c1a7f0f354b297e8914ab240&t=h_&ia=answer")});
var Herramientas2 = chrome.contextMenus.create({"title": "Traducir", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=%21translate+car")});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "some-command") {
        console.log("yay!");
    }
});