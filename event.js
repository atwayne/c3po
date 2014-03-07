function onClickHandler(info, tab) {
	    chrome.tabs.create({
	    	url: "http://cn.bing.com/dict/search?q=" + info.selectionText});
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    var title = "Translate '%s'";
    chrome.contextMenus.create({"title": title, "contexts":["selection"],"id": "C3POTranslator"});
});