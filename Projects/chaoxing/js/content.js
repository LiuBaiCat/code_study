if (localStorage.getItem('study_token') == null) {
    location.href = 'login.html'
}
window.addEventListener('load', () => {
    const zhanghu = document.querySelector('.zhanghu');
    zhanghu.addEventListener('mouseenter', () => {
        const user_popup = document.querySelector('.user_popup');
        user_popup.style.display = 'block';
    })
    zhanghu.addEventListener('mouseleave', () => {
        const user_popup = document.querySelector('.user_popup');
        user_popup.style.display = 'none';
    })
})