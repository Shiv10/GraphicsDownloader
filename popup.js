const downloadAll = document.getElementById("submit");
const downloadPng = document.getElementById("submitPng");
const downloadSvg = document.getElementById("submitSvg");
const downloadJpeg = document.getElementById("submitJpeg");
const downloadJfif = document.getElementById("submitJfif");


downloadAll.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllMedia,
    });
});

downloadPng.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllPng,
    });
});

downloadSvg.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllSvg,
    });
});

downloadJpeg.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllJpeg,
    });
});

downloadJfif.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllJfif,
    });
});

const getAllMedia = async () => {
    let list = document.getElementsByTagName("img");
    if (!list.length > 0) {
        alert("There are no image elements in this page.");
        return;
    }
    for (let i = 0; i < list.length; i++) {
        const src = list[i].src;
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL
        link.download = src.substring(src.lastIndexOf('/'), src.lastIndexOf('.'));
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }
}

const getAllPng = async () => {
    let list = document.getElementsByTagName("img");
    if (!list.length > 0) {
        alert("There are no image elements in this page.");
        return;
    }

    pngList = [];

    for (let i = 0; i < list.length; i++) {
        const src = list[i].src;
        let type = src.substring(src.lastIndexOf('.'));
        if (type.includes("png")) {
            pngList.push(src);
        }
    }

    if (!pngList.length > 0) {
        alert("There are no png images on this page.");
        return;
    }

    for (let i = 0; i < pngList.length; i++) {

        const src = pngList[i];
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL
        link.download = src.substring(src.lastIndexOf('/'), src.lastIndexOf('.'));
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }
}

const getAllSvg = async () => {
    let list = document.getElementsByTagName("img");
    if (!list.length > 0) {
        alert("There are no image elements in this page.");
        return;
    }

    svgList = [];

    for (let i = 0; i < list.length; i++) {
        const src = list[i].src;
        let type = src.substring(src.lastIndexOf('.'));
        if (type.includes("svg")) {
            svgList.push(src);
        }
    }

    if (!svgList.length > 0) {
        alert("There are no svg images on this page.");
        return;
    }

    for (let i = 0; i < svgList.length; i++) {

        const src = svgList[i];
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL
        link.download = src.substring(src.lastIndexOf('/'), src.lastIndexOf('.'));
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }
}


const getAllJpeg = async () => {
    let list = document.getElementsByTagName("img");
    if (!list.length > 0) {
        alert("There are no image elements in this page.");
        return;
    }

    jpegList = [];

    for (let i = 0; i < list.length; i++) {
        const src = list[i].src;
        let type = src.substring(src.lastIndexOf('.'));
        if (type.includes("jpeg") || type.includes("jpg")) {
            jpegList.push(src);
        }
    }

    if (!jpegList.length > 0) {
        alert("There are no jpeg or jpg images on this page.");
        return;
    }

    for (let i = 0; i < jpegList.length; i++) {

        const src = jpegList[i];
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL
        link.download = src.substring(src.lastIndexOf('/'), src.lastIndexOf('.'));
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }
}

const getAllJfif = async () => {
    let list = document.getElementsByTagName("img");
    if (!list.length > 0) {
        alert("There are no image elements in this page.");
        return;
    }

    jfifList = [];

    for (let i = 0; i < list.length; i++) {
        const src = list[i].src;
        let type = src.substring(src.lastIndexOf('.'));
        if (type.includes("jfif")) {
            jfifList.push(src);
        }
    }

    if (!jfifList.length > 0) {
        alert("There are no jfif images on this page.");
        return;
    }

    for (let i = 0; i < jfifList.length; i++) {

        const src = jfifList[i];
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL
        link.download = src.substring(src.lastIndexOf('/'), src.lastIndexOf('.'));
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }
}
document.getElementById("close").addEventListener("click", () => {
    self.close();
});