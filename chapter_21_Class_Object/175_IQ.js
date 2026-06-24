class Browser {
    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("starting the browser")
    }
    closeBrowser() {
        console.log("starting the browser")
    }
}

let chrome = new Browser("Chrome");//Chrome launched
let firefox = new Browser("Firefox");//Firefox launched

console.log(chrome.isOpen);//true

