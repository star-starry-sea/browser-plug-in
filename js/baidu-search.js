const listener_config = {attributes: true, childList: true, subtree: true};
const observer = new MutationObserver(() => {
    console.log("listen")
    document.querySelectorAll(".EC_result").forEach(e => {
        e.parentElement.parentElement.parentElement.remove();
    })
    document.querySelectorAll(".c-abstract").forEach(e => {
        e.parentElement.remove();
    })
})
window.onload = function () {
    const listen_body = document.querySelector("body");
    observer.observe(listen_body, listener_config);
}

window.onbeforeunload = function () {
    console.log("unload");
    observer.disconnect();
}