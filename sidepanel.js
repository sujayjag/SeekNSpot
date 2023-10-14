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

// function checkForNewURL() {
//     let desiredURL = document.querySelector('meta[name="desired-url"]').getAttribute('content');

//     if (desiredURL) {
//         chrome.tabs.update({ url: desiredURL });
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     let iframeContent = document.getElementById("streamlitFrame").contentWindow;
    
//     iframeContent.document.querySelector("button:contains('link change test')").addEventListener('click', function() {
//         checkForNewURL();
//     });
// });

// let iframeContent = document.getElementById("streamlitFrame").contentWindow;
// console.log(iframeContent);
// let buttons = iframeContent.document.querySelectorAll("button");
// let targetButton;

// for (let btn of buttons) {
//     console.log(btn.textContent);
//     if (btn.textContent.includes('link change test')) {
//         targetButton = btn;
//         break;
//     }
// }

// if (targetButton) {
//     targetButton.addEventListener('click', function() {
//         checkForNewURL();
//     });
// }