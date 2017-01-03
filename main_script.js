function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function search_click(info, tab){
    openInNewTab(info);
    console.log("__________________________0");
    console.log(JSON.stringify(info, null, '\t'));
    console.log("__________________________1");
}
var Busquedas = chrome.contextMenus.create({"title": "Busquedas"});
var Busquedas1 = chrome.contextMenus.create({"title": "Buscar en YouTube", "parentId": Busquedas, "onclick": search_click("https://duckduckgo.com/?q=%21translate+car")});
var Herramientas1 = chrome.contextMenus.create({"title": "Buscar wikipedia", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=%21wes+carros&t=h_")});

var Herramientas = chrome.contextMenus.create({"title": "Herramientas"});
var Herramientas1 = chrome.contextMenus.create({"title": "Buscar HASH", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=hash+4d186321c1a7f0f354b297e8914ab240&t=h_&ia=answer")});
var Herramientas2 = chrome.contextMenus.create({"title": "Traducir", "parentId": Herramientas, "onclick": search_click("https://duckduckgo.com/?q=%21translate+car")});


