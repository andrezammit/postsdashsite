const Browsers = {
    Unknown: 0,
    Chrome: 1,
    Edge: 2,
    Firefox: 3,
    Opera: 4
};

function detectBrowser() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Edg/")) {
        return Browsers.Edge;
    }

    if (userAgent.includes("OPR/")) {
        return Browsers.Opera;
    }

    if (userAgent.includes("Chrome/")) {
        return Browsers.Chrome;
    }

    if (userAgent.includes("Firefox/")) {
        return Browsers.Firefox;
    }

    return Browsers.Unknown;
}

function getInstallButtonInfo(detectedBrowser) {
    switch (detectedBrowser) {
        case Browsers.Chrome:
            return { link: "chrome", text: "Install for Chrome", browser: detectedBrowser };
        case Browsers.Edge:
            return { link: "edge", text: "Install for Edge", browser: detectedBrowser };
        case Browsers.Firefox:
            return { link: "firefox", text: "Install for Firefox", browser: detectedBrowser };
        case Browsers.Opera:
            return { link: "opera", text: "Install for Opera", browser: detectedBrowser };
        default:
            return { link: "#browsers", text: "Choose your browser", browser: detectedBrowser };
    }
}

function initInstallButton() {
    const installButtonLink = document.querySelector(".installButtonLink");
    const installButton = document.querySelector(".installButton");

    if (installButtonLink === null || installButton === null) {
        return;
    }

    const installButtonInfo = getInstallButtonInfo(detectBrowser());

    installButtonLink.setAttribute("href", installButtonInfo.link);
    installButton.textContent = installButtonInfo.text;

    if (installButtonInfo.browser !== Browsers.Unknown) {
        installButtonLink.setAttribute("target", "_blank");
        installButtonLink.setAttribute("rel", "noopener noreferrer");
    }
}

document.addEventListener("DOMContentLoaded", initInstallButton);
