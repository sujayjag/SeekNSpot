// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         let currentTab = tabs[0];
//         let urlElem = document.getElementById('url');
//         let iframeElem = document.getElementById('streamlitFrame');
    
//         if (currentTab && currentTab.url && currentTab.url.includes('youtube.com')) {
//             urlElem.textContent = currentTab.url;
//         } else {
//             urlElem.textContent = "Not a YouTube page!";
//         }
//         //console.log(urlElem);
//     });

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let currentTab = tabs[0];
    let urlElem = document.getElementById('url');
    let iframeElem = document.getElementById('streamlitFrame');
    
    if (currentTab && currentTab.url && currentTab.url.includes('youtube.com')) {
        urlElem.textContent = currentTab.url;
        let newIframeSrc = iframeElem.src + currentTab.url;
        iframeElem.src = newIframeSrc;
    } else {
        urlElem.textContent = "Not a YouTube page!";
    }
});
