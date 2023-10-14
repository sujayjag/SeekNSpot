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

document.addEventListener("click", timestamp)

function timestamp() {
    let frame = document.getElementById('streamlitFrame').src
    let time = new URLSearchParams(frame).get('t')

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // chrome.tabs.update({ url: currentTab.url + "&t=" + time });
        chrome.tabs.update({ url: "https://www.github.com" });
    });
}
