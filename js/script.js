const Browsers = {
	Unknown: 0,
	Chrome: 1,
	Edge: 2,
	Firefox: 3,
    Safari: 4,
    Opera: 5
}

function detectBrowser() {
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf("Edg/") > -1) {
        return Browsers.Edge;
    } else if (userAgent.indexOf("Chrome/") > -1) {
        return Browsers.Chrome;
    } else if (userAgent.indexOf("Firefox/") > -1) {
        return Browsers.Firefox;
    } else if (userAgent.indexOf("OPR/") > -1) {
        return Browsers.Opera;
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

        case Browsers.Opera:
            return "opera";

        default:
            return "#browsers";
    }
}

function getInstallButtonText(detectedBrowser) {
    switch (detectedBrowser) {
        case Browsers.Chrome:
            return "Install Chrome extension";

        case Browsers.Edge:
            return "Install Edge extension";

        case Browsers.Firefox:
            return "Install Firefox extension";

        case Browsers.Opera:
            return "Install Opera extension";

        default:
            return "Unsupported browser";
    }
}

function getInstallButtonInfo(detectedBrowser) {
    const buttonLink = getBrowserLink(detectedBrowser);
    const buttonText = getInstallButtonText(detectedBrowser);

    return { 
        "link": buttonLink, 
        "text": buttonText,
        "browser": detectedBrowser
    };
}

function initInstallButton(installButtonInfo) {
    const installButtonLink = document.querySelector(".installButtonLink");
    installButtonLink.setAttribute("href", installButtonInfo.link);

    if (installButtonInfo.browser === Browsers.Unknown) {
        installButtonLink.removeAttribute("target");
    }

    const installButton = document.querySelector(".installButton");
    installButton.textContent = installButtonInfo.text;
}

window.onload = function() {
    const detectedBrowser = detectBrowser();

    console.log("PostsDash: Browser detected: " + getKeyByValue(Browsers, detectedBrowser));

    const installButtonInfo = getInstallButtonInfo(detectedBrowser);
    initInstallButton(installButtonInfo);
}
