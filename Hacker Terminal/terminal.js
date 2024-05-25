let text = ["Initialized...", "Reading your Files...", "Password files Detected...", "Sending all passwords and personal files to server...", "Cleaning up..."]
const additem = async (item) => {
    await Delay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}
const Delay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}


async function main() {
    let x = setInterval(() => {
        let end = document.body.getElementsByTagName("div");
        end = end[end.length - 1]
        if (end.innerHTML.endsWith("...")) {
            end.innerHTML = end.innerHTML.slice(0, end.innerHTML.length - 3)
        }
        else {

            end.innerHTML = end.innerHTML + "."
        }
    }, 100);

    for (const item of text) {
        await additem(item)
    }
    await randomDelay()
    clearInterval(x)

}
main()