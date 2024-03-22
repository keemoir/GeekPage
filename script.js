document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
    });

    // 是否使用自定义字体，默认为 false
    const useCustomFont = false;

    // 根据变量 useCustomFont 设置是否使用自定义字体
    if (useCustomFont) {
        const link = document.createElement('link');
        link.href = 'fonts/your-custom-font.ttf'; // 将 your-custom-font.ttf 替换为实际的字体文件名
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        document.body.style.fontFamily = 'YourCustomFont, Arial, sans-serif'; // 设置字体
    }
});
