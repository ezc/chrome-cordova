var inspectorScript = document.createElement('script');
inspectorScript.type = 'text/javascript';
inspectorScript.src = chrome.extension.getURL('scripts/cordova-mocks.js');
document.head.appendChild(inspectorScript);
