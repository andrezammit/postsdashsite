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

function getBrowserLink(detectedBrowser) {
    switch (detectedBrowser) {
        case Browsers.Chrome:
            return "chrome";

        case Browsers.Edge:
            return "edge";

        case Browsers.Firefox:
            return "firefox";
    }
}

function getInstallButtonInfo(detectedBrowser) {
    const detectedBrowserName = getKeyByValue(Browsers, detectedBrowser);
    
    const buttonLink = getBrowserLink(detectedBrowser);
    const buttonText = "Install " + detectedBrowserName + " extension";

    return { 
        "link": buttonLink, 
        "text": buttonText 
    };
}

function initInstallButton(installButtonInfo) {
    const installButtonLink = document.querySelector(".installButtonLink");
    installButtonLink.setAttribute("href", installButtonInfo.link);

    const installButton = document.querySelector(".installButton");
    installButton.textContent = installButtonInfo.text;
}

window.onload = function() {
    const detectedBrowser = detectBrowser();

    console.log("PostsDash: Browser detected: " + getKeyByValue(Browsers, detectedBrowser));

    const installButtonInfo = getInstallButtonInfo(detectedBrowser);
    initInstallButton(installButtonInfo);
}
