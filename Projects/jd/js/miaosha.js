//京东秒杀
document.addEventListener('DOMContentLoaded', function() {  
    function updateCountdown() {  
        const countdownElement = document.querySelector('.countdown-second');  
        const now = new Date();  
        const targetHours = 14; // 目标小时  
        const targetMinutes = 0; // 目标分钟  
        const targetSeconds = 0; // 目标秒数（通常我们设为0）  
  
        // 确保当前日期与目标日期是同一天  
        if (now.getHours() >= targetHours && (now.getHours() > targetHours || now.getMinutes() > targetMinutes)) {  
            // 如果已经过了14:00，则重置为明天的14:00  
            now.setDate(now.getDate() + 1);  
            now.setHours(targetHours);  
            now.setMinutes(targetMinutes);  
            now.setSeconds(targetSeconds);  
        } else {  
            // 否则，只设置小时、分钟和秒数为目标值  
            now.setHours(targetHours);  
            now.setMinutes(targetMinutes);  
            now.setSeconds(targetSeconds);  
        }  
  
        // 计算时间差  
        const diff = now - Date.now();  
  
        // 转换为小时、分钟和秒  
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);  
        const minutes = Math.floor((diff / (1000 * 60)) % 60);  
        const seconds = Math.floor((diff / 1000) % 60);  
  
        // 更新倒计时显示  
        countdownElement.querySelector('span:nth-child(1)').textContent = hours.toString().padStart(2, '0');  
        countdownElement.querySelector('span:nth-child(2)').textContent = minutes.toString().padStart(2, '0');  
        countdownElement.querySelector('span:nth-child(3)').textContent = seconds.toString().padStart(2, '0');  
  
        // 每秒更新一次倒计时  
        setTimeout(updateCountdown, 1000);  
    }  
  
    // 首次加载时更新倒计时  
    updateCountdown();  
});  
//----------------------------------------------------------------
// 获取元素  
var miaoshawp = document.querySelector('.miaoshawp');  
var moveprev = document.querySelector('.moveprev');  
var movenext = document.querySelector('.movenext');  
  
// 初始位置  
var initialPosition = 0;  
  
// 设置移动函数  
function moveElement(distance) {  
    // 更新位置  
    initialPosition += distance;  
  
    // 检查是否到达边界并循环  
    if (initialPosition > 0) { // 假设820px是屏幕宽度或可见区域  
        initialPosition = -1640; // 回到起始位置  
    } else if (initialPosition <= -2460) { 
        initialPosition = 0; // 回到最右边的开始位置
    }  
  
    // 应用新的transform值  
    miaoshawp.style.transform = 'translateX(' + initialPosition + 'px)';  
}  
  
// 添加事件监听器  
moveprev.addEventListener('click', function() {  
    moveElement(820); // 向左移动820px  
});  
  
movenext.addEventListener('click', function() {  
    moveElement(-820); // 向右移动820px  
});