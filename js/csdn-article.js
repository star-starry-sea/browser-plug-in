/*
   @star
   * 用于csdn的文章页面
   * 1. 未登录-使文章完整显示
   * 2. 未登录-代码片段可以复制
   * 3. 未登录-优化观感，删除了未登录情况下csdn登录后复制字样
   * 4. all-删除了复制出的代码片段留有的版权信息，取消copy事件的传播
   * 5. all-去除csdn页面上的广告和推荐文章的选择框
*/

// 用于删除标签
// 清除广告
document.querySelector(".toolbar-advert")?.remove();
document.querySelector(".mb8")?.remove();
document.querySelector("#footerRightAds")?.remove();
document.querySelector(".programmer1Box")?.remove();
document.querySelector("#recommendAdBox")?.remove();

// 去除推荐文章的选择框
document.querySelector("#asideNewNps")?.remove();

// 显示完整文章
document.querySelector("#article_content")?.removeAttribute("style");
(document.getElementsByClassName('follow-text')[0]?.parentElement);
document.getElementsByClassName('hide-article-box')[0]?.remove();
document.querySelectorAll("pre").forEach(e => {
    e.classList.remove("set-code-hide");
})

// 代码片段可复制
document.querySelectorAll("code").forEach(c => {
    c.setAttribute("style","user-select: text; !important");
})

// 删除代码片段右上角关注按钮
document.querySelectorAll("pre>div").forEach(div => {
    div?.remove();
})

document.querySelectorAll("pre>code>div").forEach(div => {
    div?.remove();
})

// 复制时阻止事件传播 => 取消底部版权信息的加入
document.querySelectorAll('*').forEach(item => {
    item.oncopy = function(e) {
        e.stopPropagation();
    }
})
