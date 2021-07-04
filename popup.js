const downloadAll = document.getElementById("submit");
downloadAll.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllMedia,
    });
});

const getAllMedia = async () => {
    let list = document.getElementsByTagName("img");
    if(!list.length>0){
        alert("There are no image elements in this page.");
        return;
    }
    for(let i = 0; i<list.length; i++){
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