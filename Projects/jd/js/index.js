let mdiv1 = document.querySelector('#div1');
let mdiv2 = document.querySelector('#div2');
let mli = document.querySelectorAll('#f3>li');

mli[2].onmouseover=function() {
    mli[2].style.background = '#fff';
    mdiv1.style.display = 'block';
}

mli[2].onmouseout=function() {
    mli[2].style.background = '';
    mdiv1.style.display = 'none';
}

mli[3].onmouseover=function() {
    mli[3].style.background = '#fff';
    mdiv2.style.display = 'block';
}

mli[3].onmouseout=function() {
    mli[3].style.background = '';
    mdiv2.style.display = 'none';
}

let textcc = document.querySelector('.cc');
let listcc = document.querySelector('.list');
let textArr = ['手机','电脑','服装','鞋子','美食'];
let i = 0;
function dy() {
    textcc.placeholder = textArr[i++];
    if(i > textArr.length - 1) i = 0;
}
let  ss = setInterval('dy()',1000);

textcc.onfocus = function () {
    clearInterval(ss);
    textcc.placeholder = '';
    listcc.style.display = 'block';
}
textcc.onblur = function () {
    ss = setInterval('dy()',1000);
    textcc.placeholder = textArr[i];
    listcc.style.display = 'none';
}

let listArr = ['苹果手机','华为手机','三星手机','电脑','鞋','美食','手机壳'];

textcc.oninput = function () {
    listcc.innerHTML = "";
    for (let i = 0; i < listArr.length; i++) {
        if(listArr[i].indexOf(textcc.value) != -1){
            listcc.innerHTML += '<li>' + listArr[i] + '</li>';
        }
    }
}
//楼层实现
let header1 = document.querySelector('#header');
let fs1 = document.querySelector('.fs');
let items = document.querySelectorAll('.items');
let pdd = document.querySelector('.pd');
let pdda = document.querySelectorAll('.pd>a');
let top1 = header1.offsetHeight;
let top2 = header1.offsetHeight + fs1.offsetHeight;
let top3 = header1.offsetHeight + fs1.offsetHeight + items[0].offsetHeight;
let top4 = header1.offsetHeight + fs1.offsetHeight + items[0].offsetHeight + items[1].offsetHeight;
pdd.className = 'pd';
// let top1 = header1.offsetHeight + fs1.offsetHeight;
// let top2 = header1.offsetHeight + fs1.offsetHeight + items[0].offsetHeight;
// let top3 = header1.offsetHeight + fs1.offsetHeight + items[0].offsetHeight + items[1].offsetHeight;
// let top4 = header1.offsetHeight + fs1.offsetHeight + items[0].offsetHeight + items[1].offsetHeight + items[2].offsetHeight;
document.onscroll = function () {
    pdda[0].style.color = "";
    pdda[1].style.color = "";
    pdda[2].style.color = "";
    let top = document.documentElement.scrollTop;
    if (top > top1) {
        pdd.className = 'pd pd-fixed';
    }else{
         pdd.className = 'pd';
    }
    if (top >= top1 && top <= top2) {
    pdda[0].style.color = "red";    
    }else if(top >top2 && top <= top3){
    pdda[1].style.color = "red";  
    }else if(top >top3 && top <= top4){
    pdda[2].style.color = "red";  
    }
let logoa = document.querySelector('#logo');
let navitemsElement = document.querySelector('.navitems'); 
let ww = document.querySelector('.w');
let formm = document.querySelector('.form');
//吸顶   
if (top >= top1) {
    header1.style.borderBottom = '2px solid red';
    header1.className = "header-fixed";
    logoa.style.backgroundPosition = '0 -120px'; 
    logoa.style.width = '125px';
    logoa.style.height = '40px';
    navitemsElement.style.display = 'none';
    ww.style.height = '52px';
    formm.style.top = '10px';
    logoa.style.top = '6px';
}else{
    header1.className = "";
    logoa.style.backgroundPosition = '0 0'; 
    navitemsElement.style.display = '';
    logoa.style.width = '190px';
    logoa.style.height = '120px';
    ww.style.height = '140px';
    formm.style.top = '40px';
    logoa.style.top = '10px';
    header1.style.borderBottom = '1px solid #dddd';
}

}

document.getElementById('back-to-top').addEventListener('click', function(event) {  
    event.preventDefault(); // 阻止默认的链接点击行为  
    window.scrollTo({  
        top: 0,  
        behavior: 'smooth' // 平滑滚动
    });  
});
pdda[0].addEventListener('click', function(event) {  
    event.preventDefault(); // 阻止默认的链接点击行为  
    window.scrollTo({  
        top: top1,  
        behavior: 'smooth' // 平滑滚动
    });  
});
pdda[1].addEventListener('click', function(event) {  
    event.preventDefault(); // 阻止默认的链接点击行为  
    window.scrollTo({  
        top: top2+10,  
        behavior: 'smooth' // 平滑滚动
    });  
});
pdda[2].addEventListener('click', function(event) {  
    event.preventDefault(); // 阻止默认的链接点击行为  
    window.scrollTo({  
        top: top4-170,  
        behavior: 'smooth' // 平滑滚动
    });  
});
//---------------------------------------
// 获取所有的 li 元素  
const listItems = document.querySelectorAll('#left_menu li');  
  
// 为每个 li 添加 mouseover 和 mouseout 事件监听器  
listItems.forEach((listItem) => {  
    listItem.addEventListener('mouseover', function() {  
        // 显示当前 li 下的 submenu  
        const submenu = this.querySelector('.submenu');  
        if (submenu) {  
            submenu.classList.remove('hidden');  
            submenu.classList.add('visible');  
        }  
    });  
  
    listItem.addEventListener('mouseout', function() {  
        // 隐藏当前 li 下的 submenu  
        const submenu = this.querySelector('.submenu');  
        if (submenu) {  
            submenu.classList.remove('visible');  
            submenu.classList.add('hidden');  
        }  
    });  
});