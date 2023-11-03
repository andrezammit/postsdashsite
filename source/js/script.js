const Browsers = {
	Unknown: 0,
	Chrome: 1,
	Edge: 2,
	Firefox: 3,
    Safari: 4
}

function detectBrowser() {
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf("Edg/") > -1) {
        return Browsers.Edge;
    } else if (userAgent.indexOf("Chrome/") > -1) {
        return Browsers.Chrome;
    } else if (userAgent.indexOf("Firefox/") > -1) {
        return Browsers.Firefox;
    } else if (userAgent.indexOf("Safari/") > -1) {
        return Browsers.Safari;
    } else {
        return Browsers.Unknown;
    }
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function getInstallButtonText(detectedBrowser) {
    const detectedBrowserName = getKeyByValue(Browsers, detectedBrowser);
    return "Install " + detectedBrowserName + " extension";
}

function replaceInstallButtonText(buttonText) {
    const installButton = document.querySelector(".installButton");
    installButton.textContent = buttonText;
}

window.onload = function() {
    const detectedBrowser = detectBrowser();

    console.log("PostsDash: Browser detected: " + getKeyByValue(Browsers, detectedBrowser));

    const installButtonText = getInstallButtonText(detectedBrowser);
    replaceInstallButtonText(installButtonText);
}
