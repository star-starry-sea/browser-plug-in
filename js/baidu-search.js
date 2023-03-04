/*
  @star
  * 百度搜索页面
  * 1. all-去除百度搜索的广告
*/


const listener_config = {attributes: true, childList: true, subtree: true};

let observer = new MutationObserver(() => {
    document.querySelectorAll(".EC_result").forEach(e => {
        e.parentElement.parentElement.parentElement.remove();
    })
    document.querySelectorAll(".c-abstract").forEach(e => {
        e.parentElement.remove();
    })
})

function start_listen() {
    let listen_content = document.querySelector("body");
    if (listen_content) {
        observer.observe(listen_content, listener_config);
        return true;
    }

    return false;
}

let leave_homepage_observer = new MutationObserver(() => {
    if (window.location.href.indexOf("/s?") === -1) {
        return;
    }

    if (start_listen()) {
        leave_homepage_observer?.disconnect();
    }
})

window.onload = function () {
    if (window.location.href.indexOf("/s?") !== -1) {
        start_listen();
    }
    let listen_body = document.querySelector("body");
    leave_homepage_observer.observe(listen_body, listener_config);
}

window.onbeforeunload = function () {
    leave_homepage_observer?.disconnect();
    observer.disconnect();
}
