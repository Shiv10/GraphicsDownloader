const download = document.getElementById("submit");
download.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getMedia,
    });
});

const getMedia = async () => {
    let list = document.getElementsByTagName("img");
    
    for(let i = 0; i<list.length; i++){
        console.log(list[i].src);
        console.log(list[i].src.substring(list[i].src.lastIndexOf('.')));
    }

}