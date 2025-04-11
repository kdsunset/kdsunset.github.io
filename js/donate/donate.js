// donate.js
function bindEmailCopyHandler() {
    const link = document.getElementById('emailLink');
    const notification = document.getElementById('toast');

    if (!link || !notification) return;

    link.addEventListener('click', function (event) {
        event.preventDefault();

        const email = 'fyr89757@gmail.com';
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // 获取点击位置
        const xPos = event.clientX;
        const yPos = event.clientY;

        // 定位 toast 并显示
        notification.style.left = xPos + 'px';
        notification.style.top = (yPos + 20) + 'px';
        notification.style.display = 'inline';

        setTimeout(function () {
            notification.style.display = 'none';
        }, 2000);
    });
}
// 自动调用
document.addEventListener('DOMContentLoaded', function () {
    bindEmailCopyHandler();
});