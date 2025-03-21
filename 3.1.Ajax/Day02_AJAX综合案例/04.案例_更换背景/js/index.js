/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
document.querySelector('.bg-ipt').addEventListener('change', e => {
    // 1. 选择图片上传，设置body背景
    console.log(e.target.files[0]);
    const fd = new FormData();
    fd.append('img', e.target.files[0]);
    axios({
        method:'post',
        url: 'http://hmajax.itheima.net/api/uploadimg',
        data: fd
    }).then((result) => {
        // console.log(result);
        const imgUrl = result.data.data.url;
        document.body.style.backgroundImage = `url(${imgUrl})`;

        // 2. 上传成功时，"保存"图片url网址
        localStorage.setItem('bgImg', imgUrl);
    
    });
})

// 3. 网页运行后，"获取"url网址使用
const bgUrl = localStorage.getItem('bgImg');
console.log(bgUrl);
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`);

//获取输入框内容，直接跳转搜索
document.querySelector('.search').addEventListener('click',()=>{
    const inputText = document.querySelector('.inputText');
    // console.log(inputText.value);
    window.location.href = `https://cn.bing.com/search?q=${inputText.value}`;
})

function handleEnterKey(event) {
    // 检查按键是否为回车键（键码为13）
    if (event.keyCode === 13) {
        // 改变当前窗口的地址，跳转到指定的URL
        const inputText = document.querySelector('.inputText');
        window.location.href = `https://cn.bing.com/search?q=${inputText.value}`;
    }
}