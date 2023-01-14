/*
  @star
  * 百度搜索页面
  * 1. all-去除百度搜索的广告
*/

const listener_config = {attributes: true, childList: true, subtree: true};
const observer = new MutationObserver(() => {
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
    observer.disconnect();
}