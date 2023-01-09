/*
   @star
   * 用于百度文库
   * 非会员-可用ctrl+c快捷键复制百度文库内容
*/

document.body.addEventListener("keydown", function (e) {
    // ctrl + c
    if (e.ctrlKey && e.key === 'c') {
        // 目标文本
        let targetStr = document.querySelector(".search-result-wrap .link").innerText.split("查看全部包含“")[1].split("”的文档")[0];

        if (navigator.clipboard) {
            navigator.clipboard.writeText(targetStr).then();
        } else {
            // 创建input元素
            let input = document.createElement("input");
            // 设置value为目标文本
            input.setAttribute("value", targetStr);
            // 将input添加到页面
            document.body.appendChild(input);
            // 选中input
            input.select();
            // 执行copy
            document.execCommand("copy");
            // 移除元素
            document.body.removeChild(input);
        }

        // 隐藏vip提示和遮罩层
        setTimeout(function () {
            document.querySelector(".dialog-mask").style.display = "none";
            document.querySelector(".copy-limit-dialog-v2").style.display = "none";
        }, 1);
    }
})

// 鼠标抬起触发
document.body.addEventListener("mouseup", function () {
    // 隐藏不想看见的盒子
    document.querySelector("#reader-helper").style.display = "none";
})
