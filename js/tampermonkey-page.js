/*
   @star
   * 用于tampermonkey相关页面
   * 1. all-去除页面广告
*/

window.onload = function () {
    // 清除页面广告
    document.querySelectorAll("ins").forEach(e => {
        e.remove();
    })
}
