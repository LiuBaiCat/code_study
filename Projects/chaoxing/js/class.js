if (localStorage.getItem('study_token') == null) {
    location.href = 'login.html'
}

let data = [{
        title: '网络操作系统',
        danwei: '&nbsp;',
        teacher: '张微群',
        completed: '0',
        img: 'wlczxt.png',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: '工匠班',
        danwei: '&nbsp;',
        teacher: '汪健',
        completed: '0',
        img: 'gjb.jpg',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: '美的历程：美学导论(2024秋公选课)',
        danwei: '中国社会科学院',
        teacher: '刘悦笛',
        completed: '0',
        img: 'mdlc.png',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: '诗词格律与欣赏(2024秋公选课)',
        danwei: '南开大学',
        teacher: '杨永明',
        completed: '0',
        img: 'scgl.png',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: 'Web前端框架',
        danwei: '&nbsp;',
        teacher: '钟艳',
        completed: '0',
        img: 'webqdkj.png',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: '移动应用开发',
        danwei: 'android编程',
        teacher: '汪健',
        completed: '0',
        img: 'ydyykf.jpg',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: '毛泽东思想和中国特色社会主义理论体系概论（2023版）',
        danwei: '第2次开课   开课时间：2024-09-05~2025-01-25',
        teacher: '张玉霞',
        completed: '0',
        img: 'mg.png',
        url: 'classin.html',
        xueqi: 20241,
    },
    {
        title: '电工基础',
        danwei: '&nbsp;',
        teacher: '袁涛',
        completed: '1',
        img: 'dgjc.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '大学生心理健康教育',
        danwei: '&nbsp;',
        teacher: '方杨清',
        completed: '1',
        img: 'xljk.png',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '思想道德与法治 在线开放课程',
        danwei: '3期：2024-02-26至2024-07-15',
        teacher: '思想道德与法治教研室',
        completed: '1',
        img: 'zz.png',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '计算机应用基础',
        danwei: '第7次开课   开课时间：2024-02-21~2024-09-21',
        teacher: '易欣',
        completed: '1',
        img: 'jsjyyjc.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: 'Web客户端编程（Web前端开发技术)',
        danwei: '第8次开课   开课时间：2024-02-12~2024-07-18',
        teacher: '储久良',
        completed: '1',
        img: 'webqd.png',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '大学英语',
        danwei: '第4次开课：2024-02-28至2024-09-10',
        teacher: '陈芳雯',
        completed: '1',
        img: 'dxyy.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '辅导员工作室-学生评价',
        danwei: '开展与我系学生工作相关的工作',
        teacher: '牟丽莎',
        completed: '1',
        img: 'fdy.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '面向对象编程',
        danwei: '&nbsp;',
        teacher: '汪健',
        completed: '1',
        img: 'mxdx.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '数据结构',
        danwei: '&nbsp;',
        teacher: '牟丽莎',
        completed: '1',
        img: 'sjjg.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '程序设计基础实训',
        danwei: '2023-2024-2期',
        teacher: '张蓉',
        completed: '1',
        img: 'cxsjjcsx.jpg',
        url: 'classin.html',
        xueqi: 20232,
    },
    {
        title: '机械制图（2023年秋季）',
        danwei: '第6次开课   开课时间：2023-07-8~2024-01-19',
        teacher: '严辉容',
        completed: '1',
        img: 'jxzt.jpg',
        url: 'classin.html',
        xueqi: 20231,
    },
]

let myKe_tab_li_name = 'study';

const xueqilis = document.querySelectorAll('.selectEn_con li');
xueqilis.forEach(li => {
    li.addEventListener('click', function () {
        const p = document.querySelector('.selectEn_name');
        p.innerHTML = this.innerHTML;
        xuanran(this.value, myKe_tab_li_name);
    })
});

function xuanran(value, myKe_tab_li_name) {
    const ul = document.querySelector('.myke_list ul');
    ul.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        if ((value == data[i].xueqi || value == 0 || data[i].title.includes(value)) && myKe_tab_li_name == 'study') {
            const li = document.createElement('li');
            li.classList.add('w_couritem');
            li.innerHTML = `
                <div class="w_courpic">
                    <a href="${data[i].url}" target="_blank" style="position:relative;display: block;" class="link-instanted">
                    ${data[i].completed === '0'? '' : '<div class="classover">本课程已结课</div>'}
                    <img src="../img/class/${data[i].img}">
                    </a>
                    <div class="myke_pic_top2"></div>
                    <div class="mylearn">
                        <div class="mylearn_name">
                            <a href="javascript:void(0);" class="mylearn_href w_xstk">退课</a>
                            <span class="mylearn_href mylearn_icon">更多</span>
                        </div>
                    </div>
                </div>
                <div class="w_courtxt">
                    <h3 class="w_courtit">
                        <a href="${data[i].url}" title="${data[i].title}" target="_blank">
                        ${data[i].title}
                        </a>
                    </h3>
                    <p class="w_courp">单位：${data[i].danwei}</p>
                    <p class="w_courp">教师姓名：${data[i].teacher}</p>
                </div>
        `
            ul.appendChild(li);
        }
    }
    const lis = document.querySelectorAll('.myke_ul li');
    lis.forEach(li => {
        const mylearn = li.querySelector('.mylearn');

        li.addEventListener('mouseenter', function () {
            mylearn.style.display = 'block';
        });

        li.addEventListener('mouseleave', function () {
            mylearn.style.display = 'none';
        });
        const tuike = li.querySelector('.mylearn_name .w_xstk');
        tuike.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('删除后无法恢复，确定要删除？')) {
                const liElement = li.closest('.w_couritem');
                liElement.parentNode.removeChild(liElement);
            }
        })
    });
}
xuanran(0, myKe_tab_li_name);


const xqselect = document.querySelector('.xqselect');
xqselect.addEventListener('click', () => {
    const selectEn_con = document.querySelector('.selectEn_con');
    selectEn_con.style.display = selectEn_con.style.display === 'block' ? 'none' : 'block';
    if (xqselect.classList.contains('selectEnBlue')) {
        // 如果已经包含，则移除  
        xqselect.classList.remove('selectEnBlue');
    } else {
        // 如果不包含，则添加  
        xqselect.classList.add('selectEnBlue');
    }
})

const searchclassspan = document.querySelector('.searchcourse');
searchclassspan.addEventListener('click', () => {
    const textvalue = document.querySelector('.searchid');
    // console.log(textvalue.value);
    xuanran(textvalue.value, myKe_tab_li_name);
})
const searchclass = document.querySelector('.searchid');
searchclass.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        xuanran(searchclass.value, myKe_tab_li_name);
    }
})

const myKe_tablis = document.querySelectorAll('.myKe_tab li');
myKe_tablis.forEach(li => {
    li.addEventListener('click', function () {
        for (let i = 0; i < myKe_tablis.length; i++) {
            if (myKe_tablis[i].classList.contains('active')) {
                myKe_tablis[i].classList.remove('active');
            }
        }
        this.classList.add('active');
        // console.log(this.id);
        if (this.id == 'teach') myKe_tab_li_name = 'teach';
        if (this.id == 'study') myKe_tab_li_name = 'study';
        xuanran(0, myKe_tab_li_name);
    })
});