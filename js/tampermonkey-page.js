/*
 * @star
 * 用于tampermonkey相关页面
 * all-去除页面广告
*/

// 清除页面广告
document.querySelectorAll("ins").forEach(e => {
    e.remove();
})
