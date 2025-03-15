if (localStorage.getItem('study_token') == null) {
    location.href = 'login.html'
}

let data = [{
        title: 'Linux基础',
        data: [{
                title: '网络操作系统简介',
                number: '1'
            },
            {
                title: '部署Linux系统',
                number: '2'
            }
        ]
    },
    {
        title: 'Linux常用命令',
        data: [{
                title: 'Linux基本操作',
                number: '2'
            },
            {
                title: 'Linux命令',
                number: '1'
            },
            {
                title: '重定向与管道',
                number: '1'
            }
        ]
    },
    {
        title: 'vi编辑器',
        data: [{
            title: '文本编辑器',
            number: '3'
        }, ]
    },
    {
        title: 'Linux用户和组的管理',
        data: [{
                title: '用户和组的管理',
                number: '1'
            },
            {
                title: '课前导学',
                number: '3'
            },
            {
                title: '学习视频:用户管理',
                number: '2'
            },
            {
                title: '课后测验',
                number: '1'
            },
            {
                title: '课后拓展',
                number: '1'
            },
        ]
    },
    {
        title: '文件系统与权限的管理',
        data: [{
            title: '权定限管理',
            number: '1'
        }, ]
    },
    {
        title: '磁盘管理',
        data: [{
            title: '磁盘管理',
            number: '1'
        }, ]
    },
    {
        title: '软件包的管理',
        data: [{
            title: '软件包的管理',
            number: '2'
        }, ]
    },
    {
        title: '任务管理',
        data: [{
            title: '任务管理',
            number: '1'
        }, ]
    },
    {
        title: '网络管理',
        data: [{
            title: '网络管理',
            number: '2'
        }, ]
    },
    {
        title: 'Linux的shell',
        data: [{
                title: 'shell基础',
                number: '1'
            },
            {
                title: 'shell脚本',
                number: '3'
            }
        ]
    },
    {
        title: '服务器安装',
        data: [{
                title: 'FTP服务器的配置管理',
                number: '2'
            },
            {
                title: 'DHCP服务器的配置管理',
                number: '1'
            }
        ]
    },
];
const timeline = document.querySelector('.timeline');
for (let i = 0; i < data.length; i++) {
    const div1 = document.createElement('div');
    div1.classList.add('units');
    div1.innerHTML = `
                        <h2 class="levelfirst clearfix">
                            <i class="knowledgeOpenBtn knowledgeOpenBtnImg"></i>
                            <span class="fl fontCon">
                                <a href="javascript:void(0)" title="${data[i].title}" style="cursor:default">
                                    <span class="chapterNumber">
                                        第${i+1}章 </span>
                                    ${data[i].title}
                                </a>
                            </span>
                        </h2>
        `
    timeline.appendChild(div1);
    for (let n = 0; n < data[i].data.length; n++) {
        const div2 = document.createElement('div');
        div2.classList.add('leveltwo');
        div2.innerHTML = `
       <h3 class="clearfix" style="margin-left:20px">
                                <a href="javascript:void(0)" style="display: inline-block;width: 562px;"
                                    class="link-instanted" target="_self">
                                    <span class="fl fontCon">
                                        <span class="chapterNumber">${i+1}.${n+1}</span>
                                        <span class="articlename" title="${data[i].data[n].title}">${data[i].data[n].title}</span>
                                    </span>
                                    <span class="icon">
                                        <input type="hidden" value="${data[i].data[n].number}" class="knowledgeJobCount">
                                        <em class="orange">${data[i].data[n].number}</em>
                                    </span>
                                </a>
                            </h3>
        `
        div1.appendChild(div2);
    }

}
// 获取所有的.knowledgeOpenBtn元素  
const buttons = document.querySelectorAll('.knowledgeOpenBtn');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        // 找到点击的<i>标签所在的.units容器  
        const units = event.target.closest('.units');

        // 现在可以根据units进行你需要的操作  
        const i = units.querySelector('h2 i');

        if (i.classList.contains('knowledgeCloseBtnImg')) {
            // 如果已经包含，则移除  
            i.classList.remove('knowledgeCloseBtnImg');
            i.classList.add('knowledgeOpenBtnImg');
            const leveltwo = units.querySelectorAll('.leveltwo');
            for (let i = 0; i < leveltwo.length; i++) {
                leveltwo[i].style.display = 'block';
            }
        } else {
            // 如果不包含，则添加  
            i.classList.remove('knowledgeOpenBtnImg');
            i.classList.add('knowledgeCloseBtnImg');
            const leveltwo = units.querySelectorAll('.leveltwo');
            for (let i = 0; i < leveltwo.length; i++) {
                leveltwo[i].style.display = 'none';
            }
        }

    });
});

const zt_u_b = document.querySelector('.zt_u_b');
const zt_u_bg = document.querySelector('.zt_u_bg');
zt_u_b.addEventListener('mouseenter', () => {
    zt_u_bg.style.display = 'block';
})
zt_u_bg.addEventListener('mouseenter', () => {
    zt_u_bg.style.display = 'block';
})
zt_u_b.addEventListener('mouseleave', () => {
    zt_u_bg.style.display = 'none';
})
zt_u_bg.addEventListener('mouseleave', () => {
    zt_u_bg.style.display = 'none';
})

document.getElementById('top').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止默认的链接点击行为  
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});
const top1 = document.querySelector('#top');
addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if(window.scrollY > 0){
        top1.style.display = 'block';
    }else{
        top1.style.display = 'none';
    }
});