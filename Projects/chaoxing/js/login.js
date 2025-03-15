if (localStorage.getItem('study_token') !== null && localStorage.getItem('auto_login') !== 'false') {
    location.href = 'content.html'
}
let autoLoginCheckbox = document.getElementById('auto_login');
autoLoginCheckbox.addEventListener('change', function () {
    localStorage.setItem('auto_login', autoLoginCheckbox.checked);
});

const loginBtn = document.querySelector('#loginbutton');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const phonenumber = document.querySelector('#phonenumber');
    const pass = document.querySelector('#password');

    if (phonenumber.value !== '114514' || pass.value !== '114514') {
        e.preventDefault();
        // location.reload();
        pass.value = '';
        // alert('密码或用户错误');
        const p = document.querySelector('.err-tip');
        p.style.display = 'block';
    } else {
        // alert('登录成功！');
        const p = document.querySelector('.err-tip');
        p.style.display = 'none';
        localStorage.setItem('study_token', keys);
        setTimeout(() => {
            location.href = '../html/content.html';
        }, 1500);
    }
})

const box1_a = document.querySelector('.box a');
box1_a.addEventListener('click', (e) => {
    e.preventDefault();
    makeCode();
    const p = document.querySelector('.box p');
    const a = document.querySelector('.box a');
    p.style.display = 'none';
    a.style.display = 'none';
    const img = document.querySelector('.box img');
    img.style.opacity = '1';
    timer();
})
const passi = document.querySelector('.pass i');
passi.addEventListener('click', () => {
    const passwordInput = document.querySelector("#password");
    if (passi.classList.contains('eye-close')) {
        // 明文
        passi.classList.remove('eye-close');
        passi.classList.add('eye-open');
        passwordInput.type = "text";
    } else {
        // 暗文
        passi.classList.remove('eye-open');
        passi.classList.add('eye-close');
        passwordInput.type = "password";
    }
})

function timer() {
    let time = setTimeout(Late, 3000);
}
timer();

function Late() {
    const p = document.querySelector('.box p');
    const a = document.querySelector('.box a');
    p.style.display = 'block';
    a.style.display = 'block';
    const img = document.querySelector('.box img');
    img.style.opacity = '0.1';
}

//----------------------自动生成二维码----------------------------
var qrcode = new QRCode(document.getElementById("box1"), { //erweima 这个是你要把生成的二维码放在哪个容器的id
    width: 180, //二维码图片的长度
    height: 180 //宽度
});

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
let keys;

function makeCode() {
    keys = generateRandomString(8);
    var elText = "http://192.168.0.100:5500/%E9%A1%B9%E7%9B%AE/chaoxing/html/login.html?" + keys; //你要生成二维码的内容
    qrcode.makeCode(elText);
}
makeCode(); //调用上面代码生成二维码