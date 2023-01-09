/*
   * @star
   * 用于csdn的文章页面
   * 1. 未登录-使文章完整显示
   * 2. 未登录-代码片段可以复制
   * 3. 未登录-优化观感，删除了未登录情况下csdn登录后复制字样
   * 4. all-删除了复制出的代码片段留有的版权信息，取消copy事件的传播
   * 5. all-去除csdn页面上的广告和推荐文章的选择框
*/

// 用于删除标签
function deleteLabel(element) {
    if (!element) {
        return;
    }
    element.remove();
}

// 清除广告
deleteLabel(document.querySelector(".toolbar-advert"));
deleteLabel(document.querySelector(".mb8"));
deleteLabel(document.querySelector("#footerRightAds"));
deleteLabel(document.querySelector(".programmer1Box"));
deleteLabel(document.querySelector("#recommendAdBox"));

// 去除推荐文章的选择框
deleteLabel(document.querySelector("#asideNewNps"));

// 显示完整文章
document.getElementById("article_content")[0]?.removeAttribute("style");
deleteLabel(document.getElementsByClassName('follow-text')[0]?.parentElement);
deleteLabel(document.getElementsByClassName('hide-article-box')[0]);
document.querySelectorAll("pre").forEach(e=>{
    e.classList.remove("set-code-hide");
})

// 代码片段可复制
document.querySelectorAll("code").forEach(c => {
    c.setAttribute("style","user-select: text; !important");
})

// 删除代码片段右上角关注按钮
document.querySelectorAll("pre>div").forEach(div => {
    deleteLabel(div);
})

document.querySelectorAll("pre>code>div").forEach(div => {
    deleteLabel(div);
})

// 复制时阻止事件传播 => 取消底部版权信息的加入
document.querySelectorAll('*').forEach(item => {
    item.oncopy = function(e) {
        e.stopPropagation();
    }
})
