document.getElementById('emailLink').addEventListener('click', function (event) {
    var email = 'fyr89757@gmail.com';
    var textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // 获取点击位置
    var xPos = event.clientX;
    var yPos = event.clientY;

    // 显示纯文本提示，并定位到点击位置
    var notification = document.getElementById('toast');
    notification.style.left = xPos + 'px';
    notification.style.top = (yPos + 20) + 'px'; // 在点击位置稍微下方显示
    notification.style.display = 'inline';  // 显示提示信息

    // 2秒后隐藏提示信息
    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
});